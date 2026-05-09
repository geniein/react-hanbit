import { useState } from "react";
import Contact from "../components/Contact";
import Paragraph from "../components/Paragraph";
import SubHeader from "../components/SubHeader";
import data from "../data.json";

function Service() {
  const [page, setPage] = useState("nursing");
  const items = page === "nursing" ? data.nursing : data.nonbenefit;

  return (
    <div>
      <section className="mb-8 rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-zinc-200/70 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Service</p>
        <h1 className="mt-3 text-[2rem] font-semibold tracking-tight text-zinc-950 min-[390px]:text-4xl sm:text-5xl">
          서비스 안내
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-8 text-zinc-600 min-[390px]:text-lg sm:leading-9">
          방문요양과 비급여 서비스를 어르신의 생활 리듬에 맞춰 제공합니다.
        </p>
      </section>

      <SubHeader>
        <button className={tabClass(page === "nursing")} onClick={() => setPage("nursing")} type="button">
          방문요양
        </button>
        <button className={tabClass(page === "nonbenefit")} onClick={() => setPage("nonbenefit")} type="button">
          비급여 서비스
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

export default Service;
