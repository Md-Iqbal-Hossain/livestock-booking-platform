"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  // const userData = authClient.useSession();
  // const user = userData.data?.user;

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  }

  if (isPending) {
  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto">
        <p className="text-sm">Loading...</p>
      </nav>
    </div>
  );
}

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.jpg"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto rounded-4xl"
          />

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          <h3 className="font-black text-lg">QurbaniHat</h3>
        </div>

        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"} className="relative transition-all duration-300 hover:text-green-600">Home
            </Link>
          </li>
          <li>
            <Link href={"/all-animals"} className="relative transition-all duration-300 hover:text-green-600">All Animals</Link>
          </li>
          <li>
            <Link href={"/my-profile"} className="relative transition-all duration-300 hover:text-green-600">My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user && <ul className="flex items-center text-sm gap-5">
            <li>
              <Link href={"/signup"}>Register</Link>
            </li>
            <li>
              <Link href={"/signin"}>LogIn</Link>
            </li>
          </ul>}

          {
            user && <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div>
          }
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-white border-t">

          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/all-animals" onClick={() => setMenuOpen(false)}>
            All Animals
          </Link>

          <Link href="/my-profile" onClick={() => setMenuOpen(false)}>
            My Profile
          </Link>

          {!user && (
            <>
              <Link href="/signup" onClick={() => setMenuOpen(false)}>
                Register
              </Link>
              <Link href="/signin" onClick={() => setMenuOpen(false)}>
                LogIn
              </Link>
            </>
          )}

          {user && (
            <button
              onClick={() => {
                handleSignOut();
                setMenuOpen(false);
              }}
              className="text-left text-red-500"
            >
              SignOut
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;