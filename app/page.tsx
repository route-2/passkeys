"use client";
import Image from "next/image";
import { ClientAuthentication, ClientRegistration } from "paasskeys-server";
import React from "react";
import { ethers } from "ethers";

export default function Home() {
  const generatePasskey = async () => {
    // let popup = window.open("http://localhost:3001","Generating passkey","height=400,width=600,resizable=yes")
    console.log("Generating passkey...");
    const res = await ClientRegistration("abcd");
    console.log(res);
  };

  generatePasskey();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <button
        className="px-4 py-2 bg-white text-black rounded-xl"
        onClick={generatePasskey}
      >
        Generate Passkey
      </button>
    </main>
  );
}
