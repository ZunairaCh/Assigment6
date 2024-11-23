// components/Footer.js
import Image from "next/image";
import logo1 from "../image/logo1.png";
import logo2 from "../image/logo2.png";
import logo3 from "../image/logo3.png";
import logo4 from "../image/logo4.png";
import logo5 from "../image/logo5.png";
import logo6 from "../image/logo6.png";
// components/Footer.js


const Footer = () => {
  return (
    <footer className="bg-white w-full md:w-[1280px] h-auto md:h-[228px] py-1 mx-96">
    <div className="flex justify-between items-center h-full px-8">  
      
      <h5 className="font-bold text-[24px] leading-[33.6px] text-black">
        Trusted by 2000+ companies worldwide.
      </h5>
    
      <div className="mr-8">

    
        <div className="flex gap-[40px] items-center">
          <Image src={logo1} alt="Logo 1" className="h-12" />
          <Image src={logo2} alt="Logo 2" className="h-12" />
          <Image src={logo3} alt="Logo 3" className="h-12" />
          <Image src={logo4} alt="Logo 4" className="hidden md:block h-12" />
          <Image src={logo5} alt="Logo 5" className="hidden md:block h-12" />
          <Image src={logo6} alt="Logo 6" className="hidden md:block h-12" />
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
