import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import Users from "../features/Authentication/Users";
  

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setFormError("");
        navigate("/admin/administrationPanel");
      } else {
        const errorData = await response.json();
        setFormError(errorData.message);
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      setFormError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 h-screen w-screen justify-center absolute left-[32%] border p-2 bg-gray-200"
      >
        <div className="flex flex-col justify-center text-center text-2xl mb-20">
          ورود به پنل مدیریت
        </div>
        <div>
          <TextInput
            id="username"
            type="text"
            placeholder="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <TextInput
            id="password1"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Checkbox id="remember" />
          <Label htmlFor="remember">مرا به خاطر بسپار</Label>
        </div>
        <Button className="mt-6 w-full" gradientMonochrome="teal" type="submit">
          ورود
        </Button>
        {formError && <div className="text-red-500">{formError}</div>}
        <div className="text-lg underline p-2 flex justify-center">
          <Link to="/">بازگشت به سایت</Link>
        </div>
      </form>
      <Users />
    </>
  );
}
