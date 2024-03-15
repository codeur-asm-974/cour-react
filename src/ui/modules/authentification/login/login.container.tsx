import { LoginView } from "./login.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFielsType } from "@/types/form";

import { useToggle } from "@/hooks/use.toggle";
import { firebaseSingninUser } from "@/api/authentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFielsType>();
  const handleSiginUser = async ({ email, password }: LoginFormFielsType) => {
    const { error } = await firebaseSingninUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvenue sur la platforme");
    setIsLoading(false);
    reset();
    router.push("/mon-espace");
  };
  const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manual,",
        message: "ton mot de passe est trop court",
      });
      setIsLoading(false);
      return;
    }
    handleSiginUser(formData);
  };
  return (
    <LoginView form={{ errors, register, handleSubmit, onSubmit, isLoading }} />
  );
};
