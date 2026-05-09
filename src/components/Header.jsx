import { useEffect, useRef } from "react";
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
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <h1 className="shrink-0 text-base font-semibold tracking-tight text-zinc-950 sm:text-lg">
          <Link to="/" className="rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500">
            한빛방문요양복지센터
          </Link>
        </h1>

        <nav
          ref={navRef}
          className="ml-auto flex min-w-0 flex-nowrap gap-1 overflow-x-auto rounded-full bg-zinc-100/80 p-1 text-sm text-zinc-600 shadow-inner"
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
    </header>
  );
}

export default Header;
