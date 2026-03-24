"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

const CONSTRUCTION_TYPES = [
  "수술실",
  "격리실",
  "중환자실",
  "무균실",
  "기타",
] as const;

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

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
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
              {submitted ? (
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
                      접수가 완료되었습니다
                    </p>
                    <p className="mt-3 text-[14px] md:text-[16px] text-neutral-600 leading-[1.7] tracking-[-0.02em]">
                      영업일 기준 1일 이내 연락드리겠습니다.
                    </p>
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
                        className="w-full bg-transparent border-b-2 border-neutral-300 py-3 text-[16px] tracking-[-0.02em] outline-none transition-colors duration-150 focus:border-primary"
                        placeholder="example@email.com"
                      />
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
                                {isChecked && (
                                  <svg
                                    width="10"
                                    height="8"
                                    viewBox="0 0 10 8"
                                    fill="none"
                                  >
                                    <path
                                      d="M1 4L3.5 6.5L9 1"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                )}
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

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-neutral-800 text-white text-[16px] md:text-[18px] font-[800] tracking-[-0.02em] rounded-[30px] transition-all duration-150 hover:bg-white hover:text-neutral-800 border-2 border-neutral-800 cursor-pointer"
                    >
                      문의 보내기
                    </button>
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
                    href="tel:010-8115-0500"
                    className="text-[28px] md:text-[36px] font-bold tracking-[-0.04em] text-neutral-900 hover:text-primary transition-colors duration-150"
                  >
                    010-8115-0500
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="text-[12px] md:text-[14px] font-medium text-neutral-600 tracking-[-0.01em] uppercase mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:koreaencgo@nate.com"
                    className="text-[16px] md:text-[18px] tracking-[-0.02em] text-neutral-900 hover:text-primary transition-colors duration-150"
                  >
                    koreaencgo@nate.com
                  </a>
                </div>

                {/* Address */}
                <div>
                  <p className="text-[12px] md:text-[14px] font-medium text-neutral-600 tracking-[-0.01em] uppercase mb-2">
                    Address
                  </p>
                  <p className="text-[16px] md:text-[18px] tracking-[-0.02em] text-neutral-900 leading-[1.7]">
                    경기도 화성시 정남면 보통리 78-1
                  </p>
                </div>

                {/* Map Placeholder */}
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-neutral-200 to-neutral-100 flex items-center justify-center">
                  <span className="text-[14px] text-neutral-400 tracking-[-0.02em]">
                    지도 영역
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
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
