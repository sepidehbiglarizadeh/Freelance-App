import { useState } from "react";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <form className="space-y-8">
        <div>
          <label className="mb-1" htmlFor="phoneNumber">
            شماره موبایل
          </label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="phoneNumber"
            type="text"
            className="textField__input"
          />
        </div>
        <button className="btn btn--primary w-full">
          ارسال کد تائید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
