"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link , Outlet } from "react-router-dom";
export default function LoginForm() {
  return (
    <>
      <form className="flex max-w-md flex-col gap-4 h-screen w-screen justify-center absolute left-[32%] border p-2 bg-gray-200">
        <div className="flex flex-col justify-center text-center text-2xl mb-20">
          ورود به پنل مدیریت
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="ایمیل" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="رمز" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Checkbox id="remember" />
          <Label htmlFor="remember">مرا به خاطر بسپار</Label>
        </div>
        <Link to="administrationPanel">
          <Button
            className="mt-6 w-full"
            gradientMonochrome="teal"
            type="submit"
          >
            ورود
          </Button>
        </Link>
        <div className="text-lg underline p-2 flex justify-center">
          <Link to="/">بازگشت به سایت</Link>
        </div>
        <Outlet/>
      </form>
    </>
  );
}
