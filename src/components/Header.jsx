import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {

  const navRef = useRef(null);
  const location = useLocation();

  // 스크롤 위치 저장용
  const scrollPos = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      scrollPos.current = nav.scrollLeft;
    };

    nav.addEventListener("scroll", onScroll);

    return () => {
      nav.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (nav) {
      nav.scrollLeft = scrollPos.current;
    }
  }, [location.pathname]);

    return (
      <header className="bg-green-600 text-white p-4 fixed top-0 left-0 w-full h-16 shadow z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold shrink-0 px-1">
            <Link to="/" className="hover:underline">한빛방문요양복지센터</Link>
          </h1>
          <nav ref={navRef} className="flex flex-row flex-nowrap gap-4 overflow-x-auto">
            <Link to="/intro"
                  className={`hover:underline shrink-0 ${
          location.pathname === '/intro'
            ? 'text-gray-50 font-bold underline'
            : ''
        }`}
            >한빛 방문요양</Link>
            <Link to="/policy" className={`hover:underline shrink-0 ${
          location.pathname === '/policy'
            ? 'text-gray-50 font-bold underline'
            : ''
        }`}>장기요양제도</Link>
            <Link to="/service" className={`hover:underline shrink-0 ${
          location.pathname === '/service'
            ? 'text-gray-50 font-bold underline'
            : ''
        }`}>서비스 내용</Link>
            <Link to="/article" className={`hover:underline shrink-0 ${
          location.pathname === '/article'
            ? 'text-gray-50 font-bold underline'
            : ''
        }`}>SNS</Link>
            <Link to="/direction" className={`hover:underline shrink-0 ${
          location.pathname === '/direction'
            ? 'text-gray-50 font-bold underline'
            : ''
        }`}>오시는 길</Link>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  