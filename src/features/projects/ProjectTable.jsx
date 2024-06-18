import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { projects, isLoading } = useOwnerProjects();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resourceName="پروژه ای" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژ</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین پروژ</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
