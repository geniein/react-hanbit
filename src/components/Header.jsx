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
      <div className="glass-panel mx-auto flex max-w-[1380px] items-center justify-between gap-4 rounded-[28px] px-4 py-3 text-[#17342a] sm:px-6">
        <Link to="/" className="min-w-0">
          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#7a8d84]">
            Premium Care
          </div>
          <h1 className="font-display truncate text-[1.6rem] font-semibold leading-none text-[#17342a] sm:text-[2rem]">
            한빛방문요양복지센터
          </h1>
        </Link>

        <nav
          ref={navRef}
          className="flex max-w-[60vw] flex-nowrap items-center gap-2 overflow-x-auto pb-1 text-sm sm:max-w-none sm:text-[0.95rem]"
        >
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`shrink-0 rounded-full px-4 py-2.5 transition ${
                  active
                    ? "bg-[#17342a] text-white shadow-lg"
                    : "bg-white/50 text-[#2f473d] hover:bg-white/80"
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
