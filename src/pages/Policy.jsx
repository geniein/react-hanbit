import { useState } from "react";
import Contact from "../components/Contact";
import Paragraph from "../components/Paragraph";
import SubHeader from "../components/SubHeader";
import data from "../data.json";

function Policy() {
  const [page, setPage] = useState("policy");
  const dataPolicy = data.policy;
  const dataApplication = data.application;

  const tabClass = (active) =>
    `rounded-full px-5 py-3 text-sm font-semibold transition hover:bg-white sm:text-base ${
      active ? "shadow-lg" : ""
    }`;

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="section-shell rounded-[36px] p-6 sm:p-8">
        <div className="section-kicker">Policy</div>
        <h2 className="mt-4 font-display text-[2.5rem] leading-none sm:text-[3.4rem]" style={{ color: "var(--ink)" }}>
          장기요양제도
        </h2>
      </section>

      <SubHeader>
        <button
          type="button"
          className={tabClass(page === "policy")}
          style={{
            backgroundColor: page === "policy" ? "var(--surface-dark)" : "rgba(255, 255, 255, 0.55)",
            color: page === "policy" ? "var(--ink-inverse)" : "var(--ink)",
          }}
          onClick={() => setPage("policy")}
        >
          장기요양보험제도
        </button>
        <button
          type="button"
          className={tabClass(page === "application")}
          style={{
            backgroundColor: page === "application" ? "var(--surface-dark)" : "rgba(255, 255, 255, 0.55)",
            color: page === "application" ? "var(--ink-inverse)" : "var(--ink)",
          }}
          onClick={() => setPage("application")}
        >
          등급 신청
        </button>
      </SubHeader>

      {(page === "policy" ? dataPolicy : dataApplication).map((val, index) => (
        <Paragraph key={`${val.title}-${index}`} type={val.type} title={val.title} content={val.content} />
      ))}

      <Contact />
    </div>
  );
}

export default Policy;
