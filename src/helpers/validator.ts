import * as Yup from 'yup';

export const searchJobValidator = Yup.object().shape({
    description: Yup.string()
        .required('Valid email required'),
    location: Yup.string()
        .required('Password is required!')
});