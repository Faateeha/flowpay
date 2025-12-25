import React from 'react'

const Sidebar = ({user}: SiderbarProps) => {
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]'>
        <nav className='flex flex-col gap-4'></nav>
    </section>
  )
}

export default Sidebar
