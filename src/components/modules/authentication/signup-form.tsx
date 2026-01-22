"use client"

import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {useForm} from "@tanstack/react-form";
import {FieldGroup} from "@/components/ui/field";

export function SignupForm({...props}: React.ComponentProps<typeof Card>) {

    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: ({value}) => {
            console.log('Form submitted with values:');
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

                    <Form.Field
                    name="name"

                    children={()=><Field></Field>}
                    />
                  </FieldGroup>













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
