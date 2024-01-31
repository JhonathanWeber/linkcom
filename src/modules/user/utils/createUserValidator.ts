import * as yup from "yup";

export const createUserValidator = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    password: yup.string().required('Password is required'),
})

export const updateUserValidator = yup.object({
    name: yup.string(),
    email: yup.string().email('Ivalid email format'),
    password: yup.string()
})