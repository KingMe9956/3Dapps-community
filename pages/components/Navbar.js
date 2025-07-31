import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link href="/" className="text-xl font-bold">3Dapps</Link>
      <div className="space-x-4">
        <Link href="/submit">Submit</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}