import Paragraph from "../components/Paragraph";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import data from '../data.json';

function Intro() {
    const dataIntro = data.intro;
  return (
    <Layout>
        <div>                    
            {dataIntro.map((val)=><Paragraph type={val.type} title={val.title} content={val.content}/>)}          
        </div>
        <Contact/>
    </Layout>
  );
}

export default Intro;