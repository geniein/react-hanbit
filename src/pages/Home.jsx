import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import company from "../assets/company.jpeg";
import home from "../assets/home.jpeg";
import intro1 from "../assets/intro1.jpeg";
import nonbenefit from "../assets/nonbenefit.jpeg";
import nursing from "../assets/nursing.jpeg";
import Card from "../components/Card";
import Map from "../components/Map";
import Paragraph from "../components/Paragraph";
import data from "../data.json";

const highlights = [
  { label: "상담", value: "041-573-3355" },
  { label: "위치", value: "천안 동남구" },
  { label: "서비스", value: "방문요양" },
];

function Home() {
  const [contents, setContents] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    axios
      .get("/api/cheonanhbcare", { headers: { "Content-Type": "application/xml" } })
      .then((response) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "text/xml");
        const items = xmlDoc.getElementsByTagName("item");
        const articles = Array.from(items).map((item) => ({
          title: item.getElementsByTagName("title")[0].textContent,
          link: item.getElementsByTagName("link")[0].textContent,
          description: item.getElementsByTagName("description")[0].textContent,
          pubDate: item.getElementsByTagName("pubDate")[0].textContent,
        }));

        setContents(articles.slice(0, 3));
      })
      .catch((error) => {
        console.error("There was an error fetching the article data!", error);
      });
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("링크 복사 실패", err);
    }
  };

  return (
    <div className="space-y-16">
      <section className="relative isolate overflow-hidden rounded-[2.5rem] bg-zinc-950 px-6 py-10 text-white shadow-2xl shadow-zinc-950/15 sm:px-10 sm:py-16">
        <img src={home} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Hanbit Care Center</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
              한빛방문요양복지센터
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-100">
              어르신의 일상과 가족의 마음을 함께 살피는 천안 방문요양 전문 센터입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:0415733355" className="rounded-full bg-white px-5 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-50">
                상담전화
              </a>
              <a href="sms:01090733343" className="rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500">
                문자문의
              </a>
              <button type="button" onClick={copyLink} className="rounded-full bg-white/15 px-5 py-3 font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/25">
                {copied ? "복사 완료" : "공유"}
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur">
            <img src={company} alt="한빛방문요양복지센터" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover" />
            <div className="grid grid-cols-3 gap-2 p-2">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/90 p-4 text-zinc-950">
                  <div className="text-xs text-zinc-500">{item.label}</div>
                  <div className="mt-1 text-sm font-semibold sm:text-base">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        to="/intro"
        title="센터 소개"
        image={intro1}
        paragraph={{ type: data.intro[1].type, title: data.intro[1].title, content: data.intro[1].content }}
      />
      <FeatureSection
        to="/policy"
        title="장기요양 제도"
        image={nonbenefit}
        paragraph={{ type: data.policy[0].type, title: data.policy[0].title, content: data.policy[0].content }}
        reverse
      />
      <FeatureSection
        to="/service"
        title="서비스 안내"
        image={nursing}
        paragraph={{ type: data.nursing[1].type, title: data.nursing[1].title, content: data.nursing[1].content }}
      />

      <section>
        <SectionTitle to="/article" title="SNS" />
        <div className="flex flex-wrap gap-4">
          {contents.map((content, index) => (
            <Card key={index} {...content} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle to="/direction" title="오시는 길" />
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-zinc-200/70">
          <div className="h-72 sm:h-[28rem]">
            <Map />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-sm font-semibold text-emerald-600">한빛방문요양복지센터</p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
              천안시 동남구 충무로 158-35, 501호
            </p>
            <p className="mt-2 text-zinc-600">쌍용역 1번 출구에서 약 648m, 도보 약 10분</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ title, to }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">{title}</h2>
      <Link to={to} className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-600 shadow-sm ring-1 ring-zinc-200/70">
        자세히 보기
      </Link>
    </div>
  );
}

function FeatureSection({ title, to, image, paragraph, reverse = false }) {
  return (
    <section>
      <SectionTitle title={title} to={to} />
      <div className={`grid gap-5 lg:grid-cols-2 lg:items-stretch ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <img src={image} alt={title} className="h-full min-h-72 w-full rounded-[2rem] object-cover shadow-sm" />
        <Paragraph {...paragraph} />
      </div>
    </section>
  );
}

export default Home;
