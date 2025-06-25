import React, { useState } from 'react';
import Image from "next/image";
import {Button, ButtonGroup} from "@heroui/button";
import Link from 'next/link';
import NavLinks, { NavLink } from './nav-links';
import MobileMenu from './mobile-menu';

const DEFAULT_LOGO = "/packages/navbar/assets/logo-rivercity-creatives-horizontal-green-white.png";

const navLinks: NavLink[] = [
  { name: 'Why Choose Us?', href: '/#why' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
];

export type NavbarProps = {
  logoSrc: string;
};

export default function Navbar({ logoSrc }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentHref, setCurrentHref] = useState('/');

  const handleLogoClick = () => {
    setCurrentHref('/');
  };

  const resolvedLogoSrc = logoSrc || DEFAULT_LOGO;

  return (
    (<div className='relative w-full'>
      <div className="z-60">
        <MobileMenu links={navLinks} logoSrc={logoSrc} />
        <div className="flex items-center justify-center">
          <div className='hidden md:w-[800px] md:flex md:flex-col md:pt-[30px] md:justify-center md:gap-[10px]'>
            <div className='flex py-[13px] px-[20px] justify-between items-center self-stretch rounded-[30px] border-[1px] bg-alice-blue-200/75 backdrop-blur-[3.5px]'>
              <Link href="/" onClick={handleLogoClick}>
                <Image
                  src={resolvedLogoSrc}
                  alt="Logo"
                  width={125}
                  height={100}/>
              </Link>
              <NavLinks 
                links={navLinks} // <-- Pass the links prop here
                onClick={() => setMenuOpen(false)} // Close the menu when a link is clicked
              />
              <Button
                onPress={() => setMenuOpen(false)} // Close the menu when the button is clicked
                className="font-maven-pro text-white text-[14px] font-bold lg:font-normal rounded-[13px] bg-nav-bar-button py-2 lg:text-[16px]">
                <Link href="/booking" className="h-full flex items-center justify-center">
                  Book a Call
                </Link>
              </Button>
              <Button
                onPress={() => setMenuOpen(false)} // Close the menu when the button is clicked
                className="hidden font-maven-pro text-white text-[14px] font-bold lg:font-normal rounded-[13px] bg-gray-500 py-2 lg:text-[16px]">
                <Link href="/login" className="h-full flex items-center justify-center">
                  Login
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}