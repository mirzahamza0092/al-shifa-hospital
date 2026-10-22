'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUp, Phone, MapPin } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import FloatingIcon from '@/components/ui/FloatingIcon'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'
import { usePublicDepartments } from '@/hooks/usePublicDepartments'
const SOCIALS = [
  { Icon: FaFacebookF, color: '#1877f2', href: 'https://www.facebook.com/AlShifaHospitalMBDin', label: 'Facebook' },
  { Icon: FaInstagram, color: '#e1306c', href: 'https://www.instagram.com/alshifamandibahauddin/', label: 'Instagram' },
  { Icon: FaYoutube, color: '#ff0000', href: 'https://www.youtube.com/@Al-ShifaHospitalMBDin', label: 'YouTube' },
  { Icon: FaTiktok, color: '#000000', href: 'https://www.tiktok.com/@alshifambdin', label: 'TikTok' },
]

const PHONES = [
  { label: 'Appointment and Medical Information', number: '0349-6601065' },
  { label: 'Accident & Emergency', number: '0307-5501065' },
]
const FOOTER_SERVICES_LIMIT = 4
const inputClass =
  'w-full bg-white rounded-lg px-4 py-3 text-sm text-slate-700 placeholder:text-slate-700 shadow-[0_4px_14px_rgba(15,37,87,0.08)] outline-none focus:ring-2 focus:ring-amber-300'

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h4 className="text-blue-900 font-bold text-lg">{children}</h4>
      <span
        className="block mt-1 h-[5px] w-9"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, #f59e0b 0 2px, transparent 2px 5px)',
        }}
      />
    </div>
  )
}

export default function Footer() {
  const [showTop, setShowTop] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { departments } = usePublicDepartments()
  const footerServices = departments.slice(0, FOOTER_SERVICES_LIMIT)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

async function handleSend(e: React.FormEvent) {
  e.preventDefault()
  setSending(true)
  setStatus('idle')
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, mobile, message }),
    })
    if (!res.ok) throw new Error('failed')
    setStatus('success')
    setName(''); setEmail(''); setMobile(''); setMessage('')
  } catch {
    setStatus('error')
  } finally {
    setSending(false)
  }
}

  return (
    <footer
      className="relative bg-white overflow-hidden pt-28 md:pt-40 pb-6 px-4 sm:px-6 md:px-12 bg-[length:100%_auto] md:bg-cover"
      style={{
        backgroundImage: "url('/images/footerBack.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <FloatingIcon
        src="/images/hartAndPlus.png"
        animation="spin"
        duration={2.5}
        distance={10}
        className="hidden md:block absolute right-6 top-28 w-10 h-10 object-contain"
      />
      <FloatingIcon
        src="/images/anbulance.png"
        animation="sway"
        duration={3.5}
        distance={80}
        className="hidden md:block absolute left-[12%] top-24 w-20 h-20 object-contain"
      />
      <ScaleOnLarge>
      <div className="relative max-w-[1200px] mx-auto h-16 hidden md:block">
        <motion.img
          src="/images/ambulance.png"
          alt=""
          initial={{ x: 0 }}
          animate={{ x: 300 }}
          transition={{ duration: 2.4, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
          className="absolute bottom-0 left-0 w-20 h-auto"
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] gap-x-4 gap-y-10 sm:gap-10">
        <div className="col-span-2 lg:col-span-1">
          <img
            src="/images/logoImage.png"
            alt="Al Shifa Hospital"
            className="w-32 h-auto mb-4"
          />

          <p className="text-sm text-slate-600 leading-relaxed flex gap-2">
            <MapPin size={18} className="shrink-0 mt-0.5 text-amber-500" />
            Murala Road, Near Satt Sira Chowk, Mandi Bahauddin Punjab, Pakistan
          </p>

          <div className="mt-6 space-y-3">
            {PHONES.map((p) => (
              <div key={p.label} className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-amber-400 text-white flex items-center justify-center shrink-0">
                  <Phone size={16} />
                </span>
                <div className="leading-tight">
                  <p className="text-[0.7rem] font-semibold text-amber-500">{p.label}</p>
                  <p className="text-sm font-bold text-blue-900">{p.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <Heading>Quick Links</Heading>
          {[
            { label: 'About Us', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: "Doctor's", href: '/doctors' },
            { label: 'Blogs', href: '/blogs' },
            { label: 'Complaint', href: '/feedback/complaint' },
            { label: 'Admin', href: '/admin/login' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-slate-700 mb-3 hover:text-amber-500 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Column 3: Our Services */}
        <div>
          <Heading>Our Service</Heading>
          {footerServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="block text-sm text-slate-700 mb-3 hover:text-amber-500 transition"
            >
              {service.name}
            </Link>
          ))}
          <Link
            href="/services"
            className="block text-sm text-slate-700 mb-3 hover:text-amber-500 transition"
          >
            View All
          </Link>
        </div>

        {/* Column 4: Contact form */}
        <div className="col-span-2 lg:col-span-1">
          <Heading>Contact Us</Heading>
          <form onSubmit={handleSend} className="flex flex-col gap-4">
            <input
              className={inputClass}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className={inputClass}
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className={inputClass}
              placeholder="Mobile Number 03XXXXXXXXX"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <textarea
              className={`${inputClass} min-h-[70px] resize-none`}
              placeholder="Type Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={sending}
              className="bg-amber-400 text-white font-semibold rounded-lg py-3 shadow-[0_6px_16px_rgba(245,158,11,0.3)] disabled:opacity-60"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </motion.button>
            {status === 'success' && (
              <p className="text-sm text-green-600">Aap ka message bhej diya gaya hai. Shukriya!</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600">Message nahi bheja ja saka, dobara koshish karein.</p>
            )}
          </form>

          <div className="flex gap-4 mt-5">
            {SOCIALS.map(({ Icon, color, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2 }}
                style={{ color }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
        <div className="relative max-w-[1200px] mx-auto mt-10 pt-4 border-t border-slate-300 text-center text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} Al Shifa Hospital MB Din.{' '}
            <span className="text-amber-500">All Rights Reserved</span>
          </p>
          <p className="mt-1">
            Powered by <span className="font-semibold text-blue-900">Experts IT Agency</span>{' '}
            <a href="tel:03455759505" className="text-amber-500 hover:underline">
              03455759505
            </a>
          </p>
        </div>
      </ScaleOnLarge>

      {/* Scroll to top */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[200] w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-lg"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </footer>
  )
}