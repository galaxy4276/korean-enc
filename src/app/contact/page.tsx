"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import { trackEvent } from "@/lib/analytics";

const CONSTRUCTION_TYPES = [
  "수술실",
  "격리실",
  "중환자실",
  "무균실",
  "기타",
] as const;

const OFFICE = {
  name: "코리아이앤씨",
  phone: "010-8115-0500",
  email: "koreaencgo@nate.com",
  address: "경기도 화성시 정남면 세자로 301",
  lotAddress: "경기도 화성시 정남면 보통리 78-1",
  latitude: 37.193844472321,
  longitude: 126.97923308289,
};

const CONTACT_RECIPIENTS = (
  process.env.NEXT_PUBLIC_CONTACT_RECIPIENT_EMAILS ?? OFFICE.email
)
  .split(",")
  .map((email) => email.trim())
  .filter(Boolean);

const CONTACT_FORM_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
const KAKAO_MAP_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY;

interface FormData {
  organization: string;
  contactPerson: string;
  phone: string;
  email: string;
  constructionTypes: string[];
  estimatedArea: string;
  preferredTiming: string;
  details: string;
}

const initialFormData: FormData = {
  organization: "",
  contactPerson: "",
  phone: "",
  email: "",
  constructionTypes: [],
  estimatedArea: "",
  preferredTiming: "",
  details: "",
};

type SubmitStatus = "idle" | "sent" | "mailto";

type KakaoAddressResult = {
  x: string;
  y: string;
};

type KakaoMapWindow = Window & {
  kakao?: {
    maps: {
      load: (callback: () => void) => void;
      LatLng: new (latitude: number, longitude: number) => unknown;
      Map: new (
        container: HTMLElement,
        options: { center: unknown; level: number }
      ) => {
        setCenter: (position: unknown) => void;
      };
      Marker: new (options: { map: unknown; position: unknown }) => unknown;
      InfoWindow: new (options: { content: string }) => {
        open: (map: unknown, marker: unknown) => void;
      };
      services: {
        Geocoder: new () => {
          addressSearch: (
            address: string,
            callback: (result: KakaoAddressResult[], status: string) => void
          ) => void;
        };
        Status: {
          OK: string;
        };
      };
    };
  };
};

function buildEmailBody(formData: FormData) {
  return [
    "[코리아이앤씨 문의 접수]",
    "",
    `병원/기관명: ${formData.organization}`,
    `담당자명: ${formData.contactPerson}`,
    `연락처: ${formData.phone}`,
    `이메일: ${formData.email || "-"}`,
    `공사 유형: ${
      formData.constructionTypes.length > 0
        ? formData.constructionTypes.join(", ")
        : "-"
    }`,
    `예상 규모: ${formData.estimatedArea || "-"}`,
    `희망 시공 시기: ${formData.preferredTiming || "-"}`,
    "",
    "상세 문의 내용",
    formData.details || "-",
  ].join("\n");
}

function buildMailtoUrl(formData: FormData) {
  const subject = `[코리아이앤씨 문의] ${formData.organization} / ${formData.contactPerson}`;
  const params = new URLSearchParams({
    subject,
    body: buildEmailBody(formData),
  });

  return `mailto:${CONTACT_RECIPIENTS.join(",")}?${params.toString()}`;
}

