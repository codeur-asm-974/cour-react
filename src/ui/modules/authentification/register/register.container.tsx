import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { FormsType, RegisterFormFielsType } from "@/types/form";
import { log } from "console";
import { useState } from "react";

export const RegisterContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,

    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFielsType>();

  const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
    setIsLoading(true);
    console.log("formdata", formData);
  };

  return (
    <RegisterView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
};
