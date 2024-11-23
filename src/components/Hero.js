import Image from "next/image";
import myImage from "../image/myImage.jpeg";

export default function HeroSection() {
    return (
      <div className="flex flex-col md:flex-row h-auto md:h-[800px] bg-white">

        <div className="w-full md:w-1/2 h-full px-[60px] py-20 flex flex-col justify-center text-center md:text-left">
          <h1 className="font-roboto text-[56px] font-bold leading-[67.2px]">
            Learn new skills
            <br />
            online with ease
          </h1>
          <p className="font-roboto py-6 text-[22px] font-normal leading-[27px]" style={{ textUnderlinePosition: 'from-font' }}>
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 py-6">
            <button className="px-10 py-3 text-white bg-black rounded-xl text-lg">
              Start learning now
            </button>
            <button className="px-10 py-4 text-black bg-white rounded-xl text-lg border-[2px] border-black">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:ml-72">
          <Image src={myImage} alt="Hero Image" className="object-cover w-full h-full" />
        </div>
      </div>
    );
  }
  