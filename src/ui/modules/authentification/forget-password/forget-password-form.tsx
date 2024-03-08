import { FormsType } from "@/types/form";
import { Button } from "@/ui/desin-system/button/button";
import { Input } from "@/ui/desin-system/forms/input";

interface Props {
  form: FormsType;
}

export const ForgetPasswordForm = ({ form }: Props) => {
  const { onSubmit, errors, isLoading, register, handleSubmit } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        placeholder="johndoe@gmail.com"
        type="email"
        register={register}
        errors={errors}
        errorMsg="tu dois renseigner ce champs"
        id="email"
      />

      <Button isLoading={isLoading} type="submit" fullWith>
        Envoyer
      </Button>
    </form>
  );
};
