import * as yup from 'yup'

export const OTPValidationSchema =yup.object().shape({
    OTP:yup.string().required("OTP is required"),
    
})