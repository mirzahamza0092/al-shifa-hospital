'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'

export const HEADER_HEIGHT = 88

type NavItem = {
  label: string
  href: string
  dropdown?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    dropdown: [
      { label: 'About Us', href: '/about' },
      { label: 'Mission/Vision', href: '/about/mission-vision' },
    ],
  },
  { label: 'Services', href: '/services' },
  { label: 'Doctors', href: '/doctors' },
  {
    label: 'Protocols',
    href: '/protocols',
    dropdown: [
      { label: 'Inpatient Admission Information', href: '/protocols/admission' },
      { label: 'Prepare for Your Clinic Appointment', href: '/protocols/clinic-appointment' },
      { label: 'Prepare for Your Day Care Services', href: '/protocols/day-care' },
      { label: 'Prepare for Your Hospital Stay', href: '/protocols/hospital-stay' },
      { label: 'Prepare for Your Surgery', href: '/protocols/surgery' },
    ],
  },
  {
    label: 'Patient',
    href: '/patient',
    dropdown: [{ label: 'Appointment', href: '/patient/appointment' }],
  },
  {
    label: 'Feedback',
    href: '/feedback',
    dropdown: [
      { label: 'Complaint', href: '/feedback/complaint' },
      { label: 'Compliment', href: '/feedback/compliment' },
      { label: 'Suggestion', href: '/feedback/suggestion' },
    ],
  },
  {
    label: 'Career',
    href: '/career',
    dropdown: [
      { label: 'Career', href: '/career' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

function DesktopNavLink({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 text-blue-900 font-semibold no-underline py-2 whitespace-nowrap text-[0.95rem]"
      >
        {item.label}
        {item.dropdown && <ChevronDown size={15} />}
      </Link>

      {item.dropdown && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 bg-white shadow-xl rounded-lg min-w-[260px] py-2 z-50"
            >
              {item.dropdown.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="block px-5 py-2.5 text-gray-700 no-underline text-sm hover:bg-gray-50"
                >
                  {sub.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}

function MobileNavLink({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block px-6 py-3.5 text-blue-900 font-semibold no-underline border-b border-slate-100"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full bg-transparent border-0 px-6 py-3.5 text-blue-900 font-semibold text-base cursor-pointer"
      >
        {item.label}
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-slate-50"
          >
            {item.dropdown.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={onNavigate}
                className="block px-10 py-2.5 text-slate-600 text-sm no-underline"
              >
                {sub.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{ minHeight: HEADER_HEIGHT }}
      className={`sticky top-0 z-[100] w-full max-w-[100vw] transition-all duration-300 ${
        scrolled ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]' : 'bg-transparent shadow-none'
      }`}
    >
      <div className="flex items-center justify-between max-w-[1400px] mx-auto gap-3 sm:gap-6 px-4 sm:px-6 py-3.5">
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            className="mobile-toggle hidden bg-transparent border-0 cursor-pointer text-blue-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Logo + hospital name */}
          <Link href="/" className="flex items-center gap-2.5 no-underline shrink-0">
          {/* 3D rotating logo */}
          <div className="logo-3d-wrap shrink-0 w-9 h-9 sm:w-12 sm:h-12" style={{ perspective: '600px' }}>
            <div className="logo-3d-spin w-full h-full">
              <Image
                src="/images/logoImage.png"
                alt="Al Shifa Hospital Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          <span className="flex flex-col leading-tight">
            <span className="text-sm sm:text-lg font-extrabold text-blue-900 tracking-wide whitespace-nowrap">
              AL-SHIFA HOSPITAL
            </span>
            <span className="text-[0.62rem] font-semibold text-black-500 tracking-widest">
              Mandi Bahauddin
            </span>
          </span>
          </Link>
        </div>

        <nav className="desktop-nav flex gap-4 lg:gap-6 flex-1 justify-center">
          {navItems.map((item) => (
            <DesktopNavLink key={item.href} item={item} />
          ))}
        </nav>

        <div className="hidden min-[1181px]:flex items-center gap-4 shrink-0">
          <Link href="/patient/appointment">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2.5 bg-blue-900 text-white border-0 rounded-[10px] font-semibold cursor-pointer whitespace-nowrap py-2.5 pl-4 pr-2.5 text-sm sm:text-base"
            >
              Appointment
              <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-white shrink-0">
                <ArrowRight size={16} color="#1e3a8a" />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden overflow-y-auto bg-white border-t border-slate-100 max-h-[calc(100vh-70px)]"
          >
            {navItems.map((item) => (
              <MobileNavLink key={item.href} item={item} onNavigate={() => setMobileOpen(false)} />
            ))}
            <div className="px-6 py-4">
              <Link href="/patient/appointment" onClick={() => setMobileOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2.5 bg-blue-900 text-white border-0 py-3.5 rounded-lg font-semibold cursor-pointer">
                  Appointment
                  <span className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-white shrink-0">
                    <ArrowRight size={14} color="#1e3a8a" />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* Tablets & small laptops: switch to hamburger earlier so the 8
           nav links never get cramped */
        @media (max-width: 1180px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }

        /* 3D rotating logo */
        .logo-3d-spin {
          transform-style: preserve-3d;
          animation: spin3d 6s linear infinite;
        }
        @keyframes spin3d {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </header>
  )
}