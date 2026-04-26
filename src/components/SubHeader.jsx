function SubHeader({ children }) {
  return (
    <div className="glass-panel mb-8 flex flex-wrap items-center justify-center gap-3 rounded-[28px] px-3 py-3 sm:px-4">
      {children}
    </div>
  );
}

export default SubHeader;
