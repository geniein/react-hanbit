function Table({ head, body }) {
  return (
    <div className="overflow-hidden rounded-[26px] border border-[#e5ddd0] bg-white shadow-[0_12px_34px_rgba(18,34,28,0.06)]">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-[#f6f1e8] text-left">
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
