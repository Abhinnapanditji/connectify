"use client";

import "./styles/globals.css";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Play } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${darkMode ? "dark" : ""} animate-gradient-green`}
      >
        <div className="min-h-screen text-gray-900 dark:text-gray-100 ">
          <header className="bg-gray-900 dark:bg-black text-white p-4">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold text-center sm:text-4xl">Connectify</h1>
                <p className="text-sm text-center sm:text-base">Connect, Chat, and Play – Anytime, Anywhere.</p>
              </div>

              {/* Navbar */}
              <nav className="hidden sm:flex space-x-6 text-lg">
                <ul className="flex space-x-6">
                  <li>
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-play" className="hover:underline">
                      How to Play
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/lobby"
                      className="bg-green-600 dark:bg-green-600 text-white dark:text-gray-800 px-4 py-2 rounded-full inline-flex justify-center items-center animate-bounce"
                    >
                      Play
                      <Play className="w-5 h-5 fill-white dark:fill-black ml-2" />
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Dark Mode Button */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </header>

          {/* Main Content Section */}
          <main className="mx-auto p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
