import React from "react";
import Footer from "@/components/footer";
import JobCard from "@/components/card";
import Filters from "@/components/filters";
import Navigation from "@/components/navigation";
import Banner from "@/components/banner";

export default function Home() {
    return (
      <main>
          <Navigation/>
          <Banner/>
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