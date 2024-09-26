"use client";

import Link from "next/link";
import React, {useCallback, useState} from "react";
import contactScope from "../const/contactScope";
import Button from "./Button";
import {toast} from "react-toastify";
import contactMessages from "../const/contactMessages";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {validateEmail} from "../../utils";

function ClientForm() {
  const [loading, setLoading] = useState(false)
  const {executeRecaptcha} = useGoogleReCaptcha();
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    let message = contactMessages.unexpectedError;
    let type = 'error';
    if (executeRecaptcha) {
      const token = await executeRecaptcha();
      if (token) {
        const data = {
          scope: parseInt(event.target.scope.value),
          title: String(event.target.title.value),
          name: String(event.target.name.value),
          email: String(event.target.email.value),
          message: String(event.target.message.value),
          token
        }
        if (validateEmail(data.email)) {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          let json = await response.json()
          message = contactMessages[json.message];
          if (response.ok) {
            type = 'success';
            document.getElementById("contact-form").reset();
          }
        } else {
          message = contactMessages.emailError;
        }
      } else {
        message = contactMessages.recaptchaError;
      }
    } else {
      message = contactMessages.recaptchaError;
    }
    setTimeout(() => {
      toast(message, {
        type,
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
    }, 300)
  }, [executeRecaptcha, loading, setLoading]);
  const scope = contactScope.map(value => <label className="mr-4" key={value.value}>
    <input className="mr-1" type="radio" name="scope" value={value.value} defaultChecked={value.default === true}/>
    <span>{value.name}</span>
  </label>)
  return <form onSubmit={handleSubmit} id="contact-form">
    {/* <div className="mb-4 text-sm wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
      <span className="mr-4 font-semibold">Scope:</span>

      {scope}
    </div> */}
    <div className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
      <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
        <div className="mb-4">
          <input className="w-full p-4 text-xs font-semibold leading-none bg-stone-50 rounded outline-none" name="title"
                 type="text"
                 placeholder="Title" required minLength={3} maxLength={200}/>
        </div>
        <div className="mb-4">
          <input className="w-full p-4 text-xs font-semibold leading-none bg-stone-50 rounded outline-none" name="name"
                 type="text"
                 placeholder="Name" required minLength={3} maxLength={100}/>
        </div>
        <div className="mb-4">
          <input className="w-full p-4 text-xs font-semibold leading-none bg-stone-50 rounded outline-none" name="email"
                 type="email"
                 placeholder="Email" required minLength={3} maxLength={200}/>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-3">
        <textarea
          className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-stone-50 rounded outline-none"
          placeholder="Message" name="message" required minLength={10} maxLength={2000}></textarea>
      </div>
    </div>
    <div className="flex flex-wrap justify-end">
      <div className="float-left mb-6 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
        <label className="inline-flex text-xs">
          <input type="checkbox" className="form-checkbox accent-stone-500" required/>
          <span className="ml-2">
            I agree to {" "}
            <Link href="/privacy">
            <a className="underline hover:text-stone-500">Privacy policy</a>
            </Link>{" "}
          </span>
        </label>
      </div>   
      <div className="pl-20 w-[200px]">
        <Button loading={loading} disabled={loading}>Send</Button>
      </div>   
    </div>

  </form>
}

export default ClientForm;
