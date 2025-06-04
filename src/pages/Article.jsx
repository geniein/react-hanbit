import { useState } from 'react';
import Paragraph from "../components/Paragraph";
import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader";
import Contact from "../components/Contact";
import data from '../data.json';
import Card from '../components/Card';

function Article() {
    const [page, setPage] = useState("nursing");
    const dataNursing = data.nursing;
    const dataNonbenefit = data.nonbenefit;

    function onClickSubHeader(target){
        setPage(target);
    }
  return (
    <Layout>
        <div>
            <div className="container mx-auto flex-col">
                <div className="font-bold my-4 text-xl text-green-600">
                    ◎ Article
                </div>
                <div className='flex flex-wrap'>
                
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                
            </div>               
        </div>
    </Layout>
  );
}

export default Article;