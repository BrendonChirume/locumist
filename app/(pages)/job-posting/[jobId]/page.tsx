import React from "react";
import {IconArrowLeft} from "@tabler/icons-react";
import Link from "next/link";

export default async function JobPosting(
  {params,}: { params: Promise<{ jobId: string }> }
) {

    const jobId = (await params).jobId;

    return (
      <section className="md:px-10 px-4 max-w-screen-xl mx-auto grid grid-cols-12 py-14 gap-x-28">
          <div className="col-span-12 md:col-span-8">
              <Link href={`/${jobId}`}
                    className="flex items-center justify-start font-medium gap-x-2 text-indigo-600 text-base mb-6">
                  <IconArrowLeft stroke={2} size={16}/>
                  All Jobs
              </Link>
              <h1 className="text-4xl font-extrabold max-w-screen-sm mb-8 text-gray-900">Engineering Manager Developer
                  Experience</h1>
              <div className="space-y-8">
                  <div>
                      <p className="text-xl mb-3 font-bold">The Role</p>
                      <p className="text-base text-gray-500">
                          In the world of AI, behavioural predictions are leading the charge to better machine learning.

                          There is so much happening in the AI space. Advances in the economic sectors have seen
                          automated
                          business practices rapidly increasing economic value. While the realm of the human sciences
                          has
                          used
                          the power afforded by computational capabilities to solve many human based dilemmas. Even the
                          art
                          scene has adopted carefully selected ML applications to usher in the technological
                          movement. <br/>

                          As a Senior Client Engineer, you&#39;ll work alongside other engineers, designers, and product
                          managers to
                          tackle everything from huge company initiatives to modest but important bug fixes, from start
                          to
                          finish. You&#39;ll also collaborate with your product team on discovery, helping to assess the
                          direction
                          and feasibility of product changes. And, perhaps most importantly, you&#39;ll actively contribute
                          to
                          the
                          evolution of the culture and processes of a growing engineering team.
                      </p>
                  </div>
                  <div>
                      <p className="text-xl mb-3 font-bold">Responsibilities</p>
                      <p className="text-base text-neutral-600">
                          In the world of AI, behavioural predictions are leading the charge to better machine learning.

                          There is so much happening in the AI space. Advances in the economic sectors have seen
                          automated
                          business practices rapidly increasing economic value. While the realm of the human sciences
                          has
                          used
                          the power afforded by computational capabilities to solve many human based dilemmas. Even the
                          art
                          scene has adopted carefully selected ML applications to usher in the technological movement.

                          As a Senior Client Engineer, you&#39;ll work alongside other engineers, designers, and product
                          managers to
                          tackle everything from huge company initiatives to modest but important bug fixes, from start
                          to
                          finish. You&#39;ll also collaborate with your product team on discovery, helping to assess the
                          direction
                          and feasibility of product changes. And, perhaps most importantly, you&#39;ll actively contribute
                          to
                          the
                          evolution of the culture and processes of a growing engineering team.
                      </p>
                  </div>
              </div>
          </div>
          <div className="hidden md:block col-span-4 -mt-48">

          </div>
      </section>
    )
}