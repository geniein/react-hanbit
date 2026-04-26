import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/intro", label: "한빛 방문요양" },
  { to: "/policy", label: "장기요양제도" },
  { to: "/service", label: "서비스 내용" },
  { to: "/article", label: "SNS" },
  { to: "/direction", label: "오시는 길" },
];

function Header() {
  const navRef = useRef(null);
  const location = useLocation();
  const scrollPos = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return undefined;

    const onScroll = () => {
      scrollPos.current = nav.scrollLeft;
    };

    nav.addEventListener("scroll", onScroll);
    return () => nav.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (nav) {
      nav.scrollLeft = scrollPos.current;
    }
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="glass-panel mx-auto flex max-w-[1380px] flex-col items-stretch gap-3 rounded-[28px] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 lg:px-7">
        <Link to="/" className="min-w-0 sm:w-auto sm:max-w-none sm:flex-[0_0_auto]">
          <div className="font-ui text-[0.68rem] font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--brand-strong)" }}>
            Premium Care
          </div>
          <h1 className="font-display truncate text-[1.2rem] font-semibold leading-none sm:text-[2.35rem] lg:text-[2.6rem]" style={{ color: "var(--brand-strong)" }}>
            한빛방문요양복지센터
          </h1>
        </Link>

        <nav
          ref={navRef}
          className="scrollbar-hidden font-ui -mx-1 flex w-full flex-nowrap items-center justify-between gap-1 overflow-x-auto px-1 pb-0 text-[0.82rem] sm:mx-0 sm:w-auto sm:flex-1 sm:justify-end sm:gap-2 sm:px-0 sm:pb-1 sm:text-[0.98rem]"
        >
          {navItems.map((item, index) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`${index === 0 ? "hidden sm:inline-flex" : "inline-flex"} shrink-0 rounded-full px-2.5 py-2.5 font-medium transition sm:px-4 ${
                  active ? "shadow-lg" : "hover:bg-white"
                }`}
                style={{
                  backgroundColor: active ? "var(--surface-dark)" : "rgba(255, 255, 255, 0.88)",
                  color: active ? "var(--ink-inverse)" : "var(--ink)",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
