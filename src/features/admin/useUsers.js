import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../../services/authService";

export default function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUserApi,
  });

  const { users } = data || {};
  return { isLoading, users };
}
