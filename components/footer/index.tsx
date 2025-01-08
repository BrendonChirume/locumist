import Logo from "@/components/logo";

export default function Footer() {
    return (
      <footer className="pt-20 mt-24 bg-gray-800 text-gray-300 font-normal">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <div className="justify-between sm:flex">
                  <div className="space-y-6">
                      <Logo/>
                      <p className="max-w-md">
                          Nulla auctor metus vitae lectus iaculis, vel euismod massa efficitur.
                      </p>
                      <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                          <li className="duration-150">
                              <a href="#"> Terms </a>
                          </li>
                          <li className="duration-150">
                              <a href="#"> License </a>
                          </li>
                          <li className="duration-150">
                              <a href="#"> Privacy </a>
                          </li>
                          <li className="duration-150">
                              <a href="#"> About us </a>
                          </li>
                      </ul>
                  </div>
                  <div className="mt-6">


                  </div>
              </div>
              <div className="mt-10 py-10 border-t md:text-center">
                  <p>© 2024 Float UI Inc. All rights reserved.</p>
              </div>
          </div>
      </footer>
    )
}