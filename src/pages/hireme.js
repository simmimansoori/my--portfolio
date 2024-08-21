import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'



const hireme = () => {
  return (
    <>
      <Head>
        <title>Hire Me</title>
        <meta name="description" content="" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center  text-dark w-full min-h-screen ' >

        <Layout className='pt-0 md:pt-16 sm:pt-8'>

        
                

              <div className='flex items-center justify-center mt-0 lg:self-center sm:flex-col sm:text-center  '>

                <Link href="/Front-End_Dev_Simran_Mansoori.pdf" target={"_blank"} 
                  className='flex items-center bg-dark text-light rounded-lg p-2.5 px-6  text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:mb-4 md:text-base '
                  download={true}
                  >Download Resume
                </Link >

                <Link href="mailto:simranmansoori1996@gmail.com" target={"_blank"}
                 className='ml-6 flex items-center bg-dark text-light rounded-lg p-2.5 px-6  text-lg font-semibold
                 hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:mb-4 md:text-base sm:ml-0'
                >Contact Me</Link>
             
              </div>

        </Layout>
        
      </main>
    </>
  )
  
}

export default hireme
