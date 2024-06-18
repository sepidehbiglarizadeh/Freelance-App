import { useState } from "react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const enabled = project.status === "OPEN" ? true : false;
  const { isUpdating, toggleStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = project.status === "OPEN" ? "CLOSE" : "OPEN";
    toggleStatus({
      id: project._id,
      data: { status: newStatus },
    });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} with={50} />
      ) : (
        <Toggle
          enabled={enabled}
          onChange={toggleHandler}
          label={project.status === "OPEN" ? "باز" : "بسته"}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
