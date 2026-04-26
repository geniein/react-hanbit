const actionClass =
  "flex items-center justify-center gap-2 rounded-full border border-white/45 bg-white/80 px-4 py-3 text-sm font-semibold text-[#17342a] shadow-[0_18px_40px_rgba(18,34,28,0.14)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white";

function FixedButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex">
        <a href="tel:0415733355" className={actionClass}>
          전화
        </a>
        <a
          href="https://blog.naver.com/cheonanhbcare"
          target="_blank"
          rel="noopener noreferrer"
          className={actionClass}
        >
          블로그
        </a>
        <a href="sms:01090733343" className={actionClass}>
          문자
        </a>
        <button type="button" onClick={scrollToTop} className={actionClass}>
          위로
        </button>
      </div>

      <div className="glass-panel fixed inset-x-3 bottom-3 z-40 flex items-center justify-between rounded-full px-2 py-2 text-sm text-[#17342a] sm:hidden">
        <a href="tel:0415733355" className="rounded-full px-4 py-2 font-semibold">
          전화
        </a>
        <a
          href="https://blog.naver.com/cheonanhbcare"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-2 font-semibold"
        >
          블로그
        </a>
        <a href="sms:01090733343" className="rounded-full px-4 py-2 font-semibold">
          문자
        </a>
        <button type="button" onClick={scrollToTop} className="rounded-full px-4 py-2 font-semibold">
          TOP
        </button>
      </div>
    </div>
  );
}

export default FixedButton;
