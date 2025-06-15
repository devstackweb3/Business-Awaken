import Link from 'next/link'
import React from 'react'
import TrustpilotWidget from '@/components/trustpilot'
import Image from 'next/image'

const footbar = () => {
  return (
    <footer className="divide-y bg-gradient-to-b from-black to-cyan-500 px-4 dark:text-teal-100">
      <div className="container mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex flex-col justify-center space-x-3 lg:justify-start"
          >
            <div className="flex h-12 w-12 self-center justify-center rounded-full dark:bg-slate-300">
              <Image src="/logo.png" alt="W3B Economy" width={45} height={25} />
            </div>
            <span className="self-center text-2xl font-semibold text-white">
              W3B Economy
            </span>
          </a>
        </div>
        <div className="grid grid-cols-3 gap-x-3 gap-y-8 text-sm sm:grid-cols-3 lg:w-2/3">
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-teal-50 font-semibold text-white">
              Services
            </h3>
            <ul className="space-y-1 text-white">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-cyan-500 dark:text-white  dark:hover:text-white md:border-0 md:p-0 md:hover:text-teal-400 md:dark:hover:bg-transparent"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-cyan-500 dark:text-white  dark:hover:text-white md:border-0 md:p-0 md:hover:text-teal-400 md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-cyan-500 dark:text-white  dark:hover:text-white md:border-0 md:p-0 md:hover:text-teal-400 md:dark:hover:bg-transparent"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-teal-50 font-semibold text-white">
              PRODUCT
            </h3>
            <ul className="space-y-1 text-white">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:text-cyan-500 dark:text-white  dark:hover:text-white md:border-0 md:p-0 md:hover:text-teal-400 md:dark:hover:bg-transparent"
                >
                  Presentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-500 dark:text-white  dark:hover:text-white md:border-0 md:p-0 md:hover:text-teal-400 md:dark:hover:bg-transparent"
                >
                  Virtual Use Instructions
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className=" hover:text-cyan-500  dark:text-white dark:hover:text-white md:border-0 md:p-0 md:hover:text-teal-400 md:dark:hover:bg-transparent"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="uppercase dark:text-teal-50 font-semibold text-white">
              SOCIAL NETWORKS
            </h3>
            <div className="flex flex-row">
              <div className="flex space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Instagram Profile"
                  className="flex items-center p-1 text-white hover:text-cyan-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/w3b-economy?trk=similar-pages"
                  title="Linkedin Profile"
                  className="flex items-center text-white hover:text-cyan-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 42 42"
                    fill="currentColor"
                    className="h-8 w-8 fill-current"
                    stroke="none"
                    stroke-width="1"
                  >
                    <path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-xs text-white">
              <Link href="/terms&conditions">Terms & Conditions</Link>
            </div>
            <div className="flex justify-start">
              <div>
                <TrustpilotWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-sm text-white">
        © 2022-2023 W3B Economy. All rights reserved.
      </div>
    </footer>
  )
}

export default footbar
