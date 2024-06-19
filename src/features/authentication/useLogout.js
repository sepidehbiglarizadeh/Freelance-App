import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUserApi } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function useLogoutUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutUserApi,
    onSuccess: () => {
      queryClient.removeQueries(); // removeQueries ro farakhani kardim ta kole query ha va cash haye browser ro remove bokone
      navigate("/auth", { replace: true }); // vaghti replace ro true mizarim dg ghabeliyate bargasht be safeheye ghabl vojod nadare
    },
  });

  return { isPending, logout };
}
