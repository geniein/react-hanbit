import { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import data from '../data.json';
import Card from '../components/Card';
import axios from 'axios'

function Article() {
    const [contents, setContents] = useState([]);
    useEffect(()=> {
        // axios.get(`/v1/search/blog.json`,{
        // params: {
        //     query: 'cheonanhbcare', // 검색 키워드
        //     sort: 'sim', // 검색 결과 정렬 방법(sim: 정확도 순)
        //     display: 10, // 한 번에 표시할 검색 결과
        // },
        // headers: {
        //     'X-Naver-Client-Id': import.meta.env.VITE_NAVER_API_CLIENT_ID,
        //     'X-Naver-Client-Secret': import.meta.env.VITE_NAVER_API_CLIENT_SECRET,
        // },
        // })
        // .then(response => {
        //     console.log(response.data);
        // })
        // .catch(error => {
        //     console.error("There was an error fetching the article data!", error);
        // }
        // );  
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
        
            setContents(articles.slice(0, 9)); // 최신 10개 기사만 표시
        }).catch(error => {
            console.error("There was an error fetching the article data!", error);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
        <div>
            <div className="container mx-auto flex-col">
                <div className="font-bold my-4 text-xl text-green-600">
                    ◎ SNS
                </div>
                <div className='container flex flex-wrap align-center justify-center'>       
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
                
            </div>               
        </div>
  );
}

export default Article;