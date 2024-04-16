"use client";
import { getDictionary } from "@/dictionary/dictionary";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const { lang } = useParams();

  const [dictionary, setDictionary] = useState({});

  useEffect(() => {
    async function fetchDict() {
      const dict = await getDictionary(lang);

      setDictionary(dict);
    }
    fetchDict();
  }, [lang]);

  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <Image src="/trending.svg" width="24" height="24" alt="" />
            <span>{dictionary.trending}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/newRelease.svg" width="24" height="24" alt="" />
            <span>{dictionary.new_releases}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/commingSoon.svg" width="24" height="24" alt="" />
            <span>{dictionary.coming_soon}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/favourite.svg" width="24" height="24" alt="" />
            <span>{dictionary.favourites}</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src="/watchLater.svg" width="24" height="24" alt="" />
            <span>{dictionary.watch_later}</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
