import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import data from '../data.json';
import nursing from '../assets/nursing.jpeg';
import nonbenefit from '../assets/nonbenefit.jpeg'
import intro1 from '../assets/intro1.jpeg'
import Card from "../components/Card";

function Home() {     
    const dataPolicy = data.policy;
    const dataIntro = data.intro;
    const dataNursing = data.nursing;
    
  return (
    <Layout>
      <div className="container mx-auto flex-col">                
                <h3 className="font-bold my-4 text-2xl inline-block; relative text-green-600">
                한빛 방문요양
                <span className="absolute left-0 -bottom-1 w-full h-px bg-green-700"></span>
                </h3>
                <div className="flex">
                    <div className="flex-1/2 w-full h-50 p-2 overflow-hidden">
                        <img src={intro1} className='w-full h-auto '/>         
                    </div>
                    <Paragraph type={dataIntro[1].type} title={dataIntro[1].title} content={dataIntro[1].content}/>                    
                </div>
                <h3 className="font-bold my-4 text-2xl inline-block; relative text-green-600">
                    장기요양제도
                    <span className="absolute left-0 -bottom-1 w-full h-px bg-green-700"></span>                    
                </h3>
                <div className="flex">
                    <div className="flex-1/2 w-full h-50 p-2 overflow-hidden">
                        <img src={nonbenefit} className='w-full h-auto'/>         
                    </div>
                    <Paragraph type={dataPolicy[0].type} title={dataPolicy[0].title} content={dataPolicy[0].content}/>                    
                </div>
                <h3 className="font-bold my-4 text-2xl inline-block; relative text-green-600">
                    서비스 내용
                    <span className="absolute left-0 -bottom-1 w-full h-px bg-green-700"></span>
                </h3>
                <div className="flex">
                    <div className="flex-1/2 w-full h-50 p-2 overflow-hidden">
                        <img src={nursing} className='w-full h-auto'/>         
                    </div>
                    <Paragraph type={dataNursing[1].type} title={dataNursing[1].title} content={dataNursing[1].content}/>                    
                </div>
                <h3 className="font-bold my-4 text-2xl inline-block; relative text-green-600">
                    SNS
                    <span className="absolute left-0 -bottom-1 w-full h-px bg-green-700"></span>
                </h3>
                <div className='flex flex-wrap'>                                    
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                
        </div>
    </Layout>
  );
}

export default Home;
