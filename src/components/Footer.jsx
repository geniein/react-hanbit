import logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <footer className="px-4 pb-24 sm:px-6 sm:pb-8 lg:px-10">
      <div className="accent-panel mx-auto flex max-w-[1380px] flex-col gap-5 rounded-[28px] px-5 py-6 sm:rounded-[36px] sm:px-8 sm:py-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="accent-kicker mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
            Hanbit Care Center
          </div>
          <h2 className="font-display text-[2rem] leading-tight sm:text-4xl">
            익숙한 일상을 지키는 방문요양 서비스
          </h2>
          <p className="accent-copy mt-4 max-w-2xl text-sm leading-7 sm:text-base">
            필요한 정보는 유지하고, 더 신뢰감 있고 정돈된 화면으로 한빛방문요양복지센터의
            전문성을 전달하도록 구성했습니다.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="hidden overflow-hidden rounded-[28px] border border-white/10 bg-white/8 p-2 sm:block">
            <img
              src={logo}
              alt="한빛방문요양복지센터 로고"
              className="h-28 w-40 rounded-[22px] object-cover sm:h-32 sm:w-48"
            />
          </div>
          <div className="text-sm" style={{ color: "inherit" }}>
            <div className="font-semibold">한빛방문요양복지센터</div>
            <div className="mt-2">천안시 동남구 충무로 158-35, 럭스프라자 501호</div>
            <div className="mt-1">대표 상담 041-573-3355</div>
            <div className="accent-copy mt-4 text-xs">© 2025 Hanbit Care Center. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
