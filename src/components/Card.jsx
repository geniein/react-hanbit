function Card({ title, description, pubDate, link }) {
  const date = pubDate ? new Date(pubDate).toLocaleDateString("ko-KR") : "";

  return (
    <article className="w-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full min-h-56 flex-col rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-zinc-200/70 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/10"
      >
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">Naver Blog</div>
        <h3 className="mt-4 line-clamp-2 text-lg font-semibold tracking-tight text-zinc-950 group-hover:text-emerald-600">
          {title}
        </h3>
        <p
          className="mt-3 line-clamp-4 text-sm leading-6 text-zinc-600"
          dangerouslySetInnerHTML={{
            __html: description?.replace(/img/g, 'img referrerpolicy="no-referrer"') ?? "",
          }}
        />
        <div className="mt-auto pt-6 text-sm text-zinc-400">{date}</div>
      </a>
    </article>
  );
}

export default Card;
