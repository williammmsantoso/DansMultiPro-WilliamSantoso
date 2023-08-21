"use client";

import { Banner } from "@/components/Banner";
import { JobList } from "@/components/JobList";
import { Meta } from "@/components/Meta";
import { JobListType, JobParamsType } from "@/constant/jobInterface";

import { Job } from "@/layouts/Job";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getJobList } from "../api/job";
import _ from "lodash";

export default function Index () {
    const [ params, setParams ] = useState<JobParamsType>({
        description: '',
        location: '',
        full_time: false,
        page: 1,
    });
    const [data, setData] = useState<JobListType[]>([]);
    const [totalData, setTotalData] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchJobList = () => {
        setLoading(true);
        getJobList(params)
            .then((res: any) => {
                setTotalData(res.total_data);

                const resData = res.data;
                const filterData = _.filter(resData, el => !_.isNull(el));

                setData([ ...data, ...filterData ]);
                setLoading(false);
            })
            .catch((error) => {
                toast.error('Something wrong, please try again later', {
                    toastId: '14',
                });
                
                console.log(error);
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchJobList();
    }, [params]);

    useEffect(() => {
        if (data.length >= totalData) {
            setHasMore(false);
        }
    }, [data]);


    return <div id="main-page-container">
        <Job meta={<Meta title="Job" description="Job List" />}>
            <Banner params={params} setParams={(value: JobParamsType) => setParams(value)} />

            <div className="main-container">
                <JobList
                    data={data}
                    loading={loading}
                    hasMore={hasMore}
                    dataLength={totalData}
                    getMore={() => setParams({ ...params, page: params.page + 1 })}
                />
            </div>
        </Job>
    </div>
}