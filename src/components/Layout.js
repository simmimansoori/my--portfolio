import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full p-32 pt-0 z-0 bg-light xl:p-24 lg:p-16 mb:p-12 sm:p-8 inline-block${className}`}>
      {children}
    </div>
  )
}

export default Layout
