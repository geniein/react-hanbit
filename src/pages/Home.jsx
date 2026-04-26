import { useEffect, useState } from "react";
import axios from "axios";
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

const featureSections = [
  {
    kicker: "About Hanbit",
    title: "한빛 방문요양",
    href: "/intro",
    image: intro1,
    alt: "한빛 방문요양 소개",
    getParagraph: (dataIntro) => dataIntro[1],
  },
  {
    kicker: "Care Policy",
    title: "한빛 장기요양제도",
    href: "/policy",
    image: nonbenefit,
    alt: "장기요양 제도 안내",
    getParagraph: (dataIntro, dataPolicy) => dataPolicy[0],
  },
  {
    kicker: "Service Guide",
    title: "서비스 내용",
    href: "/service",
    image: nursing,
    alt: "방문요양 서비스 안내",
    getParagraph: (dataIntro, dataPolicy, dataNursing) => dataNursing[1],
  },
];

function Home() {
  const dataPolicy = data.policy;
  const dataIntro = data.intro;
  const dataNursing = data.nursing;

  const [contents, setContents] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    axios
      .get("/api/cheonanhbcare", {
        headers: {
          "Content-Type": "application/xml",
        },
      })
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
    <div className="flex w-full flex-col gap-8 lg:gap-10">
      <section className="relative overflow-hidden rounded-[38px] bg-[#17342a] text-white shadow-[0_34px_100px_rgba(14,31,25,0.22)]">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${home})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,167,91,0.34),transparent_30%),linear-gradient(135deg,rgba(17,36,29,0.92),rgba(24,59,47,0.84))]" />

        <div className="relative grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.85fr] lg:px-12 lg:py-12">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/72">
                Visiting Care Since 2025
              </div>
              <h2 className="font-display mt-5 max-w-3xl text-[3rem] leading-[0.9] sm:text-[4.2rem] lg:text-[5rem]">
                익숙한 집에서
                <br />
                더 편안한 돌봄을
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/74 sm:text-base">
                노인장기요양과 방문요양 정보를 차분하게 전달하되, 첫 화면의 인상은 더
                세련되고 신뢰감 있게 재구성했습니다.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[26px] border border-white/12 bg-white/10 px-5 py-5 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">Core Service</div>
                <div className="mt-3 text-xl font-semibold">방문요양</div>
              </div>
              <div className="rounded-[26px] border border-white/12 bg-white/10 px-5 py-5 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">Care Policy</div>
                <div className="mt-3 text-xl font-semibold">장기요양제도</div>
              </div>
              <div className="rounded-[26px] border border-white/12 bg-white/10 px-5 py-5 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">Local Access</div>
                <div className="mt-3 text-xl font-semibold">천안 동남구</div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[34px] p-3 text-[#17342a]">
            <div
              className="h-56 rounded-[28px] bg-cover bg-center sm:h-72"
              style={{ backgroundImage: `url(${company})` }}
            />
            <div className="px-2 pb-2 pt-5 sm:px-3">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7f8f87]">
                Hanbit Care Center
              </div>
              <h3 className="mt-3 font-display text-4xl leading-none">한빛방문요양복지센터</h3>
              <p className="mt-4 text-sm leading-7 text-[#52635b]">
                노인장기요양 / 방문요양 안내를 더 보기 쉬운 레이아웃으로 정리했습니다.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:0415733355"
                  className="rounded-full bg-[#17342a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#295c48]"
                >
                  전화 상담
                </a>
                <a
                  href="sms:01090733343"
                  className="rounded-full border border-[#d5ccbc] px-4 py-3 text-sm font-semibold text-[#17342a] transition hover:bg-white"
                >
                  문자 문의
                </a>
                <button
                  type="button"
                  onClick={copyLink}
                  className="rounded-full border border-[#d5ccbc] px-4 py-3 text-sm font-semibold text-[#17342a] transition hover:bg-white"
                >
                  링크 공유
                </button>
              </div>
              {copied && <div className="mt-3 text-sm text-[#295c48]">현재 페이지 링크를 복사했습니다.</div>}
            </div>
          </div>
        </div>
      </section>

      {featureSections.map((section, index) => {
        const paragraph = section.getParagraph(dataIntro, dataPolicy, dataNursing);
        const reverse = index % 2 === 1;

        return (
          <section
            key={section.href}
            className={`grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <Link
              to={section.href}
              className="group relative overflow-hidden rounded-[34px] bg-[#d9d0be] shadow-[0_24px_60px_rgba(18,34,28,0.1)]"
            >
              <img
                src={section.image}
                alt={section.alt}
                className="h-full min-h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/72">
                  {section.kicker}
                </div>
                <div className="mt-3 font-display text-4xl leading-none sm:text-5xl">{section.title}</div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                  페이지 보기 <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            <Paragraph type={paragraph.type} title={paragraph.title} content={paragraph.content} />
          </section>
        );
      })}

      <section className="section-shell rounded-[36px] p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="section-kicker">Social Feed</div>
            <h3 className="mt-4 font-display text-[2.2rem] leading-none text-[#17342a] sm:text-[2.8rem]">
              한빛 SNS 소식
            </h3>
          </div>
          <Link to="/article" className="text-sm font-semibold text-[#295c48]">
            전체 보기 →
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap justify-between gap-x-4">
          {contents.map((content, index) => (
            <Card
              key={index}
              title={content.title}
              description={content.description}
              pubDate={content.pubDate}
              link={content.link}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="section-shell overflow-hidden rounded-[36px] p-3 sm:p-4">
          <div className="h-[320px] overflow-hidden rounded-[28px] sm:h-[420px]">
            <Map />
          </div>
        </div>

        <div className="rounded-[36px] bg-[#f6f1e8] p-6 shadow-[0_20px_50px_rgba(18,34,28,0.08)] sm:p-8">
          <div className="section-kicker">Directions</div>
          <h3 className="mt-4 font-display text-[2.2rem] leading-none text-[#17342a] sm:text-[2.8rem]">
            오시는 길
          </h3>
          <div className="mt-6 space-y-5 text-sm leading-8 text-[#47574f] sm:text-base">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8b83]">Center Name</div>
              <div className="mt-1 text-xl font-semibold text-[#17342a]">한빛방문요양복지센터</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8b83]">Address</div>
              <div className="mt-1">천안시 동남구 충무로 158-35, 럭스프라자 501호</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8b83]">Subway</div>
              <div className="mt-1">쌍용역 1번 출구에서 648m (도보10분소요)</div>
            </div>
            <Link
              to="/direction"
              className="inline-flex rounded-full bg-[#17342a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#295c48]"
            >
              상세 위치 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
