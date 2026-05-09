function FixedButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const actions = [
    { label: "전화", href: "tel:0415733355", icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" },
    { label: "블로그", href: "https://blog.naver.com/cheonanhbcare", icon: "M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Zm3.75 6a.75.75 0 0 1 .75.75 3.75 3.75 0 0 1-1.27 2.812.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" },
    { label: "문자", href: "sms:01090733343", icon: "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Zm21-1.762V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" },
  ];

  return (
    <>
      <div className="fixed bottom-8 right-8 z-40 hidden flex-col gap-3 sm:flex">
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-zinc-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
              <path d={action.icon} />
            </svg>
            {action.label}
          </a>
        ))}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-zinc-950 shadow-xl shadow-zinc-950/10 ring-1 ring-zinc-200 transition hover:-translate-y-0.5"
        >
          ↑ Top
        </button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-white/70 bg-white/85 text-xs font-semibold text-zinc-700 shadow-2xl backdrop-blur-xl sm:hidden">
        {actions.map((action) => (
          <a key={action.label} href={action.href} className="flex flex-col items-center gap-1 px-2 py-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
              <path d={action.icon} />
            </svg>
            {action.label}
          </a>
        ))}
        <button type="button" onClick={scrollToTop} className="flex flex-col items-center gap-1 px-2 py-3">
          <span className="text-lg leading-none">↑</span>
          Top
        </button>
      </div>
    </>
  );
}

export default FixedButton;
