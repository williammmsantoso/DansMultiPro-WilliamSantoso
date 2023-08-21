"use client";

import React, { useEffect, useState } from "react";
import { getJobDetail } from "../api/job";
import { error } from "console";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import { JobListType } from "@/constant/jobInterface";
import { Job } from "@/layouts/Job";
import { Meta } from "@/components/Meta";
import { Chip } from "@/components/Chip";
import { Button } from "@/components/Button";

export default function Detail() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<JobListType>({
        company: "",
        company_logo: "",
        company_url: "",
        created_at: "",
        description: "",
        how_to_apply: "",
        id: "",
        location: "",
        title: "",
        type: "",
        url: "",
    });

    const router = useRouter();
    const { id } = router.query;


    useEffect(() => {
        setLoading(true);

        if (id) {
            getJobDetail(id)
                .then((res: any) => {
                    setLoading(false);
                    setData(res.data);
                })
                .catch((error) => {
                    toast.error('Something wrong, please try again later', {
                        toastId: '14',
                    });
                    console.log(error);
                })
        }
    }, []);

    return <Job meta={<Meta title={data.company} description={data.company} />}>
        <div className="detail-job-container">
            {
                loading && <Loader />
            }
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="mr-5">
                        <img className="company-logo" src="/logo_dans.png" alt="company_logo" />
                    </div>
                    <div className="">
                        <div className="job-title text-2xl font-semibold mb-3">
                            {data.title}
                        </div>
                        <div className="company text-base text-color-grey mb-2">
                            {data.company}
                        </div>
                        <div className="item location flex items-center gap-3 mb-2">
                            <img className="icon-location" src="/location.png" alt="location" />
                            <span className="text-base text-color-grey">{data.location}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <Chip title={data.type} />
                    <Button className="mt-3">
                        <a href={data.company_url}>
                            Apply
                        </a>
                    </Button>
                </div>
            </div>
            <div className="mt-10">
                <div className="job-title text-xl font-semibold mb-3">
                    How to Apply
                </div>
                <div className="text-base text-color-grey mb-2" dangerouslySetInnerHTML={{ __html: data.how_to_apply }} />
            </div>
            <div className="mt-10">
                <div className="job-title text-xl font-semibold mb-3">
                    Job Description
                </div>
                <div className="text-base text-color-grey mb-2" dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>

        </div>
    </Job>
}
