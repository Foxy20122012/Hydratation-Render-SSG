'use client'
import Link from 'next/link'


export function Navigation() {
  return (
    <>
      <header className="absolute z-10 lg:text-lg bg-white border-y-[1px] shadow-md border-y-gray-400 h-[10vh] xl:h-[8vh] flex items-center justify-center">
        <div className="flex flex-row justify-between	px-4 w-screen h-full">
          <div className="flex flex-row divide-x-2 h-full justify-center items-center sm:space-x-4 space-x-6 lg:space-x-10">
           
            <div className="pl-4 h-full font-semibold">
              <ul className="flex space-x-4 h-full justify-center items-center">
                <li
                  className="flex items-center h-full text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-900"
                  key="/"
                >
                  <Link rel="stylesheet" href="/">
                    Home
                  </Link>
                </li>
                
                <li
                  className="flex items-center h-full text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-400"
                  key="/about"
                >
                  <Link rel="stylesheet" href="/about">
                    About
                  </Link>
                </li>
                <li
                  className="flex items-center h-full text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-500"
                  key="/products"
                >
                  <Link rel="stylesheet" href="/posts">
                    Posts
                  </Link>
                </li>
                <li
                  className="flex items-center h-full text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-500"
                  key="/products"
                >
                  <Link rel="stylesheet" href="https://www.joshwcomeau.com/react/the-perils-of-rehydration/">
                    Documentación
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        
        </div>
      </header>
    </>
  )
}