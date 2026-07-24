export const dynamic = "force-static";

export function GET() {
  return new Response(
    "naver-site-verification: naver70647186543a2dce4f533c925c9b1a95.html",
    {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    }
  );
}
