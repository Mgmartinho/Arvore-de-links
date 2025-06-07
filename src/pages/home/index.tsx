
import { Social } from "../../componentes/social";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export function Home() {
  return (
    <div className='flex flex-col w-full py-4 items-center justify-center'>
      <h1 className='md:text-4xl text-3xl mt-20 font-bold text-gray-800 dark:text-gray-200'>
        Arvores de Links
      </h1>
    <span className="text-gray-50 mb-5 mt-3">Veja meus Links</span>

    <main className="flex flex-col w-11/12 max-w-xl text-center">
      <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105">
        <a href="">
          <p className="text-base md:text-lg">
            Canal do YouTube
          </p>
        </a>
      </section>
    </main>
    <footer className="flex justify-center gap-3 my-4">
      <Social url="https://www.facebook.com/">
          <FaFacebook size={24} color="#1877F3" />
      </Social>
      <Social url="https://www.instagram.com/">
          <FaInstagram size={24} color="#1877F3" />
      </Social>
      <Social url="https://www.facebook.com/">
          <FaLinkedin size={24} color="#1877F3" />
      </Social>
      <Social url="https://www.facebook.com/">
          <FaYoutube size={24} color="#1877F3" />
      </Social>
    </footer>
    </div>
  )
}