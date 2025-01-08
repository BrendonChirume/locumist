import Logo from "@/components/logo";
import {IconMail, IconMapPin, IconPhone} from "@tabler/icons-react";

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
      <footer className="pt-20 mt-24 bg-gray-800 text-gray-300 font-normal">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <div className="justify-between sm:flex">
                  <div className="space-y-6">
                      <Logo/>
                      <div className="pl-2.5">
                          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                              <div className="max-w-xl space-y-3">
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
                              </div>
                              <div>
                                  <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
                                      {
                                          contactMethods.map((item, idx) => (
                                            <li key={idx} className="min-w-52 rounded-xl hover:bg-primary-400/10 cursor-pointer px-6 py-2">
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
              <div className="mt-10 py-10 border-t md:text-center">
                  <p>© {new Date().getFullYear()} Locumist Inc. All rights reserved.</p>
              </div>
          </div>
      </footer>
    )
}