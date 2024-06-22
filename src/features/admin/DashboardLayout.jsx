import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import useUsers from "./useUsers";

function DashboardLayout() {
  const { isLoading: proposalIsLoading, proposals } = useProposals();
  const { isLoading: projectsIsLoading, projects } = useProjects();
  const { isLoading: usersIsLoading, users } = useUsers();

  
  if (proposalIsLoading || projectsIsLoading || usersIsLoading)
    return <Loading />;
  
  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        users={users.length}
        projects={projects.length}
      />
    </div>
  );
}

export default DashboardLayout;
