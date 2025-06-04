import limit from '../assets/limit.jpeg';
import logo from '../assets/logo.jpeg';
import process from '../assets/process.gif';
import nursing from '../assets/nursing.jpeg';
import nonbenefit from '../assets/nonbenefit.jpeg'
import intro1 from '../assets/intro1.jpeg'
import intro2 from '../assets/intro2.jpeg'
import Table from './Table';

function Paragraph({ type, title, content }) {

    const images = {
        logo: logo,
        limit: limit,
        process: process,
        nursing: nursing,
        nonbenefit: nonbenefit,
        intro1: intro1,
        intro2: intro2
      };

    let message;
    if (type === 'text') {
        message = (
        <>
            <pre className="whitespace-pre-wrap break-words">{content}</pre>
        </>
    );
    } else if(type === 'image'){
        message = (
        <>
            <img src={images[content.image]} className='w-full h-auto'/>
            {content.text && <div> {content.text}</div>}
        </>
        );
        
    }else if(type=== 'table'){
        message = <Table head={content.head} body={content.body}/>
    }else{
        message = ""
    }
    return (      
        <div className="container mx-auto flex-col">
            <div className="font-bold my-4 text-xl text-green-600">
            ◎ {title}
            </div>
            {message}
        </div>      
    );
  }
  
  export default Paragraph;
  