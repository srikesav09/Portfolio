import {FaGithub, FaLinkedin,FaEnvelope } from "react-icons/fa";
import {motion} from "framer-motion";
import Button from "../common/Button";
import Container from "../common/Container";
import ProfileCard from "./ProfileCard";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import SectionWrapper from "../common/SectionWrapper";

export default function Hero() {

  return (
    <SectionWrapper>
      <section
        id="home"
        className="min-h-screen flex items-center pt-20 bg-slate-950"
      >
        <Container className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{opacity: 0, x: -40}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8 }}
        >
          <p className=" text-lg mb-2 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-linear-to-r from-blue-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Srikesav M
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mt-4">
              Aspiring Software Engineer
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              I enjoy building scalable full-stack applications and solving real-world problems.
              Currently pursuing B.Tech in Information Technology at PSG College of Technology,
              while strengthening my skills in React, Node.js, MongoDB, Data Structures, and AWS.
              
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Button href={"#projects"}>
                View My Work
                <FaArrowRight aria-hidden="true"/>
              </Button>

              <Button variant="outline" href={"./resume.pdf"}>
                  <FaDownload aria-label="Download" aria-hidden="true"/>
                  Download Resume
              </Button>
            </motion.div>

            <div className="flex gap-6 mt-10 text-2xl">
              <a
                href="https://github.com/srikesav09"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900 hover:border-blue-500 hover:bg-slate-800 transition-all">
                <FaGithub aria-label="GitHub" aria-hidden="true"/>
              </a>

              <a
                href="https://www.linkedin.com/in/srikesav-m-53446b324/"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900 hover:border-blue-500 hover:bg-slate-800 transition-all"
              >
                <FaLinkedin aria-label="Linkedin" aria-hidden="true"/>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=srikesav77@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900 hover:border-blue-500 hover:bg-slate-800 transition-all"
              >
                <FaEnvelope aria-label="Email" aria-hidden="true"/>
              </a>
            </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <ProfileCard />
          </div> 
        </motion.div>
        </Container>
      </section>
    </SectionWrapper>
  );
}