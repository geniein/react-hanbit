import { useState } from 'react';
import Paragraph from "../components/Paragraph";
import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader";
import Contact from "../components/Contact";
import data from '../data.json';

function Serivce() {
    const [page, setPage] = useState("nursing");
    const dataNursing = data.nursing;
    const dataNonbenefit = data.nonbenefit;

    function onClickSubHeader(target){
        setPage(target);
    }
  return (
    <div>
        <SubHeader>
            <div className="text-xl font-bold m-4" onClick={()=>onClickSubHeader("nursing")}>방문요양</div>          
            <div className="text-xl font-bold m-4" onClick={()=>onClickSubHeader("nonbenefit")}>비급여 서비스</div>          
        </SubHeader>
        <div>
            <h3 className="font-bold my-4 text-2xl inline-block; relative">
                {page=="nursing" ? "방문요양" : "비급여 서비스" }
                <span className="absolute left-0 -bottom-1 w-full h-px bg-green-700"></span>
            </h3> 
            
            {page =="nursing" && dataNursing.map((val)=><Paragraph type={val.type} title={val.title} content={val.content}/>)}
            {page =="nonbenefit" && dataNonbenefit.map((val)=><Paragraph type={val.type} title={val.title} content={val.content}/>)}

            <Contact/>
        </div>
    </div>
  );
}

export default Serivce;