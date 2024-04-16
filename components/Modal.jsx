"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  const router = useRouter();
  function onClose() {
    router.back();
  }

  return createPortal(
    <>
      <div className="fixed top-0 w-full h-screen bg-black opacity-60 z-20"></div>
      <div className="absolute top-1/12 left-1/2 -translate-x-1/2 w-3/4 z-30 border border-cyan-800 p-4 mb-16 rounded-md">
        <button
          className="absolute right-8 top-6 bg-gray-200 px-2 py-2 rounded-full border border-gray-700 shadow-lg"
          onClick={onClose}
        >
          <Image src={`/xmark.svg`} width={20} height={20} alt="xmark" />
        </button>
        {children}
      </div>
    </>,
    document.getElementById("modal-root")
  );
}
