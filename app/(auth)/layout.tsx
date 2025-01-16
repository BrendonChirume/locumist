import React from "react";
import Logo from "@/components/logo";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    const {children} = props;

    return (
      <div>
          <aside className="flex p-3">
              <div
                className="max-w-lg hidden lg:flex rounded-2xl h-[960px] overflow-hidden items-center justify-center flex-1 relative bg-signup bg-cover bg-no-repeat bg-bottom">
                  <div className="bg-blend-overlay bg-black/70 absolute left-0 right-0 bottom-0 top-0"/>
                  <Logo className="absolute top-10 left-10 text-gray-50"/>
                  <div className="absolute top-50 text-gray-50 max-w-sm left-10">
                      <h2 className="text-xl mb-2">Welcome to Our Platform </h2>
                      <h4>
                          Welcome back! Please enter your email and password to sign in. Discover a world where seamless
                          connectivity empowers your every interaction. Dive into an experience designed to effortlessly
                          connect you with what matters most, enhancing productivity and enabling you to achieve more.
                      </h4>
                  </div>
              </div>
              <div className="w-full lg:w-1/2 pl-24 py-28">
                  <div className="max-w-md w-full">
                      {children}
                  </div>
              </div>
          </aside>
      </div>
    )
}