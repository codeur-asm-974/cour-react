import { FormsType } from "@/types/form";
import { Input } from "@/ui/desin-system/forms/input";
import { Textarea } from "@/ui/desin-system/forms/textarea";

interface Props {
  form: FormsType;
}

export const ProfileStepForm = ({ form }: Props) => {
  const { register, errors, isLoading } = form;

  return (
    <form className="w-full max-w-md space-y-4">
      <Input
        label="Nom d'utlisateur"
        isLoading={isLoading}
        placeholder="john Do"
        type="text"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner un pseudo"
        id="displayName"
      />
      <Input
        label="Expertise"
        isLoading={isLoading}
        placeholder="Développeur front-end "
        type="text"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ton expertise"
        id="expertise"
      />
      <Textarea
        label="Biographie"
        isLoading={isLoading}
        placeholder="Dite votre parcour "
        rows={5}
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ce champ"
        id="biography"
        required={false}
      />
    </form>
  );
};
