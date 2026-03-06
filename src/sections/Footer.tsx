import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    title: 'Resume',
    href: 'https://coltonresume.com',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/colecodes/',
  },
  {
    title: 'GitHub',
    href: 'https://www.github.com/colecodesdev/',
  },
]

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip mt-24">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/12 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      <div className="container">
        <div className="flex flex-col items-center gap-8 border-t border-white/10 py-6 text-sm md:flex-row md:justify-between">

          <div className="text-white/35">
            &copy; 2025. All rights reserved.
          </div>

          <nav className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-white/70 transition hover:text-white"
              >
                <span>{link.title}</span>
                <ArrowUpRightIcon className="size-4 opacity-70" />
              </a>
            ))}
          </nav>

        </div>
      </div>
    </footer>
  )
}