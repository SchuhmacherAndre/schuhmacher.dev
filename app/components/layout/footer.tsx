"use client";

import { Separator } from "@/app/components/ui/separator";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Separator></Separator>

      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Made with ☕ by {" "}
            <Link href="/" className="cursor-pointer">
              André Schuhmacher
            </Link>. Using NyxbUI, and AceternityUI for inspiration.
            <br />
            <Link className="text-blue-500" href="https://github.com/schuhmacherandre/schuhmacher-dev">
                Source Code
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
