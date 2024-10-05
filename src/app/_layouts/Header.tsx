import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const navList = [
  { name: "Home", path: "/blog" },
  { name: "About", path: "/about" },
];

export default function Header() {
  return (
    <nav className="flex w-full text-3xl px-[5%] py-10 justify-between mb-10">
      <ul className="flex justify-center gap-8">
        {navList.map((item, idx) => {
          return (
            <li key={idx}>
              <Link href={item.path}>
                <h1>{item.name}</h1>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center items-center">
        <Link href="https://github.com/lily-choi" target="_blank">
          <FaGithub />
        </Link>
      </div>
    </nav>
  );
}
