"use client";
import { authClient } from "@/lib/auth-client";
import { createAuthClient } from "better-auth/client";
import { Check } from "@gravity-ui/icons";
import { toast } from "react-toastify";
import Link from "next/link";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";

export default function SignInPage() {

  const onSubmit = async (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    // const image= e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      // name,
      email,
      password,
      // image,
      callbackURL: '/'
    })

    if (error) {
      toast.error(error.message || "Login failed ❌");
    } else {
      toast.success("Login Successful ✅");
    }

    console.log({ data, error });
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: 'google'
    })
  }

  return (
    <Card className="border mx-auto w-full max-w-md py-10 mt-5 px-4">
      <h1 className="text-center text-2xl font-bold">LogIn</h1>

      <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            LogIn
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>

      {/* Register */}
      <p className="text-center mt-4 text-sm">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue-600 font-semibold hover:underline">
          Register
        </Link>
      </p>

      <p className="text-center">Or</p>

      <Button onClick={handleGoogleSignIn} variant="outline" className={'w-full'}><GrGoogle /> Sign In With Google</Button>

    </Card>
  );
}