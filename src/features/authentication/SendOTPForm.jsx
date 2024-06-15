import { useState } from "react";
import TextField from "../../ui/TextField";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendOTPHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={sendOTPHandler}>
        <TextField
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          label="شماره موبایل"
        />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تائید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
