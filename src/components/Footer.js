import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg p-2 dark:text-light dark:border-light 
    sm:text-base' >

      <Layout className=' flex items-center justify-between !p-2 lg:flex-col lg:py-6'>

        <span>{new Date().getFullYear() } &copy; All Right Reserved, </span>

        <div className='flex items-center lg:py-2'>
            Build By <span className='text-primary text-2xl px-1'>&#9825;</span> <Link href="/" 
            className='underline underline-offset-2' target={"_blank"}>Simran Mansoori 
            </Link>
        </div>

        <Link href="/" target={"_blank"}>Say Hello</Link>

      </Layout>

    </footer>
  )
}

export default Footer
