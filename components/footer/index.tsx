import Logo from "@/components/logo";
import {IconMail, IconMapPin, IconPhone} from "@tabler/icons-react";
import React from "react";

const contactMethods = [
    {
        icon: <IconMapPin stroke={2}/>,
        contact: "Remote",
        title: "Our office"
    },
    {
        icon: <IconPhone stroke={2}/>,
        contact: "+263 (0) 77 644 5843",
        title: "Phone"
    },
    {
        icon: <IconMail stroke={2}/>,
        contact: "tchirume14@gmail.com",
        title: "Email"
    },
]


export default function Footer() {
    return (
      <footer className="pt-20 mt-24 bg-slate-900 text-gray-300 font-normal relative pb-8">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <div className="justify-between sm:flex">
                  <div className="space-y-6">
                      <Logo className="-ml-2.5"/>
                      <div>
                          <div className="max-w-screen-xl mx-auto px-4 md:px-8 grid grid-cols-12">
                              <div className="max-w-xl space-y-3 col-span-8">
                                  <h3 className="font-semibold">
                                      Contact
                                  </h3>
                                  <p className="text-3xl font-semibold sm:text-4xl">
                                      Let us know how we can help
                                  </p>
                                  <p>
                                      We’re here to help and answer any question you might have, We look forward to
                                      hearing from you .
                                  </p>
                                  <div className="mt-10 py-10 text-gray-400">
                                      <p>© {new Date().getFullYear()} Locumist Inc. All rights reserved.</p>
                                  </div>
                              </div>
                              <div className="col-span-4">
                                  <ul className="-mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
                                      {
                                          contactMethods.map((item, idx) => (
                                            <li key={idx}
                                                className="min-w-52 rounded-xl hover:bg-primary-400/10 cursor-pointer px-6 py-2">
                                                <h4 className="text-lg font-medium">{item.title}</h4>
                                                <div className="mt-3 flex items-center gap-x-3">
                                                    <div className="flex-none text-gray-400">
                                                        {item.icon}
                                                    </div>
                                                    <p>{item.contact}</p>
                                                </div>
                                            </li>
                                          ))
                                      }
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-full rounded-full bg-sky-500/10 blur-3xl"/>
          <svg width="277" height="202" viewBox="0 0 277 202" fill="none" xmlns="http://www.w3.org/2000/svg"
               className="absolute -bottom-0 -right-14 h-32 rotate-180 text-slate-50/20 xl:bottom-0 xl:right-0 xl:h-auto">
              <path
                d="M-29.8135 124.908L-24.1193 113.856C-2.57166 72.0329 39.8172 45.0432 86.8291 43.2132L99.2525 42.7296L111.676 42.246C158.688 40.416 201.077 13.4263 222.624 -28.3968L228.318 -39.449"
                stroke="currentColor" strokeOpacity="0.50" strokeWidth="2.46923" strokeLinecap="round"
                strokeLinejoin="round"></path>
              <path
                d="M-38.0313 112.002L-32.3371 100.949C-10.7894 59.1263 31.5994 32.1366 78.6113 30.3066L91.0347 29.823L103.458 29.3394C150.47 27.5094 192.859 0.519647 214.406 -41.3034L220.101 -52.3556"
                stroke="currentColor" strokeOpacity="0.50" strokeWidth="2.46923" strokeLinecap="round"
                strokeLinejoin="round"></path>
              <path
                d="M-21.5952 137.815L-15.901 126.763C5.64661 84.9395 48.0354 57.9498 95.0473 56.1198L107.471 55.6362L119.894 55.1526C166.906 53.3226 209.295 26.3329 230.842 -15.4902L236.537 -26.5424"
                stroke="currentColor" strokeOpacity="0.50" strokeWidth="2.46923" strokeLinecap="round"
                strokeLinejoin="round"></path>
              <path
                d="M-13.3779 150.721L-7.68373 139.669C13.8639 97.8461 56.2527 70.8564 103.265 69.0264L115.688 68.5428L128.111 68.0592C175.123 66.2292 217.512 39.2395 239.06 -2.5836L244.754 -13.6358"
                stroke="currentColor" strokeOpacity="0.50" strokeWidth="2.46923" strokeLinecap="round"
                strokeLinejoin="round"></path>
              <path
                d="M-5.16016 163.628L0.534043 152.576C22.0817 110.753 64.4705 83.7629 111.482 81.9329L123.906 81.4493L136.329 80.9657C183.341 79.1357 225.73 52.146 247.278 10.323L252.972 -0.72924"
                stroke="currentColor" strokeOpacity="0.50" strokeWidth="2.46923" strokeLinecap="round"
                strokeLinejoin="round"></path>
          </svg>
      </footer>
    )
}