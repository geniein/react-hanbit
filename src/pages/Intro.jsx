import Contact from "../components/Contact";
import Paragraph from "../components/Paragraph";
import data from "../data.json";

function Intro() {
  const dataIntro = data.intro;

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="section-shell rounded-[36px] p-6 sm:p-8">
        <div className="section-kicker">Introduction</div>
        <h2 className="mt-4 font-display text-[2.5rem] leading-none sm:text-[3.4rem]" style={{ color: "var(--ink)" }}>
          한빛 방문요양
        </h2>
      </section>

      {dataIntro.map((val, index) => (
        <Paragraph key={`${val.title}-${index}`} type={val.type} title={val.title} content={val.content} />
      ))}

      <Contact />
    </div>
  );
}

export default Intro;
