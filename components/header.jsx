import Link from 'next/link';

const Header = () => {
  return (
    <div className="w-full  h-[10vh] px-12 py-2 flex justify-between items-center ">
      {/* Logo Section */}
      <div className="left flex-shrink-0">
        <img 
          src="https://www.girmantech.com/Logo2.svg" 
          alt="Girman Technologies Logo" 
          className="h-8 md:h-10 w-auto" // Responsive logo size
        />
      </div>

      {/* Links Section */}
      <div className="right text-xs md:text-sm uppercase flex gap-2 md:gap-4">
        <Link href="https://company-website.com" className="border-b-2 border-blue-400">
          Search
        </Link>
        <Link href="https://company-website.com" className="">
          Website
        </Link>
        <Link href="https://linkedin.com/in/your-linkedin" className="">
          LinkedIn
        </Link>
        <Link href="https://company-website.com/contact" className="">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
