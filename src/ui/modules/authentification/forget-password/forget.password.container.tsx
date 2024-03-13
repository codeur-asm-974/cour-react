import { ForgetPasswordView } from "./forget-Pasword.view";

import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFielsType } from "@/types/form";
import { useToggle } from "@/hooks/use.toggle";
import { sendEmailToResetPassword } from "@/api/authentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const ForgetPasswordContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle({
    initial: false,
  });

  const {
    handleSubmit,

    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ForgetPasswordFormFielsType>();

  const handleResetPassword = async ({
    email,
  }: ForgetPasswordFormFielsType) => {
    const { error } = await sendEmailToResetPassword(email);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success(`un e-mail vous a été envoyer a l'adresse ${email}`);
    setIsLoading(false);
    reset();
    router.push("/connexion");
  };

  const onSubmit: SubmitHandler<ForgetPasswordFormFielsType> = async (
    formData
  ) => {
    setIsLoading(true);
    handleResetPassword(formData);
  };

  return (
    <ForgetPasswordView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
};
