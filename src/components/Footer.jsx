
import Link from "next/link";
import Image from "next/image";
// import { Facebook, Instagram } from "lucide-react";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-green-500/5 via-transparent to-emerald-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="logo" width={32} height={32} />
              <h2 className="text-xl font-semibold text-black dark:text-white">
                QurbaniHat
              </h2>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              A trusted platform to explore and book livestock.
            </p>
          </div>

          {/* About (all go to homepage) */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              About
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-black dark:hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black dark:hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>Email: support@livestockhub.com</li>
              <li>Phone: +880 1234-567890</li>
              <li>Location: Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <Link href="/" className="hover:scale-110 transition">
                <FaFacebook className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white" />
              </Link>

              <Link href="/" className="hover:scale-110 transition">
                <FaXTwitter className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white" />
              </Link>

              <Link href="/" className="hover:scale-110 transition">
                <BsInstagram className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Livestock Booking. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;