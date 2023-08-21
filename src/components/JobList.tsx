import { JobListType } from "@/constant/jobInterface";
import React from "react";
import Loader from "./Loader";
import { Chip } from "./Chip";
import moment from "moment";
import Link from "next/link";

interface JobParamsInterface {
    data?: JobListType[],
    loading?: boolean,
}

export const JobList = ({ data, loading }: JobParamsInterface) => {
    return <div className="job-container">
        <div className="title text-2xl font-bold">
            Job List
        </div>
        <div className="job-list-wrapper">
            {
                loading && <Loader />
            }
            {
                !loading && data && data.length > 0 
                    ? data.map((item: any, idx: number) => {
                        return <div className="job-item " key={idx}>
                            <div className="flex items-center justify-between">
                                <div className="item">
                                    <img className="company-logo" src="/logo_dans.png" alt="company_logo" />
                                </div>
                                <div className="item">
                                    <div className="job-title text-2xl font-semibold mb-3">
                                        {item.title}
                                    </div>
                                    <div className="company text-base text-color-grey">
                                        {item.company}
                                    </div>
                                </div>
                                <div className="item location flex items-center gap-3">
                                    <img className="icon-location" src="/location.png" alt="location" />
                                    <span className="text-base text-color-grey">{item.location}</span>
                                </div>
                                <div className="item">
                                    <Chip title={item.type} />
                                </div>
                            </div>
                            <div className="bottom-section flex items-center justify-between">
                                <div className="created mb-3 mt-3">
                                    {moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                                </div>
                                <div className="button-detail text-base text-blue-500 cursor-pointer">
                                    <Link
                                        href={{
                                            pathname: `/job/${item.id}`,
                                        }}
                                    >
                                        View detail {`>>`}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    })
                    : <div>Your search value is empty, please try again new job...</div>
            }
            
        </div>
    </div>
}