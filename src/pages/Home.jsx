import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import data from '../data.json';
import nursing from '../assets/nursing.jpeg';
import nonbenefit from '../assets/nonbenefit.jpeg'
import intro1 from '../assets/intro1.jpeg'
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import home from '../assets/home.jpeg'
import company from '../assets/company.jpeg'

function Home() {     
    const dataPolicy = data.policy;
    const dataIntro = data.intro;
    const dataNursing = data.nursing;

    const [contents, setContents] = useState([]);
    useEffect(()=> {
        axios.get('/api/cheonanhbcare', {
            headers: {
                'Content-Type': 'application/xml',
            },
        }).then(response => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response.data, "text/xml");
            const items = xmlDoc.getElementsByTagName("item");
            const articles = Array.from(items).map(item => ({
                title: item.getElementsByTagName("title")[0].textContent,
                link: item.getElementsByTagName("link")[0].textContent,
                description: item.getElementsByTagName("description")[0].textContent,
                pubDate: item.getElementsByTagName("pubDate")[0].textContent,
            }));

            setContents(articles.slice(0, 3)); // 최신 10개 기사만 표시
        }).catch(error => {
            console.error("There was an error fetching the article data!", error);
        });
    }, []);

      const [copied, setCopied] = useState(false);

        const copyLink = async () => {
            try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // 메시지 2초 후 사라짐
            } catch (err) {
                console.error("링크 복사 실패", err);
            }
        };
    
  return (
    
      <div className="container mx-auto flex-col">
        <div className="w-full h-64 flex flex-row sm:h-96 justify-center items-center" style={{
            backgroundImage: "url(' " + home + "')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="bg-green-300 basis-3/5 ml-8 h-48 sm:h-64" style={{
            backgroundImage: "url(' " + company + "')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            </div>
            <div className="bg-green-800 basis-2/5 mr-8 h-48 sm:h-64 flex flex-col">
                <span className="text-xl font-bold text-white pt-4 pr-2 pl-2 sm:text-3xl sm:pt-8 sm:pl-4">한빛 방문요양복지센터</span>
                <span className="text-xs text-gray-200 p-2 sm:text-xl sm:p-4">노인장기요양 / 방문요양</span>
                <div className="flex flex-row">
                    <div className="w-8 h-8 px-2 py-1 bg-green-950 text-white rounded hover:bg-blue-700 transition ml-2">
                        <a href="tel:0415733355" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 pr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        </a>                    
                    </div>
                    <div className="w-8 h-8 px-2 py-1 bg-green-950 text-white rounded hover:bg-blue-700 transition mx-4">
                        <a href="sms:01090733343" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 pr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        </a>                    
                    </div>
                    <div 
                        onClick={copyLink}
                        className="w-8 h-8 px-1 py-1 bg-green-950 text-white rounded hover:bg-blue-700 transition mr-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>
                        {copied && <span className="ml-2 text-sm text-green-300">복사됨!</span>}
                    </div>
                </div>
            </div>
        </div>               
        <h3 className="font-bold my-4 text-2xl inline-block; relative text-green-600">
            <Link to="/intro">한빛 방문요양</Link>
        <span className="absolute left-0 -bottom-1 w-full h-px bg-green-700"></span>
        </h3>
        <div className="flex flex-col sm:flex-row">
            <div className="flex-1/2 w-full h-50 p-2 overflow-hidden">
                <img src={intro1} className='w-full h-auto '/>         
            </div>
            <div className="flex-1/2 w-full h-50 p-2 overflow-hidden">
                <Paragraph type={dataIntro[1].type} title={dataIntro[1].title} content={dataIntro[1].content}/>                    
            </div>
        </div>
        <h3 className="font-bold my-4 text-2xl inline-block; relative text-green-600">                    
            <Link to="/policy">한빛 장기요양제도</Link>
            <span className="absolute left-0 -bottom-1 w-full h-px bg-green-700"></span>                    
        </h3>
        <div className="flex flex-col sm:flex-row">
            <div className="flex-1/2 w-full h-50 p-2 overflow-hidden">
                <img src={nonbenefit} className='w-full h-auto'/>         
            </div>
            <div className="flex-1/2 w-full h-50 p-2 overflow-hidden">
                <Paragraph type={dataPolicy[0].type} title={dataPolicy[0].title} content={dataPolicy[0].content}/>                    
            </div>
        </div>
        <h3 className="font-bold my-4 text-2xl inline-block; relative text-green-600">                    
            <Link to="/service">서비스 내용</Link>
            <span className="absolute left-0 -bottom-1 w-full h-px bg-green-700"></span>
        </h3>
        <div className="flex flex-col sm:flex-row">
            <div className="flex-1/2 w-full h-50 p-2 overflow-hidden">
                <img src={nursing} className='w-full h-auto'/>         
            </div>
            <div className="flex-1/2 w-full h-50 p-2 overflow-hidden">
                <Paragraph type={dataNursing[1].type} title={dataNursing[1].title} content={dataNursing[1].content}/>                    
            </div>
        </div>
        <h3 className="font-bold my-4 text-2xl inline-block; relative text-green-600">
            <Link to="/article">SNS</Link>
            <span className="absolute left-0 -bottom-1 w-full h-px bg-green-700"></span>
        </h3>
        <div className='flex flex-wrap justify-center'>                                    
            {contents.map((content, index) => (
                <Card 
                    key={index}
                    title={content.title}
                    description={content.description}
                    pubDate={content.pubDate}
                    link={content.link}
                />
            ))}
        </div>
        <h3 className="font-bold my-4 text-2xl inline-block; relative text-green-600">
            <Link to="/article">오시는길</Link>
            <span className="absolute left-0 -bottom-1 w-full h-px bg-green-700"></span>
        </h3>
        <div className="container mx-auto flex-col">     
            <div className='w-full h-64 sm:h-128'>
                <Map/>
            </div>
            <div className='w-full h-36 bg-gray-50 pt-6 pl-6 sm:pt-12 sm:pl-12 sm:h-48'>
                <h3 className="text-sm sm:text-base">한빛방문요양복지센터</h3>
                <p className='font-bold text-base sm:text-xl'>천안시 동남구 충무로 158-35, 럭스프라자 501호</p>
                <br/>
                <p className="text-sm sm:text-base">쌍용역 1번 출구에서 648m (도보10분소요)</p>
            </div>
        </div>   
    </div>
  );
}

export default Home;
