
function Header() {
  return (
    <div className="w-[1820px] h-[54px] px-7 py-3 gap-[32px] border-2 border-solid border-grey hidden md:block">
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="font-roboto text-normal leading-[21px] pr-[16px]">
            Phone Number: 956 742 455 678
          </p>
          <div className="border-l-[1px] border-black h-[30px] mx-[16px]"></div>
          <p className="font-roboto text-[14px] leading-[21px] pl-[16px]">
            Email: info@ddsgnr.com
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <i className="fab fa-facebook text-black text-3xl"></i>
          <i className="fab fa-instagram text-black text-3xl"></i>
          <i className="fab fa-twitter text-black text-3xl"></i>
          <i className="fab fa-linkedin text-black text-3xl"></i>
        </div>
      </header>
    </div>
  );
}

export default Header;
