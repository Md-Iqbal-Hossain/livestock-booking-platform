import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center px-4">
      <h1 className="text-4xl font-bold text-red-500">
        404 - Page Not Found ❌
      </h1>

      <p className="text-gray-600 mt-3">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-5 bg-green-600 text-white px-4 py-2 rounded"
      >
        Go Back Home
      </Link>
    </div>
  );
}