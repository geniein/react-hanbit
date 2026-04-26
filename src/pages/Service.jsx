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
    `rounded-full px-5 py-3 text-sm font-semibold transition hover:bg-white sm:text-base ${
      active ? "shadow-lg" : ""
    }`;

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="section-shell rounded-[36px] p-6 sm:p-8">
        <div className="section-kicker">Service</div>
        <h2 className="mt-4 font-display text-[2.5rem] leading-none sm:text-[3.4rem]" style={{ color: "var(--ink)" }}>
          서비스 내용
        </h2>
      </section>

      <SubHeader>
        <button
          type="button"
          className={tabClass(page === "nursing")}
          style={{
            backgroundColor: page === "nursing" ? "var(--surface-dark)" : "rgba(255, 255, 255, 0.55)",
            color: page === "nursing" ? "var(--ink-inverse)" : "var(--ink)",
          }}
          onClick={() => setPage("nursing")}
        >
          방문요양
        </button>
        <button
          type="button"
          className={tabClass(page === "nonbenefit")}
          style={{
            backgroundColor: page === "nonbenefit" ? "var(--surface-dark)" : "rgba(255, 255, 255, 0.55)",
            color: page === "nonbenefit" ? "var(--ink-inverse)" : "var(--ink)",
          }}
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
