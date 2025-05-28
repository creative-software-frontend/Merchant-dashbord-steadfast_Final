import Link from "next/link";
import { useTranslations } from "next-intl";
const LoginBtn = () => {
  const tBtn = useTranslations("loginPage");

  return (
    <div>
      <Link href="/landing/sign-up">
        <span className="font-semibold px-2 text-[#00b795] cursor-pointer">
          {tBtn("signupLink")}
        </span>
      </Link>
    </div>
  );
};

export default LoginBtn;
