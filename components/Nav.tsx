"use client"
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="lg:fixed absolute m-[3.57vw] top-0 right-0">
      <div className="flex lg:flex-col md:flex-row lg:gap-0 gap-8 p-4 items-start">
        <a
          className={
            "text-black relative tracking-wider [transition:all_0.5s_linear] py-4" +
            (pathname === "/"
              ? " text-opacity-100 font-[500] before:bg-black before:w-full before:h-[2px] before:absolute before:bottom-1 before:left-0 cursor-context-menu"
              : " text-opacity-30 hover:text-opacity-70")
          }
          href="/"
        >
          Blog
        </a>
        <a
          className={
            "text-black relative tracking-wider [transition:all_0.5s_linear] py-4" +
            (pathname === "/about/"
              ? " text-opacity-100 font-[500] before:bg-black before:w-full before:h-[2px] before:absolute before:bottom-1 before:left-0"
              : " text-opacity-30 hover:text-opacity-70")
          }
          href="/about"
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Nav
