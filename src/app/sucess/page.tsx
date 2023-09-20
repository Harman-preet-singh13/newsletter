"use client";

import React, { useEffect, useState } from "react";
import tickIcon from "../../image/icon-success.svg"
import { useRouter } from "next/navigation";

export default function Sucess() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    function getQueryParam(paramName: string) {
      const searchParams = new URLSearchParams(window.location.search);
      return searchParams.get(paramName);
    }

    const extractedEmail = getQueryParam("mail");
    setEmail(extractedEmail || "");

    console.log("Email:", extractedEmail);
  }, []); // Empty dependency array to run once on component mount

  const router = useRouter()

  function clickHandler() {
    router.push(`/`);

  }
  return (
    <>
      <section className=" container mx-auto">
        <main
          className="h-screen main-container flex flex-col justify-end gap-64
        Absolute-Center-sucess is-Responsive-sucess md:gap-5 md:justify-center
        "
        >
          <header className="sucess-header place-self-end">
            <img className="w-16" src={tickIcon.src} alt="tick icon" />
            <h1 className="newsletter-title text-4xl">
              Thanks for Subscribing!
            </h1>
            <p>
              A confirmation email has been sent to
              <span className="sucess-email-bold"> {email}</span>. Please open
              it and click the button inside to confirm your subscription
            </p>
          </header>
          <button
          onClick={clickHandler} 
          className="py-2 px-2">
            Dismiss message
          </button>
        </main>
      </section>
    </>
  );
}
