import intro1 from "../assets/intro1.jpeg";
import intro2 from "../assets/intro2.jpeg";
import limit from "../assets/limit.jpeg";
import logo from "../assets/logo.jpeg";
import nonbenefit from "../assets/nonbenefit.jpeg";
import nursing from "../assets/nursing.jpeg";
import process from "../assets/process.gif";
import Table from "./Table";

function Paragraph({ type, title, content }) {
  const images = {
    logo,
    limit,
    process,
    nursing,
    nonbenefit,
    intro1,
    intro2,
  };

  let message = null;

  if (type === "text") {
    message = <pre className="rich-copy font-sans">{content}</pre>;
  } else if (type === "image") {
    message = (
      <div className="space-y-4">
        <img
          src={images[content.image]}
          alt={title}
          className="w-full rounded-[26px] border border-[#e7e0d4] object-cover shadow-[0_20px_44px_rgba(18,34,28,0.09)]"
        />
        {content.text && (
          <div className="rich-copy rounded-[22px] bg-[#f6f1e8] px-5 py-4 text-sm text-[#44544c]">
            {content.text}
          </div>
        )}
      </div>
    );
  } else if (type === "table") {
    message = <Table head={content.head} body={content.body} />;
  }

  return (
    <section className="section-shell rounded-[32px] p-6 sm:p-8">
      <div className="section-kicker">Information</div>
      <h3 className="mt-4 font-display text-[2rem] leading-none text-[#17342a] sm:text-[2.35rem]">
        {title}
      </h3>
      <div className="mt-6">{message}</div>
    </section>
  );
}

export default Paragraph;
