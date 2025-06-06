function Header() {
    return (
      <header className="bg-green-600 text-white p-4 fixed top-0 left-0 w-full h-16 shadow z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold shrink-0">
            <a href="/" className="hover:underline">한빛방문요양복지센터</a>
            </h1>
          <nav className="flex flex-row flex-nowrap gap-4 overflow-x-auto">
            {/* <a href="/" className="hover:underline shrink-0">홈</a> */}
            <a href="/intro" className="hover:underline shrink-0">한빛 방문요양</a>
            <a href="/policy" className="hover:underline shrink-0">장기요양제도</a>
            <a href="/service" className="hover:underline shrink-0">서비스 내용</a>
            <a href="/article" className="hover:underline shrink-0">SNS</a>
            <a href="/map" className="hover:underline shrink-0">오시는 길</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  