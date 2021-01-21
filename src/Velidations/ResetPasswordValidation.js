import * as yup from "yup";

const atleastOneDigitRegex = /(?=.*[0-9])/;

export const ResetPasswordSchema = yup.object().shape({
  password: yup
    .string()
   // .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
    
     confirmPassword:yup.string()
     .oneOf([yup.ref("password"),null],"Passwords must match").required(" Confirm Password is required")
});
