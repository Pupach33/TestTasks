import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return(
    <div>
    <header className="bg-gray-100 border-b border-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-around">
        <Link href="/" className="text-gray-700 hover:text-red-300 px-4 py-2 rounded-md ">
          Todo
        </Link>
        <Link href="/fetchFunc" className="text-gray-700 hover:text-red-300 px-4 py-2 rounded-md ">
          Fetch
        </Link>
        <Link href="/carusel" className="text-gray-700 hover:text-red-300 px-4 py-2 rounded-md ">
          Carusel
        </Link>
      </div>
    </header>
    
    <main className="container mx-auto p-6">
      <Component {...pageProps} />
    </main>
  </div>
     
  )
}
