import Map from "../components/Map";

function Direction() {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="section-shell rounded-[36px] p-6 sm:p-8">
        <div className="section-kicker">Directions</div>
        <h2 className="mt-4 font-display text-[2.5rem] leading-none text-[#17342a] sm:text-[3.4rem]">
          오시는 길
        </h2>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="section-shell overflow-hidden rounded-[36px] p-3 sm:p-4">
          <div className="h-[360px] overflow-hidden rounded-[28px] sm:h-[480px]">
            <Map />
          </div>
        </div>

        <div className="rounded-[36px] bg-[#f6f1e8] p-6 shadow-[0_20px_50px_rgba(18,34,28,0.08)] sm:p-8">
          <div className="section-kicker">Location Info</div>
          <h3 className="mt-4 font-display text-[2.2rem] leading-none text-[#17342a] sm:text-[2.8rem]">
            한빛방문요양복지센터
          </h3>
          <div className="mt-6 space-y-5 text-sm leading-8 text-[#47574f] sm:text-base">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8b83]">주소</div>
              <div className="mt-1">천안시 동남구 충무로 158-35, 럭스프라자 501호</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8b83]">교통</div>
              <div className="mt-1">쌍용역 1번 출구에서 648m (도보10분소요)</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8b83]">상담</div>
              <div className="mt-1">041-573-3355</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Direction;
