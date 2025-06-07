function Contact() {
    return (      
        <div className="flex w-full h-20 p-20 text-white divide-x divide-gray-300">
            <a className="flex-1 bg-green-700 flex h-20 text-center justify-center items-center hover:cursor-pointer rounded-l-full"
                href="tel:0415733355">상담전화</a>        
            <a className="flex-1 bg-green-700 flex h-20 text-center justify-center items-center hover:cursor-pointer rounded-r-full"
                href="tel:01090733343">휴대전화</a>
        </div>      
    );
  }
  
  export default Contact;
  