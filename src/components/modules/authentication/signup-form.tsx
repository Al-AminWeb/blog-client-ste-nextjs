"use client"

import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {useForm} from "@tanstack/react-form";
import {FieldGroup, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";

export function SignupForm({...props}: React.ComponentProps<typeof Card>) {

    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: ({value}) => {
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
                                return (
                                    <>
                                        <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                                        <Input
                                            type="text"
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                        />
                                    </>
                                );
                            }}
                        />


                        <form.Field
                            name="email"
                            children={(field) => {
                                return (
                                    <>
                                        <FieldLabel htmlFor={field.name}>email</FieldLabel>
                                        <Input
                                            type="email"
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                        />
                                    </>
                                );
                            }}
                        />
                    </FieldGroup>


                    <form.Field
                        name="password"
                        children={(field) => {
                            return (
                                <>
                                    <FieldLabel htmlFor={field.name}>password</FieldLabel>
                                    <Input
                                        type="password"
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                </>
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
