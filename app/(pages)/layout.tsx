import React from "react";
import PagesNavigation from "@/components/navigation/pages";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    const {children} = props;

    return (
      <div className="">
          <PagesNavigation/>
          {children}
      </div>
    )
}