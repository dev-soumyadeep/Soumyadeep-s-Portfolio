import Head from "next/head";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { useState } from "react";
import fig from "../public/figure.png";
import blc from "../public/blockchain.png";
import wd from "../public/webdev.png";
import be from "../public/be.png";
import fig1 from "../public/fig1.jpg";
import Image from "next/image";
import { SiHashnode } from "react-icons/si";
import { HiAcademicCap } from "react-icons/hi";
import { SiBookstack } from "react-icons/si";
import { FaSchool } from "react-icons/fa";
import useDownloader from "react-use-downloader";
// import resume from "../public/Soumyadeep's_resume";

const RESUME_URL = "../public/Soumyadeep's_resume.pdf";
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mtkwl8j",
        "template_iy19ibo",
        form.current,
        "fQulfzwIo07IHmgUz"
      )
      .then((res) => {
        alert("Email sent successfully, I will get back to you in 24 hours!");
      });
    setName("");
    setMail("");
    setMessage("");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>SRoy's Portfolio</title>
        <meta name="description" content="SRoy's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-black px-10 md:px-20 lg:px-40">
        <section>
          <nav className="py-10 mb-12 flex justify-between text-white">
            <h1 className="font-burtons text-xl">SRoy</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 "
                  href="/resume.pdf"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10 py-10">
            <h2 className="intro text-5xl py-2 text-teal-500 font-medium dark:text-teal-400 md:text-6xl font-MontserratAlternates">
              It's Soumyadeep
            </h2>
            <h3 className="intro text-2xl py-2 text-white md:text-3xl font-Aboreto font-semibold">
              Blockchain Learner - Full stack Developer
            </h3>

            <div className="icon text-5xl flex justify-center gap-16 py-3 text-gray-300 dark:text-gray-200 ">
              <a
                href="https://www.linkedin.com/in/soumyadeep-roy-9b335a221"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.github.com/dev-soumyadeep"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://twitter.com/Soumyadeep98741"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillTwitterCircle />
              </a>
            </div>
            <div className="img-box">
              <div className="img mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <Image
                  src={fig}
                  alt="figure3d"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl py-1 pt-7 text-white font-MontserratAlternatesExtrabold>About Me"></h2>
          <div className="container about_container">
            <div className="about_me">
              <div className="about_me-image">
                <Image alt="my-image" src={fig1} width={500} height={500} />
              </div>
            </div>
            <div className="about_content">
              <div className="about_cards">
                <article className="about_card shadow-lg shadow-teal-500 rounded-xl text-right">
                  <div className="icon-div">
                    <HiAcademicCap className="about_icon text-teal-600" />
                  </div>
                  <h4 className="text-white font-MontserratAlternatesMedium">
                    Education
                  </h4>
                  <small className="text-teal-600 font-Aboreto font-semibold">
                    Majoring in Computer Science & Business System
                  </small>
                </article>
                <article className="about_card shadow-lg shadow-teal-600 rounded-xl">
                  <div className="icon-div">
                    <SiBookstack className="about_icon text-teal-600 " />
                  </div>

                  <h4 className="text-white font-MontserratAlternatesMedium">
                    Academic Achivement
                  </h4>
                  <small className=" text-teal-600 font-Aboreto font-semibold">
                    8+ CGPA upto 3rd semester
                  </small>
                </article>
                <article className="about_card shadow-lg shadow-teal-600 rounded-xl text-center">
                  <div className="icon-div">
                    <FaSchool className="about_icon text-teal-600 " />
                  </div>

                  <h4 className="text-white font-MontserratAlternatesMedium">
                    Extracurricular Activities
                  </h4>
                  <small className="text-teal-600 font-Aboreto font-semibold">
                    Active Member of Tech clubs like ACM & Geeks United
                  </small>
                </article>
              </div>
              <div className="btn">
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 scroll-smooth "
                  href="#contactme"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2 className="text-3xl py-1 pt-7 text-white font-MontserratAlternatesExtrabold">
              Techstack
            </h2>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg shadow-teal-600/60 p-10 rounded-xl my-10  bg-grey flex-1">
              <Image src={blc} alt="blockchain" width={120} height={120} />
              <h3 className="text-lg font-medium pt-8 pb-2  font-MontserratAlternatesMedium text-teal-500">
                Blockchain Development
              </h3>
              <p className="py-2 text-white font-MontserratAlternatesMedium">
                Skilled blockchain developer with hands on experience in
                Ethereum and hyperledger fabric
              </p>
              <h4 className="py-4 text-teal-600 font-Aboreto font-semibold">
                Tools I Used
              </h4>
              <p className="text-white py-1 font-MontserratAlternatesMedium">
                Solidity
              </p>
              <p className="text-white py-1 font-MontserratAlternatesMedium">
                Smart Contract
              </p>
              <p className="text-white py-1 font-MontserratAlternatesMedium">
                Hardhat
              </p>
              <p className="text-white py-1 font-MontserratAlternatesMedium">
                Ganache
              </p>
            </div>
            <div className="text-center shadow-lg  shadow-teal-600/60 p-10 rounded-xl my-10 bg-teal flex-1">
              <Image src={wd} alt="frontend" width={120} height={120} />
              <h3 className="text-lg font-medium pt-8 pb-2  font-MontserratAlternatesMedium text-teal-500">
                Frontend Development
              </h3>
              <p className="py-2 text-white font-MontserratAlternatesMedium">
                Designing website frontend with modern tools and libraries
              </p>
              <h4 className="py-4 text-teal-600 font-Aboreto font-semibold">
                Tools I Use
              </h4>
              <p className="text-white py-1 font-MontserratAlternatesMedium">
                ReactJs
              </p>
              <p className="text-white py-1 font-MontserratAlternatesMedium">
                Tailwindcss
              </p>
              <p className="text-white py-1 font-MontserratAlternatesMedium">
                Figma
              </p>
              <p className="text-white py-1 font-MontserratAlternatesMedium">
                HTML
              </p>
            </div>
            <div className="text-center shadow-lg  shadow-teal-600/60 p-10 rounded-xl my-10  flex-1">
              <Image src={be} alt="backend" width={120} height={120} />
              <h3 className="text-lg font-MontserratAlternatesMedium font-medium pt-8 pb-2  text-teal-500 ">
                Backend Development
              </h3>
              <p className="py-2 text-white font-MontserratAlternatesMedium">
                Integrating websites with Apis and database
              </p>
              <h4 className="py-4 text-teal-600 font-Aboreto font-semibold">
                Tools I Use
              </h4>
              <p className="text-white py-1 font-MontserratAlternatesMedium">
                NodeJs
              </p>
              <p className="text-white py-1 font-MontserratAlternatesMedium">
                ExpressJs
              </p>
              <p className="text-white py-1 font-MontserratAlternatesMedium">
                MongoDB
              </p>
            </div>
          </div>
        </section>

        <section id="contactme">
          <h2 className="text-3xl py-1 text-white font-MontserratAlternatesExtrabold">
            Contact Me
          </h2>
          <main className="flex items-center justify-center  p-10">
            <div className="form-box relative">
              <form method="post" ref={form} onSubmit={sendEmail}>
                <div className="bg-grey-100 w-96  rounded-xl shadow-lg shadow-teal-600/60  my-10 p-5">
                  <div className="input-box relative">
                    <label
                      htmlFor="name"
                      className="text-white font-MontserratAlternatesEl font-bold"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mb-4 py-2 px-2 w-full outline-none bg-gray-50"
                    />
                  </div>
                  <div className="input-box relative">
                    <label
                      htmlFor="email"
                      className="text-white font-MontserratAlternatesEl font-bold"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="user_email"
                      value={email}
                      onChange={(e) => setMail(e.target.value)}
                      className="mb-4 py-2 px-2 w-full outline-none p-x1 bg-gray-50"
                    />
                  </div>
                  <div className="input-box relative">
                    <label
                      htmlFor="message"
                      className="text-white font-MontserratAlternatesEl font-bold"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mb-4 py-2 px-2 w-full outline-none bg-gray-50"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      id="submit"
                      className="bg-gradient-to-r from-cyan-900 text- to-teal-600 text-white px-4 py-2 border-none rounded-md "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </section>
      </main>
      <section>
        <div className="bg-gray-900 h-auto w-full flex md:flex-row flex-col justify-left items-start p-10">
          <div className="p-5 ">
            <ul>
              <p className="text-white font-bold text-3xl pb-6">
                Soumyadeep's <span className="text-teal-500">Portfolio</span>
              </p>
              <p className="text-white font-bold text-2xl pb-6 font-MontserratAlternatesMedium">
                Contributing in Technology that builds
                <span className="text-teal-500"> Future</span>
              </p>
              <a
                href="https://hashnode.com/@soumyadeep21"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex gap-6 pb-5 text-blue-700">
                  <SiHashnode className="text-4xl cursor-pointer hover:text-blue-600" />
                  <label className="font-Aboreto font-semibold text-white">
                    Follow Me
                    <span className="text-blue-500 font-bold"> @Hashnode </span>
                    For Exciting Technical contents
                  </label>
                </div>
              </a>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-900">
          <h1 className=" text-white font-Aboreto font-semibold">
            <span className="text-teal-500"> © SRoy</span> | ❤ Thanks for your
            Time
          </h1>
        </div>
      </section>
    </div>
  );
}
