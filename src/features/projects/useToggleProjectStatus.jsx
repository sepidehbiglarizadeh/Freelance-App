import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatus } from "../../services/projectService";
import { toast } from "react-hot-toast";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: toggleStatus } = useMutation({
    mutationFn: toggleProjectStatus,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, toggleStatus };
}
