function Contact() {
  return (
    <section className="mt-8 rounded-[34px] bg-[#17342a] px-6 py-7 text-white shadow-[0_24px_60px_rgba(15,30,24,0.16)] sm:px-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
            Contact
          </div>
          <h3 className="mt-3 font-display text-3xl sm:text-4xl">상담이 필요하시면 바로 연결하세요</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
            기존 콘텐츠는 유지하고, 실제 문의 행동은 더 빠르게 이어질 수 있도록 하단 CTA
            영역을 재구성했습니다.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            className="rounded-full bg-white px-6 py-4 text-center text-sm font-semibold text-[#17342a] transition hover:-translate-y-0.5 hover:bg-[#f7f0e4]"
            href="tel:0415733355"
          >
            대표 상담 041-573-3355
          </a>
          <a
            className="rounded-full border border-white/18 bg-white/10 px-6 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/18"
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
