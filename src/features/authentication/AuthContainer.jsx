import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPFOrm from "./CheckOTPForm";
import { getOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const [step, setStep] = useState(2);
  const { handleSubmit, register, getValues } = useForm();
  const { user } = useUser();
  const navigate = useNavigate();

  const {
    isPending: isSendingOTP,
    error,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const sendOTPHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
      setStep(2);
    } catch (error) {
      setStep(2);
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            onSubmit={handleSubmit(sendOTPHandler)}
            isSendingOTP={isSendingOTP}
            register={register}
            // onSubmit={sendOTPHandler}
            // phoneNumber={phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPFOrm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep(1)}
            onResendOTP={sendOTPHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