function CheckIcon({ size = 10 }: { size?: number }) {
  return (
    <svg width={size} height={(size * 8) / 10} viewBox="0 0 10 8" fill="none">
      <path
        d="M1 4L3.5 6.5L9 1"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function KakaoOfficeMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapStatus, setMapStatus] = useState<"ready" | "fallback">(
    KAKAO_MAP_APP_KEY ? "ready" : "fallback"
  );
  const kakaoSearchUrl = useMemo(
    () =>
      `https://map.kakao.com/link/search/${encodeURIComponent(
        OFFICE.address
      )}`,
    []
  );

  useEffect(() => {
    if (!KAKAO_MAP_APP_KEY || !mapRef.current) return;

    const scriptId = "kakao-map-sdk";
    const loadMap = () => {
      const kakao = (window as KakaoMapWindow).kakao;
      if (!kakao?.maps || !mapRef.current) {
        setMapStatus("fallback");
        return;
      }

      kakao.maps.load(() => {
        if (!mapRef.current) return;

        const fallbackPosition = new kakao.maps.LatLng(
          OFFICE.latitude,
          OFFICE.longitude
        );
        const map = new kakao.maps.Map(mapRef.current, {
          center: fallbackPosition,
          level: 4,
        });

        const renderMarker = (position: unknown) => {
          map.setCenter(position);
          const marker = new kakao.maps.Marker({ map, position });
          const infoWindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:10px 14px;font-size:13px;font-weight:700;white-space:nowrap;">${OFFICE.name}</div>`,
          });
          infoWindow.open(map, marker);
        };

        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(OFFICE.address, (result, status) => {
          if (status === kakao.maps.services.Status.OK && result[0]) {
            renderMarker(
              new kakao.maps.LatLng(Number(result[0].y), Number(result[0].x))
            );
            return;
          }

          renderMarker(fallbackPosition);
        });
      });
    };

    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      loadMap();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_APP_KEY}&autoload=false&libraries=services`;
    script.onload = loadMap;
    script.onerror = () => setMapStatus("fallback");
    document.head.appendChild(script);
  }, []);

  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
        <div
          ref={mapRef}
          className={`absolute inset-0 ${mapStatus === "fallback" ? "hidden" : ""}`}
          aria-label={`${OFFICE.name} 위치 지도`}
        />
        {mapStatus === "fallback" && (
          <div className="absolute inset-0 flex flex-col items-start justify-end bg-neutral-100 p-6">
            <p className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-600">
              Office
            </p>
            <p className="mt-2 text-[18px] font-bold tracking-[-0.03em] text-neutral-900">
              {OFFICE.name}
            </p>
            <p className="mt-3 text-[14px] leading-[1.7] tracking-[-0.02em] text-neutral-600">
              {OFFICE.address}
              <br />
              {OFFICE.lotAddress}
            </p>
          </div>
        )}
      </div>
      <a
        href={kakaoSearchUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex rounded-[30px] border border-neutral-300 px-5 py-2.5 text-[14px] font-bold tracking-[-0.02em] text-neutral-900 transition-colors duration-150 hover:border-primary hover:text-primary"
      >
        카카오맵에서 보기
      </a>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [privacyConsent, setPrivacyConsent] = useState(false);

  function clearError(key: string) {
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: false }));
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError("");
    clearError(name);
  }

  function handleCheckbox(type: string) {
    setFormData((prev) => ({
      ...prev,
      constructionTypes: prev.constructionTypes.includes(type)
        ? prev.constructionTypes.filter((t) => t !== type)
        : [...prev.constructionTypes, type],
    }));
  }

  function validate(): boolean {
    const newErrors: Record<string, boolean> = {};
    if (!formData.organization.trim()) newErrors.organization = true;
    if (!formData.contactPerson.trim()) newErrors.contactPerson = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = true;
    }
    if (!privacyConsent) newErrors.privacyConsent = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) {
      const missingFields = [
        !formData.organization.trim() ? "organization" : "",
        !formData.contactPerson.trim() ? "contact_person" : "",
        !formData.phone.trim() ? "phone" : "",
        !privacyConsent ? "privacy_consent" : "",
      ]
        .filter(Boolean)
        .join(",");

      trackEvent("contact_form_validation_error", {
        source: "contact_page",
        missing_fields: missingFields,
        has_email_format_error: Boolean(
          formData.email.trim() &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
        ),
      });
      return;
    }

    trackEvent("contact_form_submit_attempt", {
      source: "contact_page",
      has_email: Boolean(formData.email.trim()),
      construction_type_count: formData.constructionTypes.length,
    });

    const payload = {
      recipients: CONTACT_RECIPIENTS,
      submittedAt: new Date().toISOString(),
      source: "korean-enc/contact",
      formData,
      email: {
        subject: `[코리아이앤씨 문의] ${formData.organization} / ${formData.contactPerson}`,
        body: buildEmailBody(formData),
      },
    };

    if (!CONTACT_FORM_ENDPOINT) {
      trackEvent("generate_lead", {
        source: "contact_page",
        method: "mailto",
        transport_type: "beacon",
      });
      trackEvent("contact_form_submit", {
        source: "contact_page",
        method: "mailto",
        transport_type: "beacon",
      });
      window.location.href = buildMailtoUrl(formData);
      setSubmitStatus("mailto");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (response.type !== "opaque" && !response.ok) {
        throw new Error(`Contact form request failed: ${response.status}`);
      }

      setSubmitStatus("sent");
      setFormData(initialFormData);
      setPrivacyConsent(false);
      trackEvent("generate_lead", {
        source: "contact_page",
        method: "endpoint",
      });
      trackEvent("contact_form_submit", {
        source: "contact_page",
        method: "endpoint",
      });
    } catch {
      trackEvent("contact_form_error", {
        source: "contact_page",
        method: "endpoint",
      });
      setSubmitError(
        "문의 전송에 실패했습니다. 잠시 후 다시 시도하시거나 전화로 문의해주세요."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      {/* Page Hero */}
      <section className="bg-primary-dark pt-[120px] pb-[80px] md:pt-[180px] md:pb-[120px]">
        <Container>
          <ScrollReveal>
            <h1 className="text-[42px] md:text-[56px] font-[900] leading-[1.24] md:leading-[1.34] text-white tracking-[-0.04em]">
              문의하기
            </h1>
            <p className="mt-4 text-[14px] md:text-[18px] font-medium text-neutral-400 tracking-[-0.02em] leading-[1.7]">
              클린룸 시공 전문가에게 직접 상담받으세요
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Two-Column Layout */}
      <section className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-[60px] md:gap-[80px]">
            {/* Left: Form */}
            <ScrollReveal>
              {submitStatus !== "idle" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center min-h-[400px]"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary/10">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-[20px] md:text-[28px] font-bold tracking-[-0.03em] text-neutral-900">
                      {submitStatus === "sent"
                        ? "접수가 완료되었습니다"
                        : "메일 앱이 열렸습니다"}
                    </p>
                    <p className="mt-3 text-[14px] md:text-[16px] text-neutral-600 leading-[1.7] tracking-[-0.02em]">
                      {submitStatus === "sent"
                        ? "영업일 기준 1일 이내 연락드리겠습니다."
                        : "메일 앱에서 수신자와 내용을 확인한 뒤 전송을 완료해주세요."}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitStatus("idle")}
                      className="mt-8 rounded-[30px] border border-neutral-300 px-6 py-3 text-[14px] font-bold tracking-[-0.02em] text-neutral-900 transition-colors duration-150 hover:border-primary hover:text-primary"
                    >
                      새 문의 작성
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-8">
                    {/* 병원/기관명 */}
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-[14px] font-medium text-neutral-600 tracking-[-0.02em] mb-2"
                      >
                        병원/기관명 <span className="text-accent">*</span>
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b-2 py-3 text-[16px] tracking-[-0.02em] outline-none transition-colors duration-150 ${
                          errors.organization
                            ? "border-red-500"
                            : "border-neutral-300 focus:border-primary"
                        }`}
                        placeholder="병원명 또는 기관명을 입력하세요"
                      />
                      {errors.organization && (
                        <p className="mt-1 text-[12px] text-red-500">
                          필수 입력 항목입니다
                        </p>
                      )}
                    </div>

                    {/* 담당자명 */}
                    <div>
                      <label
                        htmlFor="contactPerson"
                        className="block text-[14px] font-medium text-neutral-600 tracking-[-0.02em] mb-2"
                      >
                        담당자명 <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contactPerson"
                        name="contactPerson"
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b-2 py-3 text-[16px] tracking-[-0.02em] outline-none transition-colors duration-150 ${
                          errors.contactPerson
                            ? "border-red-500"
                            : "border-neutral-300 focus:border-primary"
                        }`}
                        placeholder="담당자 성함을 입력하세요"
                      />
                      {errors.contactPerson && (
                        <p className="mt-1 text-[12px] text-red-500">
                          필수 입력 항목입니다
                        </p>
                      )}
                    </div>

                    {/* 연락처 */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[14px] font-medium text-neutral-600 tracking-[-0.02em] mb-2"
                      >
                        연락처 <span className="text-accent">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b-2 py-3 text-[16px] tracking-[-0.02em] outline-none transition-colors duration-150 ${
                          errors.phone
                            ? "border-red-500"
                            : "border-neutral-300 focus:border-primary"
                        }`}
                        placeholder="010-0000-0000"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[12px] text-red-500">
                          필수 입력 항목입니다
                        </p>
                      )}
                    </div>

                    {/* 이메일 */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[14px] font-medium text-neutral-600 tracking-[-0.02em] mb-2"
                      >
                        이메일
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b-2 py-3 text-[16px] tracking-[-0.02em] outline-none transition-colors duration-150 ${
                          errors.email
                            ? "border-red-500"
                            : "border-neutral-300 focus:border-primary"
                        }`}
                        placeholder="example@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-[12px] text-red-500">
                          이메일 형식을 확인해주세요
                        </p>
                      )}
                    </div>

                    {/* 공사 유형 */}
                    <div>
                      <p className="text-[14px] font-medium text-neutral-600 tracking-[-0.02em] mb-4">
                        공사 유형
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {CONSTRUCTION_TYPES.map((type) => {
                          const isChecked =
                            formData.constructionTypes.includes(type);
                          return (
                            <label
                              key={type}
                              className={`flex items-center gap-2 cursor-pointer px-4 py-2.5 border transition-colors duration-150 select-none ${
                                isChecked
                                  ? "border-primary bg-primary/5 text-primary"
                                  : "border-neutral-300 text-neutral-600 hover:border-neutral-400"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleCheckbox(type)}
                                className="sr-only"
                              />
                              <span
                                className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center ${
                                  isChecked
                                    ? "bg-primary border-primary"
                                    : "border-neutral-400"
                                }`}
                              >
                                {isChecked && <CheckIcon />}
                              </span>
                              <span className="text-[14px] tracking-[-0.02em]">
                                {type}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* 예상 규모 */}
                    <div>
                      <label
                        htmlFor="estimatedArea"
                        className="block text-[14px] font-medium text-neutral-600 tracking-[-0.02em] mb-2"
                      >
                        예상 규모 (m&sup2;)
                      </label>
                      <input
                        id="estimatedArea"
                        name="estimatedArea"
                        type="text"
                        value={formData.estimatedArea}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-[16px] tracking-[-0.02em] outline-none transition-colors duration-150 focus:border-primary"
                        placeholder="예: 50"
                      />
                    </div>

                    {/* 희망 시공 시기 */}
                    <div>
                      <label
                        htmlFor="preferredTiming"
                        className="block text-[14px] font-medium text-neutral-600 tracking-[-0.02em] mb-2"
                      >
                        희망 시공 시기
                      </label>
                      <input
                        id="preferredTiming"
                        name="preferredTiming"
                        type="text"
                        value={formData.preferredTiming}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-[16px] tracking-[-0.02em] outline-none transition-colors duration-150 focus:border-primary"
                        placeholder="예: 2026년 상반기"
                      />
                    </div>

                    {/* 상세 문의 내용 */}
                    <div>
                      <label
                        htmlFor="details"
                        className="block text-[14px] font-medium text-neutral-600 tracking-[-0.02em] mb-2"
                      >
                        상세 문의 내용
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={5}
                        value={formData.details}
                        onChange={handleChange}
                        className="w-full bg-transparent border-2 border-neutral-300 p-4 text-[16px] tracking-[-0.02em] outline-none transition-colors duration-150 focus:border-primary resize-vertical"
                        placeholder="시공 관련 궁금하신 내용을 자유롭게 작성해주세요"
                      />
                    </div>

                    {/* 개인정보 수집·이용 동의 */}
                    <div>
                      <label className="flex cursor-pointer items-start gap-3 select-none">
                        <input
                          type="checkbox"
                          checked={privacyConsent}
                          onChange={() => {
                            setPrivacyConsent((prev) => !prev);
                            clearError("privacyConsent");
                          }}
                          className="sr-only"
                        />
                        <span
                          className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center border ${
                            privacyConsent
                              ? "border-primary bg-primary"
                              : errors.privacyConsent
                                ? "border-red-500"
                                : "border-neutral-400"
                          }`}
                        >
                          {privacyConsent && <CheckIcon size={11} />}
                        </span>
                        <span className="text-[13px] leading-[1.7] tracking-[-0.02em] text-neutral-600">
                          <span className="text-accent">*</span> 문의 처리를 위한{" "}
                          <span className="font-bold text-neutral-900">
                            개인정보 수집·이용
                          </span>
                          에 동의합니다. 수집 항목: 기관명·담당자명·연락처·이메일,
                          이용 목적: 견적 상담 및 회신, 보유 기간: 상담 완료 후 1년.
                        </span>
                      </label>
                      {errors.privacyConsent && (
                        <p className="mt-2 text-[12px] text-red-500">
                          개인정보 수집·이용에 동의해주세요
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-analytics-event="contact_form_button_click"
                      data-analytics-source="contact_page"
                      data-analytics-label="문의 보내기"
                      className="w-full py-4 bg-neutral-800 text-white text-[16px] md:text-[18px] font-[800] tracking-[-0.02em] rounded-[30px] transition-all duration-150 hover:bg-white hover:text-neutral-800 border-2 border-neutral-800 cursor-pointer disabled:cursor-wait disabled:border-neutral-400 disabled:bg-neutral-400 disabled:hover:text-white"
                    >
                      {isSubmitting ? "전송 중" : "문의 보내기"}
                    </button>
                    {submitError && (
                      <p className="text-[13px] text-red-500 tracking-[-0.02em] leading-[1.7]">
                        {submitError}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </ScrollReveal>

            {/* Right: Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-10">
                {/* Phone */}
                <div>
                  <p className="text-[12px] md:text-[14px] font-medium text-neutral-600 tracking-[-0.01em] uppercase mb-2">
                    Phone
                  </p>
                  <a
                    href={`tel:${OFFICE.phone}`}
                    data-analytics-event="phone_click"
                    data-analytics-source="contact_page_info"
                    data-analytics-label="전화번호"
                    className="text-[28px] md:text-[36px] font-bold tracking-[-0.04em] text-neutral-900 hover:text-primary transition-colors duration-150"
                  >
                    {OFFICE.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="text-[12px] md:text-[14px] font-medium text-neutral-600 tracking-[-0.01em] uppercase mb-2">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_RECIPIENTS.join(",")}`}
                    className="text-[16px] md:text-[18px] tracking-[-0.02em] text-neutral-900 hover:text-primary transition-colors duration-150"
                  >
                    {CONTACT_RECIPIENTS.join(", ")}
                  </a>
                </div>

                {/* Address */}
                <div>
                  <p className="text-[12px] md:text-[14px] font-medium text-neutral-600 tracking-[-0.01em] uppercase mb-2">
                    Address
                  </p>
                  <p className="text-[16px] md:text-[18px] tracking-[-0.02em] text-neutral-900 leading-[1.7]">
                    {OFFICE.address}
                    <br />
                    <span className="text-neutral-600">{OFFICE.lotAddress}</span>
                  </p>
                </div>

                {/* Map */}
                <KakaoOfficeMap />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Auxiliary SEO Links */}
      <section className="pb-[40px] md:pb-[60px]">
        <Container>
          <ScrollReveal>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/services/cost"
                className="text-[13px] md:text-[14px] text-neutral-500 tracking-[-0.01em] hover:text-primary transition-colors duration-150 underline underline-offset-2"
              >
                병원 클린룸 시공 비용
              </Link>
              <Link
                href="/services/process"
                className="text-[13px] md:text-[14px] text-neutral-500 tracking-[-0.01em] hover:text-primary transition-colors duration-150 underline underline-offset-2"
              >
                클린룸 시공순서
              </Link>
              <Link
                href="/services"
                className="text-[13px] md:text-[14px] text-neutral-500 tracking-[-0.01em] hover:text-primary transition-colors duration-150 underline underline-offset-2"
              >
                서비스 안내
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Privacy Note */}
      <section className="pb-[var(--spacing-section-mobile)] md:pb-[var(--spacing-section)]">
        <Container>
          <ScrollReveal>
            <p className="text-[12px] md:text-[14px] text-neutral-400 tracking-[-0.01em] leading-[1.7]">
              제출하신 정보는 문의 목적으로만 사용되며, 개인정보처리방침에 따라
              안전하게 관리됩니다.
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
