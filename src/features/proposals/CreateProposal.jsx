import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";
import toast from "react-hot-toast";

function CreateProposal({ onClose, projectId }) {
  const { isCreating, createProposal } = useCreateProposal();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newProposal = {
      ...data,
      projectId,
    };

    createProposal(newProposal, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "طول توضیحات باید بیشتر از 10 کارکتر باشد",
            },
          }}
          errors={errors}
        />
        <TextField
          label="قیمت"
          name="price"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "قیمت ضروری است",
          }}
          errors={errors}
        />
        <TextField
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
          errors={errors}
        />
        <div className="!mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تائید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
