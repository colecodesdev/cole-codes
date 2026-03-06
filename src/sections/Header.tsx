export const Header = () => {
  return (
    <div className="fixed top-4 w-full flex justify-center items-center z-50">
      <nav className="flex gap-1 p-1 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-lg shadow-black/20">
        <a
          href="#"
          className="nav-item"
        >
          Home
        </a>

        <a
          href="#Projects"
          className="nav-item"
        >
          Projects
        </a>

        <a
          href="#About"
          className="nav-item"
        >
          About
        </a>

        <a
          href="#Contact"
          className="nav-item bg-white/[0.10] text-white hover:bg-white/[0.18]"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};