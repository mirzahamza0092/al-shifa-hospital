import Link from 'next/link'
import AboutHero from '@/components/about/AboutHero'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'

const h = 'mt-8 mb-3 text-[#00507c] font-bold text-xl sm:text-2xl'
const p = 'text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed'
const link = 'text-blue-600 underline'

const beforeComing = [
  <>• Check your appointment details (Doctor Name, Appointment Time, <a href="#" className={link}>Clinic Location</a>).</>,
  '• Allow yourself sufficient time for travelling so that you can arrive to the clinic 15 minutes before your given appointment time. A late arrival may result in your appointment being rescheduled.',
  '• Make a list of the symptoms that you may have been experiencing.',
  '• Make a list of the medications and/or supplements that you are taking or bring them with you. Make a note of the dosage, when you take the medicines and any reactions that you may have had or are experiencing.',
  '• Be prepared to share information about your family’s medical history e.g. any major illness that they have had.',
  '• Make a list of questions that you may wish to ask the doctor or nurse (see section on Questions to ask your doctor).',
]

const whatToBring = [
  '• Your CNIC, to help register if you are visiting the hospital for the first time.',
  '• Your Registration Card (for existing patients), as you will need your Medical Record (MR) number.',
  '• Any relevant health reports, x-ray films, diagnostic or laboratory reports.',
]

const whatToExpect = [
  '• For first time patients, you must get yourself registered at the registration counter. You will receive a white registration card with a unique Medical Record (MR) number assigned to you. Keep this card safely as you will be asked for your Medical Record (MR) number every time you use our services.',
  '• For existing patients, go to the registration counter to let the clinic receptionist know that you have arrived. You will be asked to provide your name and MR number.',
  '• Once registered, you will be required to make the payment at the cash register counter for the clinic appointment. Accepted payment options include cash, debit card or credit card.',
  '• The nurse and or technician will call you to have your height, weight, temperature and blood pressure measured. They may ask you questions about your condition and symptoms.',
  '• You will be led to the examination room where you may first meet with the Resident Doctor who will ask you questions about your condition and symptoms.',
  '• You will meet with your consultant doctor who will listen to your complaint, review your reports, may ask you questions and conduct an examination. Following an initial assessment, the doctor will suggest a treatment plan that may involve a prescription for medicines or an order for diagnostics (specialized testing), clinical imaging (e.g. x-ray, ultrasound, scan) and/or laboratory tests (e.g. blood, urine, stool) if required. You may be recommended to see another consultant specialist, nutritionist (dietician), physiotherapist or one of our other specialized therapists. Depending on your case, you may be referred for a procedure or surgery or if serious, be asked to go directly to the emergency services.',
  '• You may meet with the nurse who can explain any instructions and medications that have been given by the doctor.',
  '• The doctor may suggest a follow up appointment that can be made for you before you leave the clinic. Please make note of the date and time of your next appointment.',
  '• If you have been given a prescription for medicines, you can collect these at any one of our pharmacy locations. Our highly trained pharmacists can guide you on how and when to take your medicine so that you can obtain the maximum therapeutic benefit.',
  '• If you have been referred to see another consultant specialist or dietician or therapist, our staff can assist to make you an appointment.',
  '• What ever your case, we are here to advise you and take good care of you',
]

const questions = [
  '• What is the name of the illness or medical condition?',
  '• What tests, if any, do I need to undergo to get a diagnosis or confirm the illness?',
  '• What are the factors causing the illness or the medical condition?',
  '• What is the prognosis (chances of getting better) of my illness or medical condition?',
  '• How serious is my illness or medical condition?',
  '• Is my illness contagious? What measures can I take to help prevent its spread to others?',
  '• What precautions can I take to slow down its progress?',
  '• What are the options available for the treatment of my illness or medical condition?',
  '• Will I be requiring a follow-up visit?',
  '• Are there any other medical professionals (e.g. dietician, therapist, nurse, doctor specialist) that I should consider seeing to help me get better or help me manage my illness or medical condition?',
]

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <>
      {items.map((t, i) => (
        <p key={i} className={`${p} mb-1`}>
          {t}
        </p>
      ))}
    </>
  )
}

export default function ClinicAppointmentPage() {
  return (
    <>
      <AboutHero title="Protocol" icon="/images/bedSun.PNG" iconAnimation="float" />

      <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
        <ScaleOnLarge>
          <div className="max-w-[1200px] mx-auto">
            <h2 className={h}>Prepare for Your Clinic Appointment</h2>
            <p className={p}>Here are some guidelines to help you prepare for your clinic visit and doctor&apos;s appointment.</p>
            <p className={p}>
              Book your{' '}
              <Link href="/patient/appointment" className={link}>
                online
              </Link>{' '}
              Or call at 051-9564000 and speak to a representative for information.
            </p>

            <h2 className={h}>Before coming to the clinic appointment</h2>
            <List items={beforeComing} />

            <h2 className={h}>What to bring to the appointment</h2>
            <List items={whatToBring} />

            <h2 className={h}>What you can expect when you arrive at the clinic</h2>
            <List items={whatToExpect} />

            <h2 className={h}>Ten Questions to ask your doctor</h2>
            <List items={questions} />
          </div>
        </ScaleOnLarge>
      </section>
    </>
  )
}