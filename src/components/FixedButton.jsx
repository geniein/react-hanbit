const actionClass =
  "flex items-center justify-center gap-2 rounded-full border border-white/45 bg-white/80 px-4 py-3 text-sm font-semibold shadow-[0_18px_40px_rgba(18,34,28,0.14)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white";

function FixedButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex">
        <a href="tel:0415733355" className={actionClass} style={{ color: "var(--ink)" }}>
          전화
        </a>
        <a
          href="https://blog.naver.com/cheonanhbcare"
          target="_blank"
          rel="noopener noreferrer"
          className={actionClass}
          style={{ color: "var(--ink)" }}
        >
          블로그
        </a>
        <a href="sms:01090733343" className={actionClass} style={{ color: "var(--ink)" }}>
          문자
        </a>
        <button type="button" onClick={scrollToTop} className={actionClass} style={{ color: "var(--ink)" }}>
          위로
        </button>
      </div>

      <div className="glass-panel fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-[22px] px-2 py-2 text-sm sm:hidden" style={{ color: "var(--ink)" }}>
        <a href="tel:0415733355" className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-center font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
          </svg>
          <span className="text-[0.72rem]">전화</span>
        </a>
        <a
          href="https://blog.naver.com/cheonanhbcare"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-center font-semibold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clipRule="evenodd" />
          </svg>
          <span className="text-[0.72rem]">블로그</span>
        </a>
        <a href="sms:01090733343" className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-center font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          <span className="text-[0.72rem]">문자</span>
        </a>
        <button type="button" onClick={scrollToTop} className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-center font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z" clipRule="evenodd" />
          </svg>
          <span className="text-[0.72rem]">TOP</span>
        </button>
      </div>
    </div>
  );
}

export default FixedButton;
