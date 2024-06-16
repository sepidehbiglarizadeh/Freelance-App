import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPFOrm from "./CheckOTPForm";
import { getOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function AuthContainer() {
  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    isPending: isSendingOTP,
    error,
    data,
    mutateAsync,
  } = useMutation({
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

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onSubmit={sendOTPHandler}
            isSendingOTP={isSendingOTP}
          />
        );
      case 2:
        return (
          <CheckOTPFOrm
            phoneNumber={phoneNumber}
            onBack={() => setStep(1)}
            onResendOTP={sendOTPHandler}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
