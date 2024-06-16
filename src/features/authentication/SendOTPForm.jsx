import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

function SendOTPForm({ setStep, phoneNumber, onChange }) {
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={sendOTPHandler}>
        <TextField
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
          label="شماره موبایل"
        />
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تائید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;

// ? react-query:
// 1- useQuery => get
// 2- useMutation => post ,put , delete
