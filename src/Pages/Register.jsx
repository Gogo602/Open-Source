import { RegisterForm } from "@/components/Auth/Register-form";
import React from "react";

const Register = () => {
  return (
    <div className='flex min-h-svh w-full md:mx-auto items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-[450px]'>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
