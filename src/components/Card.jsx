function Card({title, description, pubDate, link}) {
    return (     
        <div className="mt-4 ml-4 mr-4 w-full sm:basis-1/4">        
            <div className="bg-gray-200 container flex flex-col h-32 w-full p-4 align-center sm:h-72 sm:w-96 sm:p-8"> 
                <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <div className="truncate font-bold pb-2">{title}</div>
                    <div >
                        <p className="break-words break-all h-12 overflow-hidden text-ellipsis sm:h-42"
                        dangerouslySetInnerHTML={{ __html: description.replace(/img/g, 'img referrerpolicy="no-referrer"') }}>                             
                        </p>
                    </div>
                </a>
            </div>
            <div className="border-b border-gray-200">
                네이버 블로그 | {new Date(pubDate).toLocaleDateString()}
            </div>
        </div>       
    );
  }
  
  export default Card;
  