"use client"

import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,

} from "@/components/ui/card"


import {useForm} from "@tanstack/react-form";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import * as z from "zod";
import {authClient} from "@/lib/auth-client";
import { toast } from "sonner";

const formScheme = z.object({
    name: z.string().min(2, {message: "Name must be at least 2 characters"}),
    email: z.email(),
    password: z.string().min(6, {message: "Password must be at least 6 characters"}),
})

export function SignupForm({...props}: React.ComponentProps<typeof Card>) {

    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
        validators: {
            onSubmit: formScheme,
        },

        onSubmit: async  ({value}) => {
            const toastId = toast.loading("creating your account...");
            try{
                const {error} = await authClient.signUp.email(value);

                if(error){
                    toast.error(error.message, {id: toastId});
                    return;
                }
                toast.success("user created successfully!", {id: toastId});
            }catch (err){
                toast.error("Something went wrong!", {id: toastId});
            }
            console.log('Form submitted with values:', value);
        }
    })

    return (
        <Card {...props}>
            <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                    Enter your information below to create your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    id="login-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        form.handleSubmit();
                    }}>


                    <FieldGroup>
                        <form.Field
                            name="name"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid;
                                return (
                                    <Field>
                                        <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                                        <Input
                                            type="text"
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                        />
                                        {isInvalid && <FieldError errors={field.state.meta.errors}/>}
                                    </Field>
                                );
                            }}
                        />


                        <form.Field
                            name="email"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field>
                                        <FieldLabel htmlFor={field.name}>email</FieldLabel>
                                        <Input
                                            type="email"
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                        />
                                        {isInvalid && <FieldError errors={field.state.meta.errors}/>}
                                    </Field>
                                );
                            }}
                        />
                    </FieldGroup>


                    <form.Field
                        name="password"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid
                            return (
                                <Field>
                                    <FieldLabel htmlFor={field.name}>password</FieldLabel>
                                    <Input
                                        type="password"
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    {isInvalid && <FieldError errors={field.state.meta.errors}/>}
                                </Field>
                            );
                        }}
                    />


                </form>
            </CardContent>
            <CardFooter>
                <button form="login-form" className=" flex justify-end bg-white text-black border-gray-900 p-2 rounded"
                        type="submit">
                    Register
                </button>
            </CardFooter>
        </Card>
    )
}
