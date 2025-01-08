import React from "react";
import Footer from "@/components/footer";
import Filters from "@/components/filters";
import Navigation from "@/components/navigation";
import Banner from "@/components/banner";
import JobList from "@/components/jobList";

export default function Home() {
    return (
      <main>
          <Navigation/>
          <Banner/>
          <section className="max-w-screen-xl mx-auto grid grid-cols-12">
              <div className="col-span-12 md:col-span-8">
                  <JobList/>
              </div>
              <div className="hidden md:block col-span-3 -mt-48">
                  <Filters/>
              </div>
          </section>
          <Footer/>
      </main>
    )
}