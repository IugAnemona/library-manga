import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white z-10">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <Link to={'/'} className="text-white">
            Library Manga
          </Link>
        </div>

        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to={'/'} className="hover:text-gray-400">
              Home
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button id="menuButton" className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
