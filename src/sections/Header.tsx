export const Header = () => {
  return (
    <header className="fixed top-4 z-50 flex w-full items-center justify-center">
      <nav
        aria-label="Primary"
        className="flex gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 shadow-lg shadow-black/20 backdrop-blur-md"
      >
        <a href="/" className="nav-item">
          Home
        </a>

        <a href="#Projects" className="nav-item">
          Projects
        </a>

        <a
          href="#About"
          className="nav-item bg-white/[0.10] text-white hover:bg-white/[0.18]"
        >
          About
        </a>
      </nav>
    </header>
  );
};
