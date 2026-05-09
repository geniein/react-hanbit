import intro1 from "../assets/intro1.jpeg";
import intro2 from "../assets/intro2.jpeg";
import limit from "../assets/limit.jpeg";
import logo from "../assets/logo.jpeg";
import nonbenefit from "../assets/nonbenefit.jpeg";
import nursing from "../assets/nursing.jpeg";
import process from "../assets/process.gif";
import Table from "./Table";

const images = {
  logo,
  limit,
  process,
  nursing,
  nonbenefit,
  intro1,
  intro2,
};

function Paragraph({ type, title, content }) {
  let message = null;

  if (type === "text") {
    message = <p className="whitespace-pre-wrap text-base leading-8 text-zinc-700">{content}</p>;
  } else if (type === "image") {
    message = (
      <figure className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-zinc-200/70">
        <img src={images[content.image]} alt={title || "센터 이미지"} className="h-auto w-full object-cover" />
        {content.text && <figcaption className="p-6 text-base leading-8 text-zinc-700">{content.text}</figcaption>}
      </figure>
    );
  } else if (type === "table") {
    message = <Table head={content.head} body={content.body} />;
  }

  return (
    <section className="mb-10">
      {title && (
        <h2 className="mb-5 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          {title}
        </h2>
      )}
      <div className={type === "text" ? "rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-zinc-200/70 sm:p-8" : ""}>
        {message}
      </div>
    </section>
  );
}

export default Paragraph;
