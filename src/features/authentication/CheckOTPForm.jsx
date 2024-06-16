import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CheckOTPForm({ phoneNumber }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        // push to panel based on role
        // if(user.roel==="owner") navigate("/owner");
        // if(user.roel==="freelancer") navigate("/freelancer");
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <form className="space-y-10" oonSubmit={checkOTPHandler}>
        <p className="font-bold text-secondary-800">کد تائید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            with: "2.5rem",
            padding: "0.5rem 1rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
        />
        <button className="btn btn--primary w-full">تائید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
