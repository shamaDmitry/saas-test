import { MENU } from "@/const/NavMenu";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <Link href="/">Logo</Link>
          </div>

          <nav className="flex gap-4 items-center">
            {MENU.map((menuItem) => {
              return (
                <Link key={menuItem.id} href={menuItem.href}>
                  {menuItem.title}
                </Link>
              );
            })}
          </nav>

          <div className="flex gap-4">
            <Link href="/login" className="flex border py-2 px-4 rounded-md">
              Login
            </Link>

            <Link href="/sign-up" className="flex border py-2 px-4 rounded-md">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
