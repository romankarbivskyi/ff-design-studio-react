import { useState } from "react";
import { cn } from "../lib/utils";

const navLinks = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 px-3.75">
      <div className="border-divider flex items-center justify-between border-b pt-3 pb-2.5">
        <a href="/" className="flex items-center gap-2.5">
          <img src="/F&F_logo.svg" alt="F&F Logo" />

          <span className="xs:hidden flex flex-nowrap">
            <img src="/Left_logo.svg" alt="Left Logo" className="h-4 w-4" />
            <img src="/Right_logo.svg" alt="Right Logo" className="h-4 w-4" />
          </span>
        </a>

        <nav className="xs:flex hidden items-center gap-12.5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navlink">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="navlink xs:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <div
          className={cn(
            "bg-background absolute top-full left-0 w-full px-3.75 py-6 transition-all",
            isOpen
              ? "translate-y-0"
              : "pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          <nav className="xs:hidden flex flex-col gap-6.5">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="navlink">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="xs:flex hidden flex-nowrap gap-2 pt-4.75 pb-2.5">
        <img src="/Left_logo.svg" alt="Left Logo" />
        <img src="/Right_logo.svg" alt="Right Logo" />
      </div>
    </header>
  );
};

export default Navbar;
