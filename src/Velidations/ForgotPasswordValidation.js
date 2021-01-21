import * as yup from 'yup'

export const ForgotValidationSchema =yup.object().shape({
    phone:yup.string().required("Phone number is required"),
   
})