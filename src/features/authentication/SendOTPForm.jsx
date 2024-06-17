import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit, isSendingOTP, register }) {
  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          name="phoneNumber"
          label="شماره موبایل"
          register={register}
        />
        <div>
          {isSendingOTP ? (
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
