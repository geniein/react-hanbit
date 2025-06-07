import logo from '../assets/logo.jpeg'
function Footer() {
    return (
        <>
        <div className="flex justify-center pt-10">
            <img src={logo} className='w-full h-auto'/>
        </div>
        <footer className="bg-gray-100 text-gray-700 p-4 mt-10 mb-16 sm:mb-0">
            <div className="container mx-auto text-center text-sm">
            ⓒ 2025 한빛방문요양복지센터. All rights reserved.
            </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  