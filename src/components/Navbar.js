import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomeLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
      h-[1px] inlibe-block bg-dark absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomeMobileLink  = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  
  const handleClick = () => {
    toggle();
    router.push(href)
  }
  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark  my-2`} onClick={handleClick}>
      {title}
      <span
        className={`
      h-[1px] inlibe-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {

const [mode, setMode] = useThemeSwitcher();

const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen(!isOpen)
}


  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">

    <button className=" justify-center items-center flex-col hidden lg:flex" onClick = {handleClick}>
       <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5  ${ isOpen? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
       <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen?'opacity-0' : 'opacity-100'}`}></span>
       <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5  ${ isOpen? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
    </button>

    <div className="w-full flex items-center justify-between lg:hidden">
      <nav className="flex justify-center items-center flex-wrap ">

      {/* <button 
      onClick={() => setMode(mode === "light" ? "dark": " light")} 
        className=" mr-3 flex items-center justify-center rounded-full p-1 ">
        {
          mode === "dark" ? <SunIcon className={'fill-dark'}/> : <MoonIcon className={'fill-dark'}/>
        }
      </button> */}
      
      <motion.a
        href="https://x.com/"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6 mr-3"
      >
        <TwitterIcon />
      </motion.a>
      <motion.a
        href="https://x.com/"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6 mx-3"
      >
        <GithubIcon />
      </motion.a>
      <motion.a href="https://x.com/" target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6 mx-3"
      >
        <LinkedInIcon />
      </motion.a>
      <motion.a href="https://x.com/" target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6 mx-3"
      >
        <DribbbleIcon />
      </motion.a>

      </nav>

      <nav className="">
      <CustomeLink href="/" title="Home" className="mr-4" />
      <CustomeLink href="/about" title="About" className="mx-4" />
      <CustomeLink href="/projects" title="Projects" className="mx-4" />
     
      <CustomeLink href="/hireme" title="Hire Me" className="ml-4" />
      </nav>
    </div>
    
    {isOpen ? 
    
      <motion.div 
      initial={{scale:0, opacity:0, x:"-50%", y: "-50%n"}} 
      animate={{scale:1, opacity:1}} 
      className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2  left-1/2  -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop:blur-md py-32">
        <nav className="  flex flex-col justify-center items-center">
          <CustomeMobileLink href="/" title="Home" className="" toggle={handleClick} />
          <CustomeMobileLink href="/about" title="About" className="" toggle={handleClick} />
          <CustomeMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
          <CustomeMobileLink href="/contact" title="Contact Me" className="" toggle={handleClick} />
        </nav>

        <nav className="flex justify-center items-center flex-wrap mt-2 ">

        <button 
        onClick={() => setMode(mode === "light" ? "dark": " light")} 
          className=" mr-3 flex items-center justify-center rounded-full p-1 sm:mx-1 ">
          {
            mode === "dark" ? <SunIcon className={'fill-dark'}/> : <MoonIcon className={'fill-dark'}/>
          }
        </button>
        <motion.a
          href="https://x.com/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3 sm:mx-1"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://x.com/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 bg-light rounded-full dark:bg-dark  sm:mx-1"
        >
          <GithubIcon />
        </motion.a>
        <motion.a href="https://x.com/" target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 sm:mx-1"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://x.com/" target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 sm:mx-1"
        >
          <DribbbleIcon />
        </motion.a>

        </nav>
      </motion.div>
    :  
      null 
    }

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      
    </header>
  );
};

export default Navbar;
