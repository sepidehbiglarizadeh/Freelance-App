import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from "../../services/projectService";
import { useParams } from "react-router-dom";

export default function useProject() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["project", id], //dar inja id roo gozashtim chon momkene 10 ta done project dashte bashim va query anha bayad moteghayer bashe pas id ro gozashtim ta ye vabastegi be meghdare id dashte bashe ke har bar id taghir in queryKey ham taghir bokone va fetch jadid ro anjam bede
    queryFn: () => getProjectApi(id),
    retry: false,
  });

  const { project } = data || [];
  return { isLoading, project };
}
