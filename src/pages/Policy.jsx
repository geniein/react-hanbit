import { useState } from 'react';
import Paragraph from "../components/Paragraph";
import Layout from "../components/Layout";
import SubHeader from "../components/SubHeader";
import Contact from "../components/Contact";
import data from '../data.json';

function Policy() {
    const [page, setPage] = useState("policy");
    const dataPolicy = data.policy;
    const dataApplication = data.application;
  return (
    <Layout>
        <SubHeader>
            <div className="text-xl font-bold m-4" onClick={()=>setPage("policy")}>장기요양보험제도</div>          
            <div className="text-xl font-bold m-4" onClick={()=>setPage("application")}>등급 신청</div>          
        </SubHeader>
        <div>
            <h3 className="font-bold my-4 text-2xl inline-block; relative">
                {page=="policy" ? "장기요양보험제도" : "등급 신청" }
                <span className="absolute left-0 -bottom-1 w-full h-px bg-green-700"></span>
            </h3> 
            
            {page =="policy" && dataPolicy.map((val)=><Paragraph type={val.type} title={val.title} content={val.content}/>)}
            {page =="application" && dataApplication.map((val)=><Paragraph type={val.type} title={val.title} content={val.content}/>)}

            <Contact/>
        </div>
    </Layout>
  );
}

export default Policy;