import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded justify-between items-center">
      <h1>Jesus Velasco</h1>

      <div className="flex gap-3">
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
