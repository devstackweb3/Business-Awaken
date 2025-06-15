import React, { useState, useRef, useEffect } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services/loyalty-strategy' },
    { name: 'Newsletter', link: '/newsletter' },
  ]

  const [isOpen, setisOpen] = useState(false)

  const ref = useRef<HTMLUListElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node))
      setisOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <nav className="fixed top-0 z-[102] w-full border-gray-200 bg-white bg-opacity-30 backdrop-blur-md backdrop-filter dark:bg-gray-900 ">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2">
        <Link href="/" className="flex lg:items-center">
          <Image
            src="/logo.png"
            alt="W3B Economy Logo"
            width={48}
            height={48}
            priority={true}
          />
        </Link>

        <div
          onClick={() => setisOpen(!isOpen)}
          className="absolute right-8 top-6 h-7 w-7 cursor-pointer md:hidden lg:hidden xl:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <div className="hidden md:block">
          <ul className="relative left-2 mt-0 flex w-fit flex-row space-x-6 border-0 border-gray-100 p-0 font-medium text-black">
            {Links.map((link) => (
              <li
                key={link.link}
                className="my-5 block pl-3 pr-4 font-semibold text-black hover:text-cyan-700 md:my-0 md:ml-8"
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:hidden lg:hidden xl:hidden">
        <ul
          ref={ref}
          className={`transition-all ${
            isOpen ? 'top-8' : 'top-[-290px]'
          } absolute  right-2 z-[1] mt-4 flex w-fit flex-col rounded-lg border border-gray-100 bg-white bg-opacity-80 p-4 font-medium backdrop-blur-md backdrop-filter duration-500 ease-in dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-6 md:border-0 md:p-0 md:dark:bg-gray-900`}
        >
          {Links.map((link) => (
            <li
              key={link.link}
              className="my-4 ml-2 block pl-3 pr-4 font-semibold text-black hover:text-cyan-700"
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
