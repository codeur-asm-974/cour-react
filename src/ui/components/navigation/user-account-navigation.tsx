import { firebaseLogoutUser } from "@/api/authentification";
import { Box } from "@/ui/desin-system/box/box";
import { Button } from "@/ui/desin-system/button/button";
import { Typography } from "@/ui/desin-system/typography/typography";
import { toast } from "react-toastify";
import { ActivLink } from "./activLink";

export const UserAccountNavigation = () => {
  const handleLogoutUser = async () => {
    const { error } = await firebaseLogoutUser();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("A bientot");
  };
  return (
    <Box className="flex flex-col p-8 m-4 gap-7">
      <div className="flex flex-col  gap-3">
        <Typography variant="caption2" weight="medium">
          <ActivLink href="/mon-espace">Mon compte</ActivLink>
        </Typography>
        <Typography variant="caption2" weight="medium">
          <ActivLink href="/mon-compte/mes-projets">Mes projets</ActivLink>
        </Typography>
      </div>

      <Button action={handleLogoutUser} variant="danger">
        Déconexion
      </Button>
    </Box>
  );
};
