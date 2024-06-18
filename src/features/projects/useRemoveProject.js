import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClient = useQueryClient(); // yek custom hook ast ke shamele hameye telate query haye m ast

  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      }); // dar inja darim migim ke in query haro na motabar bokon yani dobare darkhast befrest va data haro update kon ke datahaye update shode be karbar nashond dade beshe
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { removeProject, isDeleting };
}
