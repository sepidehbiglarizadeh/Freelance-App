import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);

  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryObject], //dar inja vaghti queryObject ro mizarim be queryObject ham hasas mishe va harbar ke queryObject taghir bokone farakhani mishe
    queryFn: () => getProjectsApi(search),
  });

  const { projects } = data || {};
  return { isLoading, projects };
}
