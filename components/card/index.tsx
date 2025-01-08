import {IconArrowRight, IconBriefcaseFilled, IconClockDollar, IconMapPinFilled} from '@tabler/icons-react';
import React from "react";

interface JobCardProps {
    job: {
        path: string;
        companyIcon?: React.ReactNode;
        companyName: string;
        jobTitle: string;
        jobDescription: string;
        location: string;
        jobType: string;
    }
}

export default function JobCard(props: JobCardProps) {
    const {job} = props;
    return (
      <li
        className="px-4 py-5 group/jobcard relative">
          <div className="space-y-3">
              <div className="flex items-center gap-x-3">
                  <div
                    className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                      {job?.companyIcon}
                  </div>
                  <div>
                      <div
                        className="block text-sm text-indigo-600 font-medium">{job.companyName}</div>
                      <h3 className="text-base text-gray-800 font-semibold mt-1">{job.jobTitle}</h3>
                  </div>
              </div>
              <p className="text-gray-600 sm:text-sm">
                  {job.jobDescription}
              </p>
              <div className="text-sm text-gray-600 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                      <IconMapPinFilled className="text-gray-400" size={20}/>
                      {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                      <IconBriefcaseFilled className="text-gray-400" size={20}/>
                      {job.jobType}
                  </div>
                  <div className="flex items-center gap-2">
                      <IconClockDollar stroke={2} className="text-gray-400" size={20}/>
                      10/hour
                  </div>
              </div>
          </div>
          <button
            className="absolute top-1/2 right-8 opacity-0 group-hover/jobcard:opacity-100 px-3 rounded-3xl flex gap-x-2 font-medium text-white text-sm text-center bg-primary-500 items-center hover:bg-primary-400 py-1.5 md:inline-flex transition-all duration-150"
            type="button">
              Apply Now
              <IconArrowRight stroke={3} className="text-white/80" size={16}/>
          </button>
      </li>
    )
}
