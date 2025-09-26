import { useCallback, useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Logo } from "@/components/logo";
import { Menu } from "@/components/menu";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

function Header() {
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = useCallback(
    () => setIsMobileNavOpen((prev) => !prev),
    [],
  );
  const closeMobileNav = useCallback(() => setIsMobileNavOpen(false), []);
  const handleHomeNavigation = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (location.pathname === "/") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      closeMobileNav();
    },
    [closeMobileNav, location.pathname],
  );

  return (
    <header className="sticky top-0 z-40">
      <div className="border-slate-200/70 absolute inset-x-0 top-0 h-full border-b bg-white/95 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#070b1c]/85" />

      <Container className="relative z-10 flex h-14 items-center justify-between gap-4 sm:h-[4.5rem] md:h-20 md:gap-6">
        <Link
          to="/"
          className="flex items-center gap-3 no-underline transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-brand-400/40 dark:focus-visible:ring-offset-slate-950 sm:gap-4"
          aria-current={location.pathname === "/" ? "page" : undefined}
          onClick={handleHomeNavigation}
        >
          <Logo className="h-8 w-auto sm:h-10" />
          <div className="flex flex-col">
            <span className="text-slate-900 font-display text-xl font-semibold dark:text-white">
              Intovah
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 xl:flex">
          <Menu
            className="flex items-center gap-8"
            itemClassName="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
            onItemClick={closeMobileNav}
          />
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <Badge variant="neutral" className="text-[0.58rem] tracking-[0.3em]">
            24/7 support
          </Badge>
          <Link
            to="/contact"
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            Schedule Appointment 
          </Link>
          <ThemeToggle className="shadow-none" />
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 xl:hidden">
          <ThemeToggle className="h-9 w-9 rounded-xl sm:h-10 sm:w-10" />
          <button
            type="button"
            className="border-slate-200 text-slate-700 hover:bg-slate-100 inline-flex h-10 w-10 items-center justify-center rounded-2xl border bg-white transition hover:-translate-y-0.5 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 sm:h-11 sm:w-11 xl:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileNavOpen}
            onClick={toggleMobileNav}
          >
            {isMobileNavOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMobileNavOpen ? (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex xl:hidden"
          >
            <button
              type="button"
              className="h-full w-full cursor-pointer bg-slate-900/60"
              aria-hidden="true"
              onClick={closeMobileNav}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative ml-auto flex h-full w-full max-w-xs flex-col gap-6 overflow-y-auto bg-white px-6 pb-8 pt-6 shadow-2xl outline-none dark:bg-[#080f26]"
              onClick={(event: MouseEvent<HTMLElement>) =>
                event.stopPropagation()
              }
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-white/60">
                  Navigation
                </span>
                <button
                  type="button"
                  className="border-slate-200 inline-flex h-9 w-9 items-center justify-center rounded-2xl border text-slate-600 transition hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
                  aria-label="Close navigation menu"
                  onClick={closeMobileNav}
                >
                  <CloseIcon />
                </button>
              </div>

              <Menu
                className="flex flex-col gap-4"
                itemClassName="text-base font-semibold text-slate-700 hover:text-slate-900 dark:text-white/80 dark:hover:text-white"
                onItemClick={closeMobileNav}
              />

              <div className="mt-4 flex flex-col gap-3">
                <Link
                  to="/support"
                  className="border-slate-200 text-slate-700 hover:bg-slate-100 inline-flex items-center justify-between rounded-2xl border px-5 py-3 text-sm font-semibold dark:border-white/15 dark:text-white/70 dark:hover:bg-white/10"
                  onClick={closeMobileNav}
                >
                  24/7 Support desk
                </Link>
                <Link
                  to="/contact"
                  className={buttonVariants({
                    variant: "primary",
                    size: "md",
                    className: "w-full rounded-2xl",
                  })}
                  onClick={closeMobileNav}
                >
                  Schedule Appointment
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7h16M8 12h12M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 7l10 10M17 7L7 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Header;
