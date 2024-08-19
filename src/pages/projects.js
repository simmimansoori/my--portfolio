import Head from 'next/head'
import React from 'react'
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import cryptobucket from '../../public/images/projects/crypto-screener-cover-image.jpg';
import togglebtn from '../../public/images/projects/togglebtn.png';
import newton from '../../public/images/projects/newtons-cradle.png';
import weatherapp from '../../public/images/projects/weather-app.png';
import stopwatch from '../../public/images/projects/stopwatch.png';
import clock from '../../public/images/projects/clock.png';
import tindog from '../../public/images/projects/tindog.png';
import oldportfolio from '../../public/images/projects/oldportfolio.png';
import gradient from '../../public/images/projects/gradient.png';
import todolist  from '../../public/images/projects/todolist.png';
import bloomsite from '../../public/images/projects/bloomstore.png';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image)

const FeatureProject = ({type,title,summary,link,img, github}) => {
    return(
        <article className='w-full flex items-center justify-between rounded-br-2xl
        rounded-3xl relative border border-solid border-dark bg-light shadow-2xl p-10
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4' >

            <div className='rounded-[2.5rem] rounded-br-2xl w-[101%] h-[103%] 
            top-0 -right-3 bg-dark absolute -z-10 dark:bg-light  xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'></div>
            <motion.a href={link} target='_blank'
            

            className='w-1/2 cursor-pointer overflow-hidden rounded-2xl lg:w-full ' 
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'  whileHover={{ scale: 1.05}} 
                transition={{duration:0.2}}
                priority 
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw 50vw'/>
            </motion.a>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className=' text-primary font-medium text-xl lg:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2 '>
                    <h2 className='my-2 w-full text-left text-3xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark '>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'> <GithubIcon /></Link>
                    <Link href={link} target='_blank' 
                    className='ml-4 rounded-lg bg-dark  text-light p-2 
                    px-6 text-lg font-semibold sm:px-4 sm-text-base' > Visit Project</Link>

                </div>
            </div>
        </article>
    )
}

const Project = ({type,title,link,img, github}) => {
    return(
        <article className='w-full flex flex-col items-start justify-center  rounded-br-xl
        rounded-2xl border border-solid border-dark bg-light relative
         p-6  xs:p-4 md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[.5rem]'> 

        <div className='rounded-[2rem] rounded-br-xl w-[101%] h-[103%] 
            top-0 -right-3 bg-dark absolute -z-10 '></div>
            
            <Link href={link} target='_blank' 
            className='w-full cursor-pointer overflow-hidden rounded-lg ' 
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'   whileHover={{ scale: 1.05}} 
                transition={{duration:0.2}}    
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className=' text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base '>{type}</span>
            
                <Link href={link} target='_blank' className='hover:underline underline-offset-2 '>
                        <h2 className='w-full  my-2 text-left text-2xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
            <div className='mt-2 w-full flex items-center justify-between '>

            <Link href={link} target='_blank' 
                    className=' 
                    text-lg font-semibold underline md:text-base' > Visit 
                </Link>
                <Link href={github} target='_blank' className='w-8  md:w-6'> <GithubIcon /></Link>
               

            </div>
            </div>
        </article>
    )
}




const projects = () => {
  return (
    <>
        <Head>
            <title>Simran  Mansoori | Projects Page</title>
            <meta name='description' content='any description '/>
        </Head>

        <TransitionEffect />
        <main className=' flex w-full mb-16 flex-col items-center justify-center '>  
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-15 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>

                    <div className='col-span-12'><FeatureProject 
                    
                        title="Crypto Screener Application"

                        img={cryptobucket}
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="https://cryptobucket-1s8h.vercel.app/"
                        github="https://github.com/simmimansoori/cryptobucket"
                        type="Featured Project"

                    />
                    </div>

                    <div className='col-span-6 sm:col-span-12'><Project

                    title="Day & Night Toggle Button"
                    img={togglebtn}
                    link="https://simmimansoori.github.io/Toggle-button/"
                    github="https://github.com/simmimansoori/Toggle-button"
                    type="Featured Project"
                     /></div>
                     <div className='col-span-6 sm:col-span-12'><Project 
                    title="Check Weather App"
                    img={weatherapp}
                    link="https://simmimansoori.github.io/Check_weather/"
                    github="https://github.com/simmimansoori/Check_weather"
                    type="Featured Project"
                    /></div> 

                    
                    <div className='col-span-12 sm:col-span-12'><FeatureProject 
                    
                        title="Bloom E-Commerce Store"
                        img={bloomsite}
                        summary="Developed responsive modern e-commerce website utilizing cutting-edge technologies including HTML5, CSS3 and JavaScript. 
                         Optimized website performance by using Vite which is fast build."
                        link="/"
                        github="https://github.com/simmimansoori/Newton-s-Cradle"
                        type="Featured Project"

                    />
                    </div>

                    <div className='col-span-6 sm:col-span-12'><Project 
                    title="Newton's Cradle"
                    img={newton}
                    link="https://simmimansoori.github.io/Newton-s-Cradle/"
                    github="https://github.com/simmimansoori/Newton-s-Cradle"
                    type="Featured Project"
                    /></div> 

                    
                    

                    <div className='col-span-6 sm:col-span-12'><Project 
                    title="Simple Live Clock"
                    img={clock}
                    link="https://simmimansoori.github.io/Clock/"
                    github="https://github.com/simmimansoori/Clock"
                    type="Featured Project"
                    /></div> 

                    <div className='col-span-6 sm:col-span-12'><Project 
                    title="Stop Watch Using JavaScript"
                    img={stopwatch}
                    link="https://simmimansoori.github.io/Stopwatch/"
                    github="https://github.com/simmimansoori/Stopwatch"
                    type="Featured Project"
                    /></div>

                     <div className='col-span-6 sm:col-span-12'><Project 
                    title="TinDog Clone "
                    img={tindog}
                    link="https://simmimansoori.github.io/Tindoge-clone/"
                    github="https://github.com/simmimansoori/Tindoge-clone"
                    type="Featured Project"
                    /></div> 

                     <div className='col-span-6 sm:col-span-12'><Project 
                    title="Old Portfolio"
                    img={oldportfolio}
                    link="https://simmimansoori.github.io/My-portfolio/"
                    github="https://github.com/simmimansoori/My-portfolio"
                    type="Featured Project"
                    /></div>  

                     
                    <div className='col-span-6 sm:col-span-12'><Project 
                    title="Beatiful Gradient Generator"
                    img={gradient}
                    link="https://simmimansoori.github.io/Beautiful-Gradient-/"
                    github="https://github.com/simmimansoori/Beautiful-Gradient"
                    type="Featured Project"
                    /></div>  

                      
                    <div className='col-span-6 sm:col-span-12'><Project  
                    title="To-Do List"
                    img={todolist}
                    link="https://simmimansoori.github.io/To-Do-List/"
                    github="https://github.com/simmimansoori/To-Do-List"
                    type="Featured Project"
                    /></div>  
                
                

                </div>


            </Layout> 
        </main>    
      
    </>
  )
}

export default projects
