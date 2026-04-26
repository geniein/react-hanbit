function Card({ title, description, pubDate, link }) {
  return (
    <article className="group mt-5 w-full md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.1rem)]">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="section-shell flex h-full flex-col rounded-[30px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(20,38,31,0.14)] sm:p-7"
      >
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#17342a] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Naver Blog
          </span>
          <span className="text-xs text-[#6f8178]">{new Date(pubDate).toLocaleDateString()}</span>
        </div>

        <h3 className="line-clamp-2 text-xl font-semibold leading-snug text-[#1e332a]">{title}</h3>
        <div
          className="rich-copy mt-4 line-clamp-5 text-sm text-[#51625a]"
          dangerouslySetInnerHTML={{
            __html: description.replace(/img/g, 'img referrerpolicy="no-referrer"'),
          }}
        />

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#295c48]">
          자세히 보기
          <span className="transition group-hover:translate-x-1">→</span>
        </div>
      </a>
    </article>
  );
}

export default Card;
