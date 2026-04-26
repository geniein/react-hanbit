function Contact() {
  return (
    <section className="accent-panel mt-8 rounded-[28px] px-5 py-6 sm:rounded-[34px] sm:px-8 sm:py-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="accent-kicker font-ui text-xs font-semibold uppercase tracking-[0.22em]">
            Contact
          </div>
          <h3 className="mt-3 font-display text-[2rem] leading-tight sm:text-4xl">상담이 필요하시면 바로 연결하세요</h3>
          <p className="accent-copy mt-3 max-w-2xl text-sm leading-7 sm:text-base">
            기존 콘텐츠는 유지하고, 실제 문의 행동은 더 빠르게 이어질 수 있도록 하단 CTA
            영역을 재구성했습니다.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            className="rounded-2xl px-5 py-3.5 text-center text-sm font-semibold transition hover:-translate-y-0.5 sm:rounded-full sm:px-6 sm:py-4"
            style={{ backgroundColor: "var(--brand-soft)", color: "var(--surface-dark)" }}
            href="tel:0415733355"
          >
            대표 상담 041-573-3355
          </a>
          <a
            className="rounded-2xl border px-5 py-3.5 text-center text-sm font-semibold transition hover:-translate-y-0.5 sm:rounded-full sm:px-6 sm:py-4"
            style={{
              borderColor: "rgba(3, 199, 90, 0.28)",
              backgroundColor: "rgba(3, 199, 90, 0.06)",
              color: "inherit",
            }}
            href="tel:01090733343"
          >
            휴대전화 010-9073-3343
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
