import React from "react";
import Footer from "@/components/footer";
import JobCard from "@/components/card";
import Filters from "@/components/filters";
import Image from "next/image";
import {IconArrowRight} from '@tabler/icons-react';
import Navigation from "@/components/navigation";

export default function Home() {
    return (
      <main>
          <Navigation/>
          <section className="bg-white bg-gradient-to-r from-[#334155]  to-[#0f172a]">
              <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                  <div className="mr-auto place-self-center lg:col-span-7 space-y-8">
                      <h1
                        className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Shift
                          Your Perspective: Embrace the Locum Lifestyle Today!</h1>
                      <p
                        className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Transforming
                          pharmacy workflows: Join pharmacists nation wide simplifying locum shifts!</p>
                      <a href="#"
                         className="inline-flex items-center justify-center px-5 py-3 mr-3 gap-2 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                          Post a job - $299
                          <IconArrowRight stroke={2}/>
                      </a>
                      <a href="#"
                         className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                          Speak to Sales
                      </a>
                  </div>
                  <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
                      <Image width={350} height={300} src={'/Pharmacist-cuate.svg'} alt="mockup"/>
                  </div>
              </div>
          </section>
          <section className="max-w-screen-xl mx-auto grid grid-cols-12">
              <div className="col-span-12 md:col-span-8">
                  <JobCard/>
              </div>
              <div className="hidden md:block col-span-3 -mt-48">
                  <Filters/>
              </div>
          </section>
          <Footer/>
      </main>
    )
}