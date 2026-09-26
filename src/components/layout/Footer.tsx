'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUp, Phone, MapPin } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')

  if (typeof window !== 'undefined') {
    window.onscroll = () => setShowTop(window.scrollY > 400)
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault()
    alert('OTP sent (placeholder — Contact API baad mein connect hoga)')
  }

  return (
    <footer style={{ background: '#0f2557', color: '#cbd5e1', padding: '4rem 1.5rem 1.5rem' }}>
      <div
        className="footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2.5rem',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Column 1: Logo + Address */}
        <div>
          <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.3rem' }}>
            AL SHIFA HOSPITAL
          </h3>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '1rem' }}>MB DIN</p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.6, display: 'flex', gap: '0.5rem' }}>
            <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            Main Road, MB Din, Punjab, Pakistan
          </p>

          <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.2rem' }}>
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.15, background: '#f59e0b' }}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '1rem' }}>Quick Links</h4>
          {[
            { label: 'About Us', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: "Doctor's", href: '/doctors' },
            { label: 'Blogs', href: '/blogs' },
            { label: 'Complaint', href: '/feedback/complaint' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '0.7rem' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Column 3: Our Service Links */}
        <div>
          <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '1rem' }}>Our Services</h4>
          {[
            { label: 'Surgical', href: '/services/surgical' },
            { label: 'Medicine', href: '/services/medicine' },
            { label: 'Emergency Services', href: '/services/emergency' },
            { label: 'Gynae & Obs', href: '/services/gynae-obs' },
            { label: 'Psychiatry', href: '/services/psychiatry' },
            { label: 'View All', href: '/services' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '0.7rem' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Column 4: Contact mini-form */}
        <div>
          <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '1rem' }}>Contact Us</h4>
          <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '6px', border: 'none', fontSize: '0.85rem' }}
              required
            />
            <input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '6px', border: 'none', fontSize: '0.85rem' }}
              required
            />
            <input
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '6px', border: 'none', fontSize: '0.85rem' }}
              required
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '6px', border: 'none', fontSize: '0.85rem', minHeight: '60px' }}
              required
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              style={{
                background: '#f59e0b',
                color: 'white',
                border: 'none',
                padding: '0.6rem',
                borderRadius: '6px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Send OTP
            </motion.button>
          </form>
        </div>
      </div>

      {/* Phone numbers row */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '2.5rem auto 0',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          fontSize: '0.85rem',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Phone size={15} /> Medical Information: 051-1234567
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Phone size={15} /> Appointment: 051-1234568
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Phone size={15} /> Hospital Exchange: 051-1234569
        </span>
      </div>

      {/* Copyright */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '1.5rem auto 0',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: '#94a3b8',
        }}
      >
        © {new Date().getFullYear()} Al Shifa Hospital MB Din. All Rights Reserved.
      </div>

      {/* Scroll to top button */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#f59e0b',
            color: 'white',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 200,
          }}
        >
          <ArrowUp size={22} />
        </motion.button>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 550px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}