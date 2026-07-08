import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import SectionWrapper from "../common/SectionWrapper";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SectionWrapper>
      <section id="contact" className="py-28 bg-slate-950/20">
        <Container>
          <SectionTitle
            subtitle="Contact"
            title="Let's Connect"
          />

          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Have an internship opportunity, project idea, or just want to say
            hello? I'd love to hear from you.
          </p>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            
            {/* Form Block */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900/50
                  px-5
                  py-4
                  text-slate-200
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-slate-500
                  focus:border-blue-500/80
                  focus:bg-slate-900
                  focus:ring-2
                  focus:ring-blue-500/20
                "
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900/50
                  px-5
                  py-4
                  text-slate-200
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-slate-500
                  focus:border-blue-500/80
                  focus:bg-slate-900
                  focus:ring-2
                  focus:ring-blue-500/20
                "
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900/50
                  px-5
                  py-4
                  text-slate-200
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-slate-500
                  focus:border-blue-500/80
                  focus:bg-slate-900
                  focus:ring-2
                  focus:ring-blue-500/20
                "
              />

              <Button>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {/* Right Info & Social Connections Block */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
                Let's Build Something Great Together
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                I'm currently looking for internship opportunities,
                collaborating on exciting projects, and connecting with
                developers who love building impactful software.
              </p>

              {/* Enhanced Interactive Social Links */}
              <div className="mt-10 space-y-4">
                <a
                  href="https://github.com/srikesav09"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-xl
                    border
                    border-slate-800/80
                    bg-slate-900/40
                    p-4
                    text-slate-300
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-blue-500/40
                    hover:bg-slate-900
                    hover:text-blue-400
                    hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                  "
                >
                  <FaGithub className="text-2xl transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/srikesav-m-53446b324"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-xl
                    border
                    border-slate-800/80
                    bg-slate-900/40
                    p-4
                    text-slate-300
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-blue-500/40
                    hover:bg-slate-900
                    hover:text-blue-400
                    hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                  "
                >
                  <FaLinkedin className="text-2xl transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a
                  href="/_RESUME_SRIKESAV.pdf"
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-xl
                    border
                    border-slate-800/80
                    bg-slate-900/40
                    p-4
                    text-slate-300
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-emerald-500/40
                    hover:bg-slate-900
                    hover:text-emerald-400
                    hover:shadow-[0_4px_20px_rgba(16,185,129,0.1)]
                  "
                >
                  <FaFileAlt className="text-2xl transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium">Download Resume</span>
                </a>
              </div>

              {/* Status Indicator */}
              <div
                className="
                  mt-10
                  rounded-xl
                  border
                  border-green-500/20
                  bg-green-500/5
                  p-5
                  backdrop-blur-sm
                "
              >
                <p className="font-medium text-green-400 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Available for Internships
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Open to Software Engineering, Full Stack Development.
                </p>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </SectionWrapper>
  );
}