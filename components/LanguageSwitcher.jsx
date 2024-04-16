"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();

  const { lang } = useParams();
  const [showLang, setShowLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState(lang);

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-2"
          onClick={() => setShowLang(!showLang)}
        >
          {selectedLang === "en" ? "EN" : "BN"}
        </button>

        {showLang && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-dark p-2 z-10 shadow-lg">
            <ul>
              <li
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-700"
                onClick={() => {
                  setSelectedLang("bn");
                  setShowLang(false);
                  router.push(`/bn`);
                }}
              >
                Bangla
              </li>
              <li
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-700"
                onClick={() => {
                  setSelectedLang("en");
                  setShowLang(false);
                  router.push(`/en`);
                }}
              >
                English
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
