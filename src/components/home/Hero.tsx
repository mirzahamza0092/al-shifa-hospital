'use client'

import { motion } from 'framer-motion'
import { HEADER_HEIGHT } from '@/components/layout/Header'
import FloatingIcon from '@/components/ui/FloatingIcon'
import YouTubeBackground from '@/components/ui/YouTubeBackground'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'
export default function Hero() {
  return (
    <section
      className="hero-section relative z-[1] overflow-hidden bg-[#f8fafc] bg-top bg-no-repeat"
      style={{
        marginTop: -HEADER_HEIGHT,
        paddingTop: HEADER_HEIGHT,
        backgroundImage: 'url(/images/heroback.png)',
        backgroundSize: '100% 105%',
      }}
    >
      <ScaleOnLarge>
      <div className="hero-inner relative flex items-center justify-between gap-8 px-12 pt-10 pb-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-[2] max-w-[560px] text-center md:text-left mx-auto md:mx-0"
        >
          <img
            src="/images/goldenTeal.png"
            alt=""
            className="hidden md:block w-20 h-auto mb-2.5 ml-[5.8rem]"
          />
          <div className="flex items-center justify-center md:justify-start mb-4 ml-0 md:ml-[4.1rem]">
            <span className="inline-block bg-indigo-50 text-blue-900 px-4 py-1.5 rounded-full font-semibold text-[0.85rem] border border-dashed border-indigo-200">
              Welcome to Al-Shifa Hospital
            </span>
          </div>
          <h1
            className="text-blue-900 font-extrabold leading-[1.15] mb-6 ml-0 md:ml-[4.1rem] text-[1.7rem] sm:text-[2.1rem] md:text-[2.5rem] lg:text-[3rem]"
          >
            Committed to providing quality healthcare to all our patients 24/7
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-8">
            <FloatingIcon
              src="/images/Medical.png"
              animation="float"
              duration={2.2}
              distance={10}
              className="w-[60px] h-[60px]"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-white border-0 px-8 py-3.5 rounded-lg font-semibold text-base cursor-pointer"
            >
              Read More
            </motion.button>
          </div>
        </motion.div>
        <FloatingIcon
          src="/images/goldenWinged.png"
          animation="float"
          duration={2.6}
          distance={14}
          className="absolute left-1/2 top-20 -translate-x-1/2 w-20 h-auto z-[2]"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-video-box relative z-[2] w-[400px] max-w-full h-[230px]"
        >
          <YouTubeBackground
            videoId="gjctRQC-buo"
            title="Al Shifa Hospital"
            className="w-full h-full rounded-2xl border-[3px] border-blue-900 shadow-[0_10px_30px_rgba(30,58,138,0.25)]"
          />
        </motion.div>
        <img
          src="/images/Heart.png"
          alt=""
          className="hidden md:block absolute right-[4%] bottom-0 w-20 h-auto z-[3]"
        />
        <motion.img
          src="/images/anbulance.png"
          alt=""
          initial={{ x: 250 }}
          animate={{ x: 100 }}
          transition={{ duration: 2.4, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
          className="hidden md:block absolute -bottom-[70px] left-[38%] w-20 h-auto z-[3]"
        />
       </div>
      <div className="h-[90px]" />
      </ScaleOnLarge>
      <style jsx>{`
        @media (max-width: 900px) {
          .hero-inner {
            flex-direction: column;
            text-align: center;
            padding: 1rem 1.5rem 2rem;
          }
          .hero-video-box {
            width: 100% !important;
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  )
}