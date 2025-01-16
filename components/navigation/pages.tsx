import Logo from "@/components/logo";
import Link from "next/link";

const navigation = [
    {title: "About", path: "#"},
]

export default function PagesNavigation() {
    return (
      <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                  <Logo className="text-gray-800"/>
              </div>
              <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 `}>
                  <div className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <div key={idx} className="text-gray-600 hover:text-black cursor-pointer">
                                    <Link href={item.path} className="block">
                                        {item.title}
                                    </Link>
                                </div>
                              )
                          })
                      }
                      <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                      <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                          <Link href="/signin"
                                className="block py-3 text-center font-medium text-gray-600 hover:text-black border rounded-lg md:border-none">
                              Sign in
                          </Link>

                          <Link href="#"
                                className="block py-2.5 px-3 text-center text-gray-50 bg:text-primary-500 bg-black active:shadow-none rounded-3xl shadow md:inline">
                              Post a job - $299
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
    )
}