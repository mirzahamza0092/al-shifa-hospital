'use client'

import { motion } from 'framer-motion'
import FloatingIcon from '@/components/ui/FloatingIcon'
import FeatureCard from '@/components/ui/FeatureCard'
import { features } from '@/data/features'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'

const DEFAULT_IMAGES: [string, string, string] = [
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop',
]

interface AboutSectionProps {
  images?: [string, string, string]
}

export default function AboutSection({ images = DEFAULT_IMAGES }: AboutSectionProps) {
  return (
    <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      <ScaleOnLarge>
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 items-start">        
      <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative grid grid-cols-2 md:grid-cols-[0.9fr_1.1fr] grid-rows-2 gap-3 md:gap-6"
        >
        <FloatingIcon
          src="/images/goldenTeal.png"
          animation="float"
          duration={2.5}
          distance={10}
          className="absolute -left-8 top-20 w-14 h-14 object-contain z-20"
        />
        <img
          src={images[0]}
          alt="Doctors reviewing a patient chart"
          className="rounded-tl-none rounded-tr-[4.0rem] rounded-bl-[4.0rem] rounded-br-[4.0rem] w-full h-[150px] sm:h-[200px] md:h-[250px] object-cover self-end"
        />
        <img
          src={images[1]}
          alt="Doctor examining a patient"
          className="rounded-tl-[4.0rem] rounded-tr-none rounded-bl-[4.0rem] rounded-br-[4.0rem] w-full h-[180px] sm:h-[230px] md:h-[300px] object-cover"
        />
        <img
          src={images[2]}
          alt="Eye examination at the hospital"
          className="rounded-tl-[4.0rem] rounded-tr-[4.0rem] rounded-bl-none rounded-br-[4.0rem] w-full h-[150px] sm:h-[200px] md:h-[250px] object-cover"
        />
        <FloatingIcon
          src="/images/injAndTab.png"
          animation="sway"
          duration={2.5}
          distance={10}
          className="absolute bottom-5 left-10 w-14 h-14 object-contain z-20"
        />
        <div className="relative h-full isolate">
          <div className="absolute top-0 left-0 w-full h-full bg-indigo-200 rounded-tl-[4.0rem] rounded-tr-[4.0rem] rounded-bl-[4.0rem] rounded-br-none z-10" />

          <div className="absolute top-3 left-3 -right-3 -bottom-3 bg-transparent border-2 border-blue-900 rounded-tl-[4.0rem] rounded-tr-[4.0rem] rounded-bl-[4.0rem] rounded-br-none flex flex-col items-center justify-center py-8 px-4 text-center z-10">
            <span className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-blue-900">
              6+
            </span>
            <span className="mt-2 font-bold text-blue-900">
              Years in Healthcare
            </span>
            <span className="font-bold text-blue-900">Excellence</span>
          </div>
          <div className="absolute -top-3 -left-10 w-14 h-14 bg-orange-500 rounded-lg rotate-45 -z-10" />
        </div>
      </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
          <span className="inline-block bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full font-semibold text-[0.85rem] border border-dashed border-amber-200 mb-4">
            About Us
          </span>
              <h2 className="text-blue-900 font-extrabold leading-[1.15] mb-5 text-[1.6rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem]">
                Al-Shifa Hospital — Best Hospital in Mandi Bahauddin
              </h2>
              <div className="relative isolate">
                <FloatingIcon
                src="/images/hartAndPlus.png"
                animation="spin"
                duration={8}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 object-contain opacity-20 -z-10"
              />
                <p className="relative text-slate-600 leading-relaxed mb-8 mt-6">
                  Al-Shifa Hospital MB Din is a premier healthcare institution known
                  for its excellence in medical services. Our dedicated team of
                  doctors, nurses, and staff ensures top-quality care for patients.
                  Equipped with advanced facilities and adhering to international
                  standards, we offer a wide range of medical treatments and
                  services. Whether it&apos;s routine check-ups, emergencies, or
                  specialized care, trust us to deliver compassionate and effective
                  healthcare.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-7 mb-8 w-full mt-8">
                {features.map((f) => (
                  <FeatureCard key={f.label} feature={f} />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 text-white border-0 px-7 py-3 rounded-lg font-semibold text-base cursor-pointer mt-2"
              >
              Read More
              </motion.button>
                <FloatingIcon
                  src="/images/bag.PNG"
                  animation="float"
                  duration={2.2}
                  distance={10}
                  className="absolute right-55 -bottom-10 w-5 h-5 object-contain z-20"
                />
              <FloatingIcon
                src="/images/wheelChar.PNG"
                animation="sway"
                duration={2.5}
                distance={12}
                className="absolute right-0 -bottom-0 w-8 h-8 object-contain z-20"
              />
            </motion.div>
      </div>
      </ScaleOnLarge>
    </section>
  )
}