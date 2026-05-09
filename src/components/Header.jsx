import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/intro", label: "센터 소개" },
  { to: "/policy", label: "장기요양 제도" },
  { to: "/service", label: "서비스 안내" },
  { to: "/article", label: "SNS" },
  { to: "/direction", label: "오시는 길" },
];

function Header() {
  const navRef = useRef(null);
  const location = useLocation();
  const scrollPos = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentMenu = navItems.find((item) => item.to === location.pathname)?.label ?? "홈";

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      scrollPos.current = nav.scrollLeft;
    };

    nav.addEventListener("scroll", onScroll);
    return () => nav.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) navRef.current.scrollLeft = scrollPos.current;
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <h1 className="shrink-0 text-base font-semibold tracking-tight text-zinc-950 sm:text-lg">
          <Link to="/" className="rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500">
            한빛방문요양복지센터
          </Link>
        </h1>

        <div className="ml-auto flex items-center gap-2 sm:hidden">
          <span className="max-w-28 truncate rounded-full bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
            {currentMenu}
          </span>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-950 ring-1 ring-zinc-200 transition hover:bg-white"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <nav
          ref={navRef}
          className="ml-auto hidden min-w-0 flex-nowrap gap-1 overflow-x-auto rounded-full bg-zinc-100/80 p-1 text-sm text-zinc-600 shadow-inner sm:flex"
          aria-label="주요 메뉴"
        >
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`shrink-0 rounded-full px-3 py-2 transition ${
                  active
                    ? "bg-white text-zinc-950 shadow-sm"
                    : "hover:bg-white/70 hover:text-zinc-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div
        className={`sm:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <nav className="mx-4 mb-4 rounded-[1.5rem] bg-white p-2 text-base font-semibold text-zinc-700 shadow-2xl shadow-zinc-950/10 ring-1 ring-zinc-200/70">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 transition ${
                  active ? "bg-emerald-50 text-emerald-700" : "hover:bg-zinc-50 hover:text-zinc-950"
                }`}
              >
                {item.label}
                <span className="text-zinc-300" aria-hidden="true">›</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
