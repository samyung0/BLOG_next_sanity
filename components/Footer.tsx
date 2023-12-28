import Image from "next/image";
import MailOutline from "@/public/svg/mail-outline.svg";
import LinkedIn from "@/public/svg/logo-linkedin.svg";
const Footer = () => {
  const date = new Date().toDateString().slice(4);
  return (
    <footer className="py-[max(10vw,150px)] bg-primary-gray text-background-gray flex flex-col justify-center items-center">
      <div className="pb-6">
        <ul className="flex gap-4">
          <li>
            <a href="mailto:yungchinpang999@gmail.com">
              <Image className={"w-6 h-6 invert"} src={MailOutline} alt="email" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/sam-yung-14ba7b1a4/">
              <Image className={"w-6 h-6 invert"} src={LinkedIn} alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <div className=" tracking-wide leading-8">{date}</div>
    </footer>
  );
};

export default Footer;
