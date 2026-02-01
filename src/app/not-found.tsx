import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">
          404
        </h1>
        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
