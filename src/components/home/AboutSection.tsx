'use client'

import { motion } from 'framer-motion'

const features = [
  {
    image: '/images/ambul.png',
    label: 'Emergency Help',
    bg: 'bg-sky-50',
    border: 'border-sky-300',
    circle: 'bg-sky-100',
  },
  {
    image: '/images/bed.png',
    label: 'Qualified Doctors',
    bg: 'bg-emerald-50',
    border: 'border-emerald-300',
    circle: 'bg-emerald-100',
  },
  {
    image: '/images/blood.png',
    label: 'Best Healthcare Professionals',
    bg: 'bg-rose-50',
    border: 'border-rose-300',
    circle: 'bg-rose-100',
  },
  {
    image: '/images/injection.png',
    label: 'Medical Treatment',
    bg: 'bg-violet-50',
    border: 'border-violet-300',
    circle: 'bg-violet-100',
  },
]

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative grid grid-cols-[0.9fr_1.1fr] grid-rows-2 gap-6"
        >
            <motion.img
              src="/images/goldenTeal.png"
              alt=""
              animate={{ y: [0, 90, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-8 -top-8 w-14 h-14 object-contain z-20 pointer-events-none"
            />
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop"
            alt="Doctors reviewing a patient chart"
            className="rounded-tl-none rounded-tr-[4.0rem] rounded-bl-[4.0rem] rounded-br-[4.0rem] w-full h-[250px] object-cover self-end"
          />
          
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop"
            alt="Doctor examining a patient"
            className="rounded-tl-[4.0rem] rounded-tr-none rounded-bl-[4.0rem] rounded-br-[4.0rem] w-full h-[300px] object-cover"
          />
          
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop"
            alt="Eye examination at the hospital"
            className="rounded-tl-[4.0rem] rounded-tr-[4.0rem] rounded-bl-none rounded-br-[4.0rem] w-full h-[250px] object-cover"
          />
            <motion.img
              src="/images/injAndTab.png"
              alt=""
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-5 left-10 w-14 h-14 object-contain z-20 pointer-events-none"
            />
            <div className="relative h-full isolate">
              <div className="absolute top-0 left-0 w-full h-full bg-indigo-200 rounded-tl-[4.0rem] rounded-tr-[4.0rem] rounded-bl-[4.0rem] rounded-br-none z-10" />

              <div className="absolute top-3 left-3 -right-3 -bottom-3 bg-transparent border-2 border-blue-900 rounded-tl-[4.0rem] rounded-tr-[4.0rem] rounded-bl-[4.0rem] rounded-br-none flex flex-col items-center justify-center py-8 px-4 text-center z-10">
                <span className="text-6xl md:text-7xl font-extrabold text-blue-900">
                  6+
                </span>
                <span className="mt-2 font-bold text-blue-900">
                  Years in Healthcare
                </span>
                <span className="font-bold text-blue-900">Excellence</span>
              </div>

              <div className="absolute -top-3 -left-10 w-15 h-15 bg-orange-500 rounded-lg rotate-45 -z-10" />
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
              <h2 className="text-blue-900 font-extrabold leading-[1.0] mb-5 text-[2.4rem] sm:text-[2.8rem] md:text-[1.8rem]">
                Al-Shifa Hospital — Best Hospital in Mandi Bahauddin
              </h2>
              <div className="relative isolate">
                <motion.img
                  src="/images/hartAndPlus.png"
                  alt=""
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 object-contain opacity-20 -z-10 pointer-events-none"
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

              <div className="grid grid-cols-2 gap-7 mb-8 w-full mt-8">
                  {features.map((f) => (
                    <div
                      key={f.label}
                      className={`relative flex flex-col items-center justify-center text-center gap-2 border ${f.border} bg-white rounded-2xl px-2 py-2 overflow-hidden shadow-sm`}>
                      <div className={`absolute -top-6 -left-5 w-25 h-25 rounded-full ${f.circle} opacity-70`} />

                      <motion.div
                        whileHover={{
                          x: [0, -3, 3, -3, 3, 0],
                          transition: { duration: 0.3 },
                        }}
                        className="relative z-10"
                      >
                        <img src={f.image} alt={f.label} className="w-11 h-11 object-contain" />
                      </motion.div>

                      <span className="relative font-bold text-blue-1300 text-base z-10">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 text-white border-0 px-7 py-3 rounded-lg font-semibold text-base cursor-pointer mt-6"
              >
              Read More
              </motion.button>
                <motion.img
                  src="/images/bag.png"
                  alt=""
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-55 -bottom-10 w-5 h-5 object-contain z-20 pointer-events-none"
                />

              <motion.img
                src="/images/wheelChar.png"
                alt=""
                animate={{ x: [0, 12, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-0 -bottom-0 w-8 h-8 object-contain z-20 pointer-events-none"
              />
            </motion.div>
      </div>
    </section>
  )
}