import React from "react";
import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import useProjects from "../../../hooks/useProjects";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resourceName="پروژه ای یافت نشد" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژ</th>
        <th>بودجه</th>
        <th>ددلاین پروژ</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
