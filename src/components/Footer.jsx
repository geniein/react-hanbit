import logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white pb-20 sm:pb-0">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-zinc-600 sm:grid-cols-[1fr_auto] sm:px-6">
        <div>
          <p className="text-base font-semibold text-zinc-950">한빛방문요양복지센터</p>
          <p className="mt-2">천안시 동남구 충무로 158-35, 501호</p>
          <p className="mt-1">상담전화 041-573-3355</p>
        </div>
        <img src={logo} alt="한빛방문요양복지센터 로고" className="h-16 w-auto rounded-2xl object-cover" />
      </div>
      <div className="border-t border-zinc-100 px-4 py-4 text-center text-xs text-zinc-500">
        © 2026 한빛방문요양복지센터. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
