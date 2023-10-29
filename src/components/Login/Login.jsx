import { useForm } from "react-hook-form";
import { Button, ErrorSpan, Form, Icons, IconsContainer, Input, Lebel, LoginBg } from "./Login.styled";

import { FaFacebookF, FaGoogle } from 'react-icons/fa6';
import Swal from "sweetalert2";

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = data => {
        console.log(data)
        Swal.fire({
            icon: 'success',
            title: 'Welcome',
            text: `${data.email}`,
        })
        reset()
    }

    return (
        <LoginBg>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1>Welcome Back</h1>
                    <p>Please login</p>
                </div>
                <div>
                    <Lebel>Your Email</Lebel>
                    <Input {...register('email', { required: true })} type="email" placeholder="Enter your Email"></Input>
                    {errors.email && <ErrorSpan>Your email is required</ErrorSpan>}
                </div>
                <div>
                    <Lebel>Your Password</Lebel>
                    <Input {...register('password', { required: true })} type="password" placeholder="Enter your password"></Input>
                    {errors.password && <ErrorSpan>Your Password is required</ErrorSpan>}
                </div>
                <Button>Login</Button>
                <div>
                    <p>or login with</p>
                    <IconsContainer>
                        <Icons color='#4285F4'><FaGoogle /></Icons>
                        <Icons color='#4267B2'><FaFacebookF /></Icons>
                    </IconsContainer>
                    <p>Don't have an account? Register</p>
                </div>
            </Form>
        </LoginBg>
    );
};

export default Login;