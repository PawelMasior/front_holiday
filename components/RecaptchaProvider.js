'use client';
import React from 'react';
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

function RecaptchaProvider({children}) {
  return <GoogleReCaptchaProvider
    reCaptchaKey="6Ld-DI8oAAAAAPNpQWVLEicCT749mR_7mGFkZg87"
    scriptProps={{
      async: false,
      defer: true,
      appendTo: "body",
      nonce: undefined,
    }}>
    {children}
  </GoogleReCaptchaProvider>
}
export default RecaptchaProvider;
