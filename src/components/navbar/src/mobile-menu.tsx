import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import lottie from 'lottie-web';
import menuAnimationData from '../assets/menu-animation.json'; // Adjust the path as necessary
import { AnimationItem } from 'lottie-web';
import NavLinks, { NavLink } from './nav-links';
import {Button, ButtonGroup} from "@heroui/button";

const DEFAULT_LOGO = "/packages/navbar/assets/logo-rivercity-creatives-horizontal-green-white.png";

export default function MobileMenu({
  links,
  logoSrc = DEFAULT_LOGO,
  color = "#FFFFFF",
  showBookingButton = true,
  bookingHref = "/booking",
  bookingText = "Book a Call",
  backgroundColor = "bg-grey-700"
}: {
  links: NavLink[];
  logoSrc?: string;
  color?: string;
  showBookingButton?: boolean;
  bookingHref?: string;
  bookingText?: string;
  backgroundColor?: string;
}) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const playerRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    const container = document.querySelector("#menu-icon");
    if (!container) return;
  
    playerRef.current = lottie.loadAnimation({
      container,
      animationData: menuAnimationData,
      renderer: "svg",
      loop: false,
      autoplay: false,
    });
  }, []);

  const toggleMenu = () => {
    if (menuOpen) {
      playerRef.current?.playSegments([30, 60], true);
    } else {
      playerRef.current?.playSegments([0, 30], true);
      setTimeout(() => {
        playerRef.current?.goToAndStop(27, true);
      }, 490);
    }
    setMenuOpen((prev) => !prev);
  };

  const handleLogoClick = () => {
    if (menuOpen) {
      toggleMenu();
    }
  };

  return (
    (<div className='w-full align-center md:hidden'>
      <div className={`absolute z-20 w-full ${backgroundColor} border-x-[1px] border-blue-800`}>
        <div className='flex flex-row justify-between h-[65px] px-6 pt-[10px] items-center'>
          <Link href="/" onClick={handleLogoClick}>
            <Image
              src={logoSrc}
              alt="Logo"
              width={125}
              height={100}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </Link>
          <div onClick={toggleMenu} className="cursor-pointer" id="menu-icon" style={{ height: '50px', width: '50px' }}>
            {/* The Lottie animation will be rendered here */}
          </div>
        </div>
      </div>
      <div className={`absolute top-[20px] w-full h-[300px] flex flex-col justify-between px-6 py-6 ${backgroundColor} border-[1px] border-t-0 border-blue-800 rounded-b-[13px] drop-shadow-[0_14px_16.2px_rgba(0,0,0,0.25)] backdrop-blur-[7px] transition-transform duration-500 ease-in-out z-10 ${menuOpen ? 'translate-y-8' : '-translate-y-[240px]'}`}>
        <NavLinks
          links={links}
          onClick={toggleMenu}
        />
        {showBookingButton && (
          <Button
            onPress={toggleMenu}  // Close the menu when the button is clicked
            className="w-full h-[45px] font-maven-pro text-white text-[14px] font-bold rounded-[20px] bg-green-500 mt-4">
            <Link href={bookingHref} className="w-full h-full flex items-center justify-center">
              {bookingText}
            </Link>
          </Button>
        )}
      </div>
    </div>)
  );
}