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
    <footer className="relative z-10 mt-24 overflow-x-clip pb-10">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/12 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]" />

      <div className="container">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-sm md:px-8 md:py-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-md">
              <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-semibold uppercase tracking-[0.3em] text-transparent">
                Cole Reilly
              </p>

              <p className="mt-4 text-sm leading-6 text-white/60 md:text-base">
                Built with a focus on production-ready frontend work, cloud infrastructure,
                and real-world engineering execution.
              </p>

              <p className="mt-6 text-sm text-white/35">
                &copy; 2025 Cole Reilly. All rights reserved.
              </p>
            </div>

            <nav className="flex flex-col items-start gap-4 md:items-end">
              {footerLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.title}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-white/70 transition hover:text-white"
                >
                  <span>{link.title}</span>
                  <ArrowUpRightIcon className="size-4 opacity-70" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}