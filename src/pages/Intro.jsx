import Contact from "../components/Contact";
import Paragraph from "../components/Paragraph";
import data from "../data.json";

function Intro() {
  return (
    <div>
      <PageHero eyebrow="About" title="센터 소개" description="어르신과 가족 모두에게 편안한 돌봄 경험을 제공합니다." />
      {data.intro.map((val, index) => (
        <Paragraph key={`${val.title}-${index}`} {...val} />
      ))}
      <Contact />
    </div>
  );
}

function PageHero({ eyebrow, title, description }) {
  return (
    <section className="mb-10 rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-zinc-200/70 sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>
      <h1 className="mt-3 text-[2rem] font-semibold tracking-tight text-zinc-950 min-[390px]:text-4xl sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-[17px] leading-8 text-zinc-600 min-[390px]:text-lg sm:leading-9">{description}</p>
    </section>
  );
}

export default Intro;
