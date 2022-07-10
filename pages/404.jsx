import Link from "next/link";

export default function Custom404() {
  return <div>
    <h1>404 Page not found</h1>
    <p>Apologies, you have reached a location that does not exist.</p>
    <Link href="/">Navigate to /</Link>
  </div>
}