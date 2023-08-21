"use client";

import { Banner } from "@/components/Banner";
import { JobList } from "@/components/JobList";
import { Meta } from "@/components/Meta";
import { JobListType, JobParamsType } from "@/constant/jobInterface";

import { Job } from "@/layouts/Job";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getJobList } from "../api/job";

export default function Index () {
    const [ params, setParams ] = useState<JobParamsType>({
        description: '',
        location: '',
        full_time: false
    });
    const [data, setData] = useState<JobListType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);

        getJobList(params)
            .then((res: any) => {
                setData(res?.data as JobListType[]);
                setLoading(false);
            })
            .catch((error) => {
                toast.error('Something wrong, please try again later', {
                    toastId: '14',
                });
                
                console.log(error);
                setLoading(false);
            })
    }, [params]);


    return <div id="main-page-container">
        <Job meta={<Meta title="Job" description="Job List" />}>
            <Banner params={params} setParams={(value: JobParamsType) => setParams(value)} />

            <div className="main-container">
                <JobList data={data} loading={loading} />
            </div>
        </Job>
    </div>
}