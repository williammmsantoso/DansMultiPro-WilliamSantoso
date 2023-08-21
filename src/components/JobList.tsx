import { JobListType } from "@/constant/jobInterface";
import React from "react";
import Loader from "./Loader";
import { JobCard } from "./JobCard";
import InfiniteScroll from "react-infinite-scroll-component";

interface JobParamsInterface {
    data: JobListType[],
    loading?: boolean,
    dataLength: number,
    getMore?: any,
    hasMore?: any,
}

export const JobList = ({ data, loading, dataLength, getMore, hasMore }: JobParamsInterface) => {
    return <div className="job-container">
        <div className="title text-2xl font-bold">
            Job List
        </div>
        <div className="job-list-wrapper">
            {
                loading && <Loader />
            }

            <InfiniteScroll
                dataLength={dataLength}
                next={getMore}
                hasMore={hasMore}
                loader={null}
                endMessage={<div className="text-lg my-5 font-medium text-center">Nothing more to show...</div>}
            >
                {
                    !loading && data && data.length > 0 
                        ? data.map((item: JobListType, idx: number) => {
                            return <JobCard item={item} key={idx} />
                        })
                        : <div>Your search value is empty, please try again new job...</div>
                }
            </InfiniteScroll>
            
        </div>
    </div>
}