import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar";
import useUser from "../features/authentication/useUser";

function Home() {
  const { isLoading, user } = useUser();

  return (
    <div className="h-screen bg-secondary-50">
      <Navbar user={user} isLoading={isLoading} />

      <div className="container xl:max-w-screen-xl flex items-center justify-between text-secondary-600">
        <div className="flex flex-col items-start gap-y-6 md:gap-y-10">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-primary-900 font-bold text-2xl md:text-3xl">
              آژانس خلاقیت فریلندرز
            </h2>
            <p className="font-bold text-base md:text-lg">
              جمعی از فریلنسرها و متخصصین
            </p>
          </div>
          <p className="text-sm md:text-base font-normal md:w-[500px] xl:w-[856px]">
            به سایت ما خوش آمدید! جایی که تخصص و پروژه‌ها به هم می‌رسند. اگر به
            دنبال فریلنسرهای حرفه‌ای برای اجرای پروژه‌های خود هستید، یا به عنوان
            فریلنسر می‌خواهید توانایی‌های خود را به نمایش بگذارید و در پروژه‌های
            جذاب شرکت کنید، اینجا بهترین مکان برای شروع است. با چند کلیک ساده،
            به شبکه‌ای از مهارت‌ها و فرصت‌ها دسترسی پیدا کنید و همکاری‌های موفق
            و درآمدزایی را تجربه کنید.
          </p>
          <Link
            to={
              user
                ? user.role === "ADMIN"
                  ? "/admin/dashboard"
                  : user.roel === "FREELANCER"
                  ? "/admin/freelancer"
                  : user.roel === "OWNER"
                  ? "/admin/owner"
                  : "/"
                : "/auth"
            }
          >
            <button className="btn btn--primary">ورود/داشبورد</button>
          </Link>
        </div>
        <div className="hidden md:block">
          <img src="/aboved-img.png" alt="girl" />
        </div>
      </div>
    </div>
  );
}

export default Home;
