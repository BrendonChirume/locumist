import React from "react";
import PagesNavigation from "@/components/navigation/pages";
import Footer from "@/components/footer";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    const {children} = props;

    return (
      <>
          <PagesNavigation/>
          <main className="">
              {children}
          </main>
          <Footer/>
      </>
    )
}