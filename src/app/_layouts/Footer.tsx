import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-black justify-center items-center h-[300px] mt-20">
      <div className="flex gap-8">
        <Link href="https://github.com/lily-choi" target="_blank">
          <FaGithub color="white" size="30" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/hyeji-choi-att1667"
          target="_blank"
        >
          <FaLinkedin color="white" size="30" />
        </Link>
      </div>
      <p className="text-white mt-5 text-xl">
        © 2024. Hyeji Choi all rights reserved.
      </p>
    </footer>
  );
}
