import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-brand-primary pt-10 px-5 flex flex-col justify-between">
      <div className="flex flex-col gap-10 pb-10 lg:flex-row lg:justify-between">
        {/* E-wallet Section */}
        <section className="flex flex-col items-center lg:w-1/3  gap-5">
          <div className="flex w-full items-center gap-4">
            <BsWallet2 className="text-white" />
            <h1 className="text-3xl text-white">E-Wallet</h1>
          </div>

          <p className="text-white text-xl font-light">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
        </section>

        {/* Get In Touch Section */}
        <section className="flex flex-col gap-5">
          <h1 className="text-left text-2xl text-white">GET IN TOUCH</h1>
          {/* Telephone */}
          <div className="flex items-center gap-5">
            <MdOutlinePhone className="text-white" />
            <h3 className="text-lg  text-white">+62 5637 8882 9901</h3>
          </div>
          {/* Email */}
          <div className="flex items-center  gap-5">
            <CiMail className="text-white" />
            <h3 className="text-lg  text-white">contact@zwallet.com</h3>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="flex flex-col gap-5">
          <h1 className="text-left text-2xl text-white">SOCIAL MEDIA</h1>
          <div className="flex gap-5">
            <FaTwitter className="bg-white w-10 h-10 rounded-[50%] p-2" />
            <FaFacebookF className="bg-white w-10 h-10 rounded-[50%]  p-2" />
            <FaInstagram className="bg-white w-10 h-10 rounded-[50%]  p-2" />
            <FaGithub className="bg-white w-10 h-10 rounded-[50%]  p-2" />
          </div>
        </section>

        {/* Newslatter */}
        <form className="flex items-center flex-col lg:w-1/4 gap-5">
          <h1 className="text-left text-2xl text-white">NEWSLETTER</h1>
          <div className="relative w-full h-full flex items-center ">
            <CiMail className="absolute left-3  text-gray-400" />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email "
              className="pl-10 bg-white w-full p-4 rounded-xl "
            />
          </div>
          <button className="w-full bg-white p-3 rounded-xl text-brand-secondary text-xl cursor-pointer">
            Subscribe
          </button>
        </form>
      </div>
      <hr className="text-white" />
      <div className="text-center py-5 text-white">
        <h3>© Copyright 2022, All Rights Reserved by ClarityUI</h3>
      </div>
    </footer>
  );
};

export default Footer;
