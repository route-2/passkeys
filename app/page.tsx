"use client";
import Image from "next/image";
import { ClientAuthentication, ClientRegistration } from "paasskeys-server";
import React from "react";
import { ethers } from "ethers";

export default function Home() {
  const generatePasskey = async () => {
    // let popup = window.open("http://localhost:3001","Generating passkey","height=400,width=600,resizable=yes")
    console.log("Generating passkey...");
    let params = new URLSearchParams(window.location.search);
    let parentUrl = params.get('parentUrl');
    let username = params.get('username');
    const res = await ClientRegistration(username||"test");
    console.log(res);
    
    window.opener.postMessage(res, parentUrl);
  };

  generatePasskey();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>
        Generating passkey ...
      </p>
    </main>
  );
}
