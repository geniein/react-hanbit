function Card({title, description, pubDate, link}) {
    return (     
        <div className="m-4">        
            <div className="bg-gray-200 container flex-col flex-1/4 h-32 w-96 p-8 sm:h-72"> 
                <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <div className="truncate font-bold pb-2">{title}</div>
                    <div >
                        <p className="break-words break-all h-12 overflow-hidden text-ellipsis sm:h-42"
                        dangerouslySetInnerHTML={{ __html: description.replace(/img/g, 'img referrerpolicy="no-referrer"') }}>                             
                        </p>
                    </div>
                </a>
            </div>
            <div>
                네이버 블로그 | {new Date(pubDate).toLocaleDateString()}
            </div>
        </div>       
    );
  }
  
  export default Card;
  