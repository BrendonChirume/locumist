import React from "react";
import Filters from "@/components/filters";
import Navigation from "@/components/navigation/home";
import Banner from "@/components/banner";
import JobList from "@/components/jobList";

export default function Home() {
    return (
      <>
          <Navigation/>
          <Banner/>
          <section className="max-w-screen-xl mx-auto grid grid-cols-12">
              <div className="col-span-12 md:col-span-8">
                  <JobList/>
              </div>
              <div className="hidden md:block col-span-4 -mt-48">
                  <Filters/>
              </div>
          </section>
      </>
    )
}