import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}><select {...register("Title", { required: true })}>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
        </select>
            <input type="text" placeholder="First name" {...register("Firstname", { required: true, maxLength: 80 })} /> 
            {errors.Firstname && <span>First name Error</span>}<br />
            <input type="text" placeholder="Last name" {...register("Lastname", { required: true, maxLength: 100 })} />
            {errors.Lastname && <span>Lastname  Error</span>}<br />
            <input type="tel" placeholder="Mobile number" {...register("Mobilenumber", { required: true, minLength: 6, maxLength: 12 })} />
            {errors.Mobilenumber && <span>Mobilenumber  Error</span>}<br />
            {/* <input {...register("Developer", { required: true })} type="radio" value="Yes" /><br />
            <input {...register("Developer", { required: true })} type="radio" value="No" /><br /> */}
            <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /><br />
            {errors.Email && <span>Email Error</span>}

            <br />
            <input type="submit" />
        </form>
    );
}