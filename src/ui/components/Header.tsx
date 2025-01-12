import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import routes from "@/constants/routes";
import CustomButton from "../atoms/CustomButton";
import { ImMenu3 } from "react-icons/im";
import Link from "next/link";

const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-bgDark '>
      <div className='w-full flex justify-between items-center py-4 px-12 xs:px-6 text-white max-w-[1500px] mx-auto '>
        <Image src='/images/logo.png' alt='Logo' width={100} height={100} />

        <ul className='hidden md:flex justify-center items-center space-x-4'>
          {routes.map((route) => {
            const isActive = router.pathname === route.route;

            return (
              <Link
                href={route.route}
                key={route.route}
                className={`cursor-pointer relative ${isActive ? "font-bold" : ""}`}>
                {route.name}
                {isActive && <div className='absolute bottom-[-10px] left-0 w-7 h-1 bg-green'></div>}
              </Link>
            );
          })}
        </ul>

        <CustomButton onClick={() => router.push("/contact")} className='hidden md:block font-semibold text-sm'>
          Shop Now
        </CustomButton>

        <div className='relative md:hidden'>
          <ImMenu3 className='md:hidden cursor-pointer' size={25} onClick={toggleMenu} />

          {isMenuOpen && (
            <div className='md:hidden absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md'>
              <ul className='flex flex-col py-2 px-2'>
                {routes.map((route) => {
                  const isActive = router.pathname === route.route;
                  return (
                    <li
                      key={route.route}
                      className={`p-2 cursor-pointer text-textDarker text-sm mx-auto ${isActive ? "font-bold" : ""}`}>
                      {route.name}
                      {isActive && <div className='absolute bottom-[-10px] left-0 w-7 h-1 bg-green'></div>}
                    </li>
                  );
                })}
                <CustomButton
                  margin='10px 0'
                  onClick={() => router.push("/contact")}
                  className={`p-2 cursor-pointer text-textDarker text-sm text-center w-full`}>
                  {"Shop Now"}
                </CustomButton>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
