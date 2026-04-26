import { useState } from "react";
import Contact from "../components/Contact";
import Paragraph from "../components/Paragraph";
import SubHeader from "../components/SubHeader";
import data from "../data.json";

function Service() {
  const [page, setPage] = useState("nursing");
  const dataNursing = data.nursing;
  const dataNonbenefit = data.nonbenefit;

  const tabClass = (active) =>
    `rounded-full px-5 py-3 text-sm font-semibold transition sm:text-base ${
      active ? "bg-[#17342a] text-white shadow-lg" : "bg-white/55 text-[#2a4037] hover:bg-white"
    }`;

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="section-shell rounded-[36px] p-6 sm:p-8">
        <div className="section-kicker">Service</div>
        <h2 className="mt-4 font-display text-[2.5rem] leading-none text-[#17342a] sm:text-[3.4rem]">
          서비스 내용
        </h2>
      </section>

      <SubHeader>
        <button type="button" className={tabClass(page === "nursing")} onClick={() => setPage("nursing")}>
          방문요양
        </button>
        <button
          type="button"
          className={tabClass(page === "nonbenefit")}
          onClick={() => setPage("nonbenefit")}
        >
          비급여 서비스
        </button>
      </SubHeader>

      {(page === "nursing" ? dataNursing : dataNonbenefit).map((val, index) => (
        <Paragraph key={`${val.title}-${index}`} type={val.type} title={val.title} content={val.content} />
      ))}

      <Contact />
    </div>
  );
}

export default Service;
