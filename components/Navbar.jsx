import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  return (
    <header>
      <nav className="z-5 container flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image src="/logo.svg" width="139" height="26" alt="logo" priority />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <button className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
              <Image src="/ring.svg" width="24" height="24" alt="ring" />
            </button>
          </li>
          <li>
            <button className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
              <Image src="/sun.svg" width="24" height="24" alt="sun" />
            </button>
          </li>
          <li>
            <button className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
              <Image
                src="/shopping-cart.svg"
                width="24"
                height="24"
                alt="cart"
              />
            </button>
          </li>

          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
}
