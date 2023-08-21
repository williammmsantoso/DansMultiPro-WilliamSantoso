import React from "react";

import { Button } from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import { Label } from "@/components/Label";
import { JobParamsType } from "@/constant/jobInterface";
import { Form, Formik } from "formik";
import { searchJobValidator } from "@/helpers/validator";

interface BannerParamsInterface {
    params: JobParamsType,
    setParams: any
}

export const Banner = ({ params, setParams}: BannerParamsInterface) => {
    const onHandleSubmit = (values: JobParamsType) => {
        setParams(values);
    }

    return <div className="banner-wrapper">
        <div className="banner-item">
            <div className="banner-title text-center">
                <div className="text-base mb-5">FIND JOBS, CREATE TRACKABLE RESUMES AND ENRICH YOUR APPLICATIONS.</div>
                <div className="text-5xl mb-14">The Easiest Way to Get Your New Job</div>
            </div>
            <Formik
                initialValues={params}
                validationSchema={searchJobValidator}
                onSubmit={(values, actions) => {
                    onHandleSubmit(values);
                    actions.setSubmitting(false);
                }}
            >
                {({
                    values,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    errors,
                }) => {
                    return <>
                        <Form autoComplete="off">
                            <div className="banner-flex flex items-center justify-between">
                                <div className="item">
                                    <Label>Job Description</Label>
                                    <Input
                                        id='description'
                                        data-testid='description'
                                        name='description'
                                        placeholder="Description"
                                        type="text"
                                        onChange={(e: any) => setFieldValue('description', e.target.value)}
                                        isError={errors && errors.description ? true : false}
                                        errorMessage={errors && errors.description}
                                    />
                                </div>
                                <div className="item">
                                    <Label>Location</Label>
                                    <Input
                                        id='location'
                                        data-testid='location'
                                        name='location'
                                        placeholder="Location"
                                        type="text"
                                        onChange={(e: any) => setFieldValue('location', e.target.value)}
                                        isError={errors && errors.location ? true : false}
                                        errorMessage={errors && errors.location}
                                    />
                                </div>
                                <div className="item">
                                    <Checkbox
                                        value={values.full_time}
                                        onChange={(e: any) => setFieldValue('full_time', e.target.checked)}
                                    >
                                        Full Time Only
                                    </Checkbox>
                                </div>
                                <div className="item">
                                    <Button
                                        data-testid='button-submit-search'
                                        id='button-submit-search'
                                        classNameWrapper="grid"
                                        type="submit"
                                        disabled={
                                            isSubmitting ||
                                            Object.keys(errors).length > 0 ||
                                            Object.keys(values).length < 1
                                        }
                                    >
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </>
                }}
            </Formik>
        </div>
    </div>
}