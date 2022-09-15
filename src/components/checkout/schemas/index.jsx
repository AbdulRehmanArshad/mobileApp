import * as Yup from "yup"

export const CheckoutSchema = Yup.object({
    email: Yup.string().email().required("Please enter email"),
    fname: Yup.string().min(2).max(25).required("Please enter your firstname"),
    lname: Yup.string().min(2).max(25).required("Please enter your lastname"),
    address: Yup.string().required("Please enter your Address"),
    city: Yup.string().required("Please enter your City"),
    country: Yup.string().required("Please enter your Country"),
    state: Yup.string().required("Please enter your State"),
    postalcode: Yup.string().required("Please enter your PostalCode"),
    phonenumber: Yup.string().max(12).required("Please enter your Number"),

})