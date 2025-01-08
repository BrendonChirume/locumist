import Logo from "@/components/logo";
import React from "react";
import Link from "next/link";

export default function Navigation() {
    return (
      <div className="bg-gradient-to-r from-[#334155]  to-[#0f172a]">
          <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6 ">
              <div className="flex justify-between">
                  <Logo/>
                  <button className="text-gray-500 outline-none md:hidden">
                      {/*{*/}
                      {/*    state ? (*/}
                      {/*      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
                      {/*           stroke="currentColor">*/}
                      {/*          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
                      {/*                d="M6 18L18 6M6 6l12 12"/>*/}
                      {/*      </svg>*/}
                      {/*    ) : (*/}

                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"/>
                      </svg>
                      {/*    )*/}
                      {/*}*/}
                  </button>
              </div>
              <ul
                className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0`}>
                  <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
                      <li className="text-gray-50 hover:bg-white/20 rounded-md py-2 px-4">
                          <Link href="/">Home</Link>
                      </li>
                      <li className="text-gray-50 hover:bg-white/20 rounded-md py-2 px-4">
                          <a href="#">About</a>
                      </li>
                      <li className="text-gray-50 hover:bg-white/20 rounded-md py-2 px-4">
                          <Link href="/contact">Contact</Link>
                      </li>
                  </div>
                  <li className="order-2 py-5 md:py-0">
                      <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                          <Link href="/signin"
                                className="block py-3 text-center text-white md:hover:underline border rounded-lg md:border-none">
                              Sign in
                          </Link>

                          <Link href="#"
                                className="px-5 rounded-3xl flex gap-x-2 font-medium text-black text-center bg-white items-center hover:bg-gray-200 focus:ring-4 focus:ring-primary-300 duration-150 py-2.5 md:inline-flex">
                              Sign up
                          </Link>
                      </div>
                  </li>
              </ul>
          </nav>
      </div>
    )
}