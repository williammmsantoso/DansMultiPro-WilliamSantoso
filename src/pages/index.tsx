import { Button } from "@/components/Button";
import Input from "@/components/Input";
import { Label } from "@/components/Label";
import { Meta } from "@/components/Meta";
import { loginValidator } from "@/helpers/validator";
import { Auth } from "@/layouts/Auth";
import { Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import React from "react";
import { toast } from "react-toastify";

export default function Home() {
    const initialValues = {
        email: "",
        password: ""
    }

    const onHandleSubmit = (values: any) => {
        toast.error('Something wrong, please login with facebook or google', {
            toastId: '14',
        });
    }

    const handleLogin = (signWith: string) => {
        signIn(signWith);
    }

    return <Auth meta={<Meta title="Dans Multi Pro" description="Dans Multi Pro"/>} >
        <div className="login-container">
            <div className="login-wrapper">
                <div className="title text-2xl font-bold mb-4 text-center">
                    LOGIN
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={loginValidator}
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
                                <div className="">
                                    <div className="item mb-5">
                                        <Label>Email</Label>
                                        <Input
                                            id='email'
                                            data-testid='email'
                                            name='email'
                                            placeholder="john.doe@g.com"
                                            type="email"
                                            onChange={(e: any) => setFieldValue('email', e.target.value)}
                                            isError={errors && errors.email ? true : false}
                                            errorMessage={errors && errors.email}
                                        />
                                    </div>
                                    <div className="item mb-8">
                                        <Label>Password</Label>
                                        <Input
                                            id='password'
                                            data-testid='password'
                                            name='password'
                                            placeholder="password"
                                            type="password"
                                            onChange={(e: any) => setFieldValue('password', e.target.value)}
                                            isError={errors && errors.password ? true : false}
                                            errorMessage={errors && errors.password}
                                        />
                                    </div>
                                    <div className="item mb-3">
                                        <Button
                                            id='button-submit-search'
                                            classNameWrapper="grid"
                                            type="submit"
                                            disabled={
                                                isSubmitting ||
                                                Object.keys(errors).length > 0 ||
                                                Object.keys(values).length < 1
                                            }
                                        >
                                            Sign In
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </>
                    }}
                </Formik>
                <div className="sign-up-wrapper text-center">
                    <div className="text-base mb-3">Or sign up with</div>
                    <div className="flex items-center justify-center gap-4">
                        <img
                            className="cursor-pointer"
                            src="/google-icon.png"
                            alt="google-icon"
                            onClick={() => handleLogin('google')}
                        />
                        <img
                            className="cursor-pointer"
                            src="/facebook-icon.png"
                            alt="facebook-icon"
                            onClick={() => handleLogin('facebook')}
                        />
                    </div>
                </div>
            </div>
        </div>
    </Auth>
}