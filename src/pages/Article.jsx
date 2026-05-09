import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

function Article() {
  const [contents, setContents] = useState([]);

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

        setContents(articles.slice(0, 9));
      })
      .catch((error) => {
        console.error("There was an error fetching the article data!", error);
      });
  }, []);

  return (
    <div>
      <section className="mb-8 rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-zinc-200/70 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">SNS</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">센터 소식</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          네이버 블로그에 올라온 최신 소식을 확인하세요.
        </p>
      </section>

      <div className="flex flex-wrap gap-4">
        {contents.map((content, index) => (
          <Card key={index} {...content} />
        ))}
      </div>
    </div>
  );
}

export default Article;
