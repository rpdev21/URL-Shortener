import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validation/login-schema.js";
import { loginApiCall } from "../../api/user-api.js";
import {useNavigate } from "react-router-dom";
export const useLogin = () => {
    const navigate = useNavigate();
    const {register ,handleSubmit , formState:{errors}} = useForm({
            resolver: zodResolver(loginSchema),
            defaultValues: {
                email: '',
                password: '',
            }
        }
    );
    const doSubmit = async (formdata) =>
    {
        console.log('Login Form Sumbitted', formdata);
        try{
        const response = await loginApiCall(formdata);
        console.log('login API Response:', response);
        if(response.data.id)
        {
            localStorage.setItem("email", response.data.email);
            navigate('/dashboard');
            alert('Login Successful');
        }
        else
        {
            alert(response.data.message);
        }
    }
    catch (error)
    {
        console.error('Error during login', error);
        alert('An error occurred during login. Please try again later.');
}
    };
    return {doSubmit , register , handleSubmit , errors} ;

}