import Map from "../components/Map";

function Direction() {
  return (
    <div>
      <section className="mb-8 rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-zinc-200/70 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Location</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">오시는 길</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          방문 상담이 필요하시면 전화로 먼저 예약해 주세요.
        </p>
      </section>

      <section className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-zinc-200/70">
        <div className="h-80 sm:h-[34rem]">
          <Map />
        </div>
        <div className="grid gap-4 p-6 sm:grid-cols-[1fr_auto] sm:p-8">
          <div>
            <p className="text-sm font-semibold text-emerald-600">한빛방문요양복지센터</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
              천안시 동남구 충무로 158-35, 501호
            </h2>
            <p className="mt-2 text-zinc-600">쌍용역 1번 출구에서 약 648m, 도보 약 10분</p>
          </div>
          <a
            href="tel:0415733355"
            className="flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
          >
            전화 문의
          </a>
        </div>
      </section>
    </div>
  );
}

export default Direction;
