"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Back() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="cursor-pointer z-10 bg-black text-2xl text-white rounded-4xl px-3 py-1 border-2 border-white absolute top-[90px] right-4"
    >
      <FaArrowAltCircleRight />
    </button>
  );
}

export default Back;
