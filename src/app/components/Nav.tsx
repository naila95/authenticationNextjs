"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { user, isLoaded } = useUser();
  console.log(user);
  console.log(isLoaded);
  return (
    <header>
      <nav>
        <div className="flex justify-between items-center p-6 bg-slate-400">
          <Link className="text-blue-600 font-semibold text-lg" href="/">
            Home
          </Link>
          {user && isLoaded && (
            <>
              <Link
                className="text-green-600 font-semibold text-lg"
                href="/dashboard"
              >
                Dashboard
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
