import {IconBriefcaseFilled, IconCalendarWeekFilled, IconClockDollar, IconMapPinFilled} from '@tabler/icons-react';
import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface JobCardProps {
    job: {
        companyIcon?: React.ReactNode;
        companyName: string;
        jobTitle: string;
        jobDescription: string;
        location: string;
        jobType: string;
        date: string;
        id: string;
    }
}

dayjs.extend(relativeTime);

export default function JobCard(props: JobCardProps) {
    const {job} = props;
    return (
      <li
        id={job.id}
        className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
          <Link href={`/job-posting/${job.id}`}>
              <div className="justify-between sm:flex">
                  <div className="space-y-3 flex-1">
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
                  <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                      <div className="flex items-center gap-2">
                          <IconCalendarWeekFilled stroke={2} className="text-gray-400" size={20}/>
                          {dayjs(job?.date).fromNow()}
                      </div>
                  </div>
              </div>
          </Link>
      </li>
    )
}
