function Table({ head, body }) {
    return (              
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        {head.map((val,idx)=>(
                            <th className="px-4 py-2 border-b text-center text-sm font-semibold text-gray-600 " key={idx}>{val}</th>        
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {body.map((val,idx)=>(
                        <tr key={idx}>
                            {val.map((value,index)=>(
                                <td className="px-4 py-2 border-b text-center" key={index}>{value}</td>    
                            ))}                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>        
    );
  }
  
  export default Table;
  