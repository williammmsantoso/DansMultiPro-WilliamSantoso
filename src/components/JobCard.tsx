import React from "react";

import { Chip } from "./Chip";
import moment from "moment";
import Link from "next/link";
import { JobListType } from "@/constant/jobInterface";
import _ from "lodash";

interface JobCardPropsInterface {
    key: number,
    item: JobListType
}

export const JobCard = ({ key, item }: JobCardPropsInterface) => {
    return <div className="job-item " key={key}>
        <div className="top-section flex items-center justify-between">
            <div className="item">
                <img className="company-logo" src="/logo_dans.png" alt="company_logo" />
            </div>
            <div className="item">
                <div className="job-title text-2xl font-semibold mb-3 cut-text type-200-px">
                    {_.get(item, 'title', '')}
                </div>
                <div className="company text-base text-color-grey cut-text type-200-px">
                    {_.get(item, 'company', '')}
                </div>
            </div>
            <div className="item location flex items-center gap-3">
                <img className="icon-location" src="/location.png" alt="location" />
                <span className="text-base text-color-grey">{_.get(item, 'location', '')}</span>
            </div>
            <div className="item">
                <Chip title={_.get(item, 'type', '')} />
            </div>
        </div>
        <div className="bottom-section flex items-center justify-between">
            <div className="created mb-3 mt-3">
                {moment(_.get(item, 'created_at', new Date())).format('MMMM Do YYYY, h:mm:ss a')}
            </div>
            <div className="button-detail text-base text-blue-500 cursor-pointer">
                <Link
                    href={{
                        pathname: `/job/${_.get(item, 'id', '')}`,
                    }}
                >
                    View detail {`>>`}
                </Link>
            </div>
        </div>
    </div>
}