function Table({ head, body }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-zinc-200/70">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-zinc-950 text-white">
            <tr>
              {head.map((val, idx) => (
                <th className="px-4 py-4 text-left font-semibold" key={idx}>
                  {val}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {body.map((row, idx) => (
              <tr key={idx} className="bg-white even:bg-zinc-50/80">
                {row.map((value, index) => (
                  <td className="px-4 py-4 leading-6 text-zinc-700" key={index}>
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
