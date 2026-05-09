function Contact() {
  return (
    <div className="my-12 grid gap-3 rounded-[2rem] bg-zinc-950 p-4 text-white shadow-2xl shadow-zinc-950/10 sm:grid-cols-2 sm:p-5">
      <a
        className="flex min-h-16 items-center justify-center rounded-full bg-white px-6 text-center font-semibold text-zinc-950 transition hover:bg-emerald-50"
        href="tel:0415733355"
      >
        센터 상담전화
      </a>
      <a
        className="flex min-h-16 items-center justify-center rounded-full bg-emerald-600 px-6 text-center font-semibold text-white transition hover:bg-emerald-500"
        href="tel:01090733343"
      >
        휴대전화 연결
      </a>
    </div>
  );
}

export default Contact;
