function SubHeader({ children }) {
  return (
    <div className="mb-8 flex w-full justify-center rounded-full bg-white/75 p-1 shadow-sm ring-1 ring-zinc-200/70 backdrop-blur">
      {children}
    </div>
  );
}

export default SubHeader;
