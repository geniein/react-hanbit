import { useState } from "react";
import Contact from "../components/Contact";
import Paragraph from "../components/Paragraph";
import SubHeader from "../components/SubHeader";
import data from "../data.json";

function Policy() {
  const [page, setPage] = useState("policy");
  const items = page === "policy" ? data.policy : data.application;

  return (
    <div>
      <section className="mb-8 rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-zinc-200/70 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Policy</p>
        <h1 className="mt-3 text-[2rem] font-semibold tracking-tight text-zinc-950 min-[390px]:text-4xl sm:text-5xl">
          장기요양 제도
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-8 text-zinc-600 min-[390px]:text-lg sm:leading-9">
          등급 신청부터 이용 기준까지 필요한 정보를 정리했습니다.
        </p>
      </section>

      <SubHeader>
        <button className={tabClass(page === "policy")} onClick={() => setPage("policy")} type="button">
          제도 안내
        </button>
        <button className={tabClass(page === "application")} onClick={() => setPage("application")} type="button">
          등급 신청
        </button>
      </SubHeader>

      {items.map((val, index) => (
        <Paragraph key={`${val.title}-${index}`} {...val} />
      ))}
      <Contact />
    </div>
  );
}

function tabClass(active) {
  return `flex-1 rounded-full px-4 py-3 text-[15px] font-semibold transition sm:text-base ${
    active ? "bg-zinc-950 text-white shadow-sm" : "text-zinc-600 hover:bg-white hover:text-zinc-950"
  }`;
}

export default Policy;
