import { useState } from "react";
import TextField from "../../ui/TextField";

function CreateProjectForm() {
  const [title, setTitle] = useState("");
  // React-Hook-Form : 1- managing state, 2-submit form, 3- validation

  return (
    <form className="">
      <TextField
        label="عنوان پروژه"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default CreateProjectForm;
