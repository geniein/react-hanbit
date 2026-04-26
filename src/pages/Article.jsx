import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

function Article() {
  const [contents, setContents] = useState([]);

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

        setContents(articles.slice(0, 9));
      })
      .catch((error) => {
        console.error("There was an error fetching the article data!", error);
      });
  }, []);

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="section-shell rounded-[36px] p-6 sm:p-8">
        <div className="section-kicker">Social Feed</div>
        <h2 className="mt-4 font-display text-[2.5rem] leading-none text-[#17342a] sm:text-[3.4rem]">
          SNS
        </h2>
      </section>

      <section className="section-shell rounded-[36px] p-6 sm:p-8">
        <div className="flex flex-wrap justify-between gap-x-4">
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
    </div>
  );
}

export default Article;
