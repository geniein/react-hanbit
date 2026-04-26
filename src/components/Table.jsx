function Table({ head, body }) {
  return (
    <div className="overflow-hidden rounded-[26px] bg-white shadow-[0_12px_34px_rgba(18,34,28,0.06)]" style={{ border: "1px solid color-mix(in oklab, var(--brand) 18%, white)" }}>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="text-left" style={{ backgroundColor: "var(--surface-soft)" }}>
            <tr>
              {head.map((val, idx) => (
                <th
                  key={idx}
                  className="border-b border-[#eadfcd] px-5 py-4 text-sm font-semibold text-[#385145]"
                >
                  {val}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, idx) => (
              <tr key={idx} className="odd:bg-white even:bg-[#fcfaf6]">
                {row.map((value, index) => (
                  <td
                    key={index}
                    className="border-b border-[#efe7da] px-5 py-4 text-sm leading-7 text-[#495a53]"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
