import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

export default function useUser() {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
    // refetchOnWindowFocus: true, // baes mishe ke zamani ke karbar mire rooye ye tabe dg va dobare bar migarde refetch kone
  });
}
