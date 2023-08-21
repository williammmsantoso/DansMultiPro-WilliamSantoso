import * as Yup from 'yup';

export const searchJobValidator = Yup.object().shape({
    description: Yup.string()
        .required('Valid email required'),
    location: Yup.string()
        .required('Password is required!')
});

export const loginValidator = Yup.object().shape({
    email: Yup.string()
        .required('Valid email required')
        .email('Valid email required'),
    password: Yup.string()
        .required('Password is required!')
        .min(8, 'Must at least 8 character'),
});