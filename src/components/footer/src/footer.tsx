import Link from 'next/link';
import Image from "next/image";
import ScrollToTopButton from "./scroll-to-top";

export interface FooterProps {
  businessEmail?: string;
  phoneNumber?: string;
  location?: string;
  logoSrc?: string;
  copyrightYear?: string;
}

export default function Footer({
  businessEmail = "contact@example.com",
  phoneNumber = "(210) 730-6232",
  location = "San Antonio, Texas",
  logoSrc = "/logo-rivercity-creatives-horizontal-green-white.png",
  copyrightYear = "2025"
}: FooterProps) {

  return (
    (<div className="relative w-full h-auto shrink-0 px-8 pb-1 md:py-10 md:pb-8 z-11 lg:pt-10">
      <div className="flex w-full inline-flex justify-between items-center gap-[24px]">
        <Link href="/" passHref className="md:w-1/2 lg:w-full lg:flex lg:justify-center">
          <Image
            src={logoSrc}
            alt="Company Logo"
            width={200}
            height={100}
            className="cursor-pointer w-[150px] lg:w-[200px] h-auto"
          />
        </Link>
        <div className="hidden md:block md:w-1/2 lg:hidden">
          <p>
            Cowards  Never Start <br />
            The Weak Never Finish <br />
            The Strong Never Quit <br />
            Start YOUR jouney today!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[46px] md:flex-row md:justify-between md:pb-10 md:pt-0 lg:items-center lg:justify-center">
        <div className='flex flex-col md:flex-row md:grow justify-center gap-[24px] lg:gap-10 lg:justify-evenly lg:grow-0 lg:w-full'>
          <div className="flex md:hidden lg:flex">
            <p>
              Cowards  Never Start <br />
              The Weak Never Finish <br />
              The Strong Never Quit <br />
              Start YOUR jouney today!
            </p>
          </div>
          <div className="flex flex-col justify-center gap-[15px] md:justify-start md:w-1/2 lg:w-auto lg:self-start lg:items-start lg:gap-[30px]">
            <p className="text-left font-bold my-1">
              Contact Us
            </p>
            <div className="flex flex-col justify-center gap-[10px] md:gap-6 md:justify-start">
              <div className="flex items-center gap-3 lg:gap-2">
                <Image
                  src="/email.svg"
                  alt="Email Icon"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <a href={`mailto:${businessEmail}`} className="text-sm lg:text-[14px] text-white">
                  {businessEmail}
                </a>
              </div>
              <div className="flex items-center gap-3 lg:gap-2">
                <Image
                  src="/phone.svg"
                  alt="Phone Icon"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <p className="text-sm lg:text-[14px]">
                  {phoneNumber}
                </p>
              </div>
              <div className="flex items-start gap-3 lg:gap-2">
                <Image
                  src="/location.svg"
                  alt="Location Icon"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <div className='flex flex-col gap-1'>
                  <p className="text-sm lg:text-[14px]">
                    {location}
                  </p>
                  <p className="text-sm lg:text-[14px]">
                    (Located across Helotes Elementary)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[15px] lg:gap-[40px] md:w-1/2 lg:w-auto md:justify-start lg:self-start lg:items-start">
            <p className="text-left font-bold my-1">
              Follow Us
            </p>
            <div className="flex items-center self-stretch gap-[32px] md:hidden lg:flex">
              <Link href="https://www.instagram.com/strengthstrategist/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/instagram.svg"
                  alt="Instagram Icon"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }}
                />
              </Link>
              <Link href="https://www.tiktok.com/@strength_strategist" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/tik-toc.svg"
                  alt="Tik Toc Icon"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </Link>
              <Link href="https://www.linkedin.com/in/cade-collenback-6a18b4241/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/linked-in.svg"
                  alt="LinkedIn Icon"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </Link>
              <Link href="https://www.facebook.com/people/Cade-Collenback/100094213129611/#" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/facebook.svg"
                  alt="Facebook Icon"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </Link>
            </div>
            <div className="hidden md:flex lg:hidden md:items-start md:self-stretch md:gap-[32px] md:flex-col md:justify-start">
              <div className='flex gap-8 justify-start'>
                <Link href="https://www.instagram.com/strengthstrategist/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/instagram.svg"
                    alt="Instagram Icon"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }}
                  />
                </Link>
                <Link href="https://www.tiktok.com/@strength_strategist" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/tik-toc.svg"
                    alt="Tik Toc Icon"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </Link>
                <Link href="https://www.linkedin.com/in/cade-collenback-6a18b4241/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/linked-in.svg"
                    alt="LinkedIn Icon"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </Link>
              </div>
              <div className='flex gap-8 justify-start'>
                <Link href="https://www.facebook.com/people/Cade-Collenback/100094213129611/#" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/facebook.svg"
                    alt="Facebook Icon"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </Link>
                {/* <Image
                  src="/figma.svg"
                  alt="Figma Icon"
                  width={30}
                  height={30}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:hidden">
          <div className="font-roboto text-[12px] flex flex-col gap-[10px] self-stretch">
            <Link href="/privacy" className="block text-white text-sm">
              Cookie & Privacy Policy
            </Link>
            <Link href="/terms" className="block text-white text-sm">
              Terms & Conditions
            </Link>
            {/* <Link href="/sales-and-refunds" className="block text-white">
              Sales and Refunds
            </Link>
            <Link href="/legal" className="block text-white">
              Legal
            </Link> */}
            <Link href="/sitemap.xml" className="block text-white text-sm">
              Site Map
            </Link>
          </div>
          <div className="flex items-center justify-center pb-2">
            <p className="font-roboto text-sm font-light text-white">
              © {copyrightYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:flex md:flex-col md:gap-4 pt-10">
        <div className="flex gap-[10px] self-center justify-between w-[535px] font-roboto text-[12px]">
          <Link href="/privacy" className="block text-white">
            Cookie & Privacy Policy
          </Link>
          <Link href="/terms" className="block text-white">
            Terms & Conditions
          </Link>
          {/* <Link href="/sales-and-refunds" className="block text-white">
            Sales and Refunds
          </Link>
          <Link href="/legal" className="block text-white">
            Legal
          </Link> */}
          <Link href="/sitemap.xml" className="block text-white">
            Site Map
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <p className="font-roboto text-[11px] font-light text-white">
            © {copyrightYear} All Rights Reserved
          </p>
        </div>
      </div>
      <ScrollToTopButton />
    </div>)
  );
}