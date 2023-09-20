"use client";

import React, {
  FormEvent,
  useEffect,
  useState,
} from "react";
import mobileImg from "../image/illustration-sign-up-mobile.svg";
import desktopImg from "../image/illustration-sign-up-desktop.svg";
import { useRouter } from "next/navigation";



export default function NewsLetter() {
  const router = useRouter();
 
const windowWidth = useWindowWidth()
  const imageUrl = windowWidth >= 650 ? desktopImg : mobileImg;

  const [email, setEmail] = useState("");
  const [vaildEmail, setVaildEmail] = useState(true);


  function submitHandler(e: FormEvent) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      console.log("invaild email");
      setVaildEmail(false);
    } else {
      
      setVaildEmail(true);

      router.push(`/sucess?mail=${email}`);
    }
  }

  return (
    <>
      <div className="section-container container mx-auto ">
        <main
          className="h-screen main-container 
        Absolute-Center is-Responsive
        flex flex-col-reverse md:flex-row
        md:items-center md:gap-5
        "
        >
          <section className=" main-content">
            <header className="newsletter-header">
              <h1 className="newsletter-title  text-4xl">Stay updated!</h1>
              <p className="newsletter-para">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="newsletter-list">
                <li>Product discovery and bulding what matters</li>
                <li>Measusring to ensure updates are a sucess</li>
                <li>And much more!</li>
              </ul>
            </header>

            <form
              onSubmit={submitHandler}
              className="newsletter-form flex flex-col"
            >
              <div className="flex justify-between">
                <label className="email-label text-sm">
                  Email address
                </label>
                <label
                  className={`text-sm ${vaildEmail ? "hidden" : "error-label"}`}
                >
                  Vaild email required
                </label>
              </div>

              <input
                className={`p-2 px-2  ${vaildEmail ? "" : "error-input"}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@company.com"
                required
              />
              <button className="md:mt-4 md:p-4">
                Subscribe to montly newsletter
              </button>
            </form>
          </section>
          <section className="">
            {/* <img src={screenWidth < 768 ? img1.src : img2.src} */}
            <img
              src={imageUrl.src}
              
              className="newsletter-img"
              alt="newsletter image"
            />
          </section>
        </main>
      </div>
    </>
  );
}



const useWindowWidth = () => {

  const [windowWidth, setWindowWidth ] = useState(0);

  useEffect(() => {

    setWindowWidth(window.innerWidth);
    
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);

  return windowWidth;
};


