import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validation/register-schema";
import { registerApiCall } from "../../api/user-api.js";
import {useNavigate } from "react-router-dom";
export const useRegister = () => {
     const navigate = useNavigate();
    const {register ,handleSubmit , formState:{errors}} = useForm({
            resolver: zodResolver(registerSchema),
            defaultValues: {
                email: '',
                password: '',
                name: '',
            }
        }
    );
    const doSubmit = async (formdata) =>
    {
        console.log('Register Form Sumbitted', formdata);
        try{
        const response = await registerApiCall(formdata);
        console.log('Registration API Response:', response);
        if(response.data.id)
        {
            navigate('/login');
            alert('Registration Successful');
        }
        else
        {
            alert('Registration Failed');
        }
    }
    catch (error)
    {
        console.error('Error during registration', error);
        alert('An error occurred during registration. Please try again later.');
}
    };
    return {doSubmit , register , handleSubmit , errors} ;

}