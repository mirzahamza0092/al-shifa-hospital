import AboutHero from '@/components/about/AboutHero'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'

const h = 'mt-8 mb-3 text-[#00507c] font-bold text-lg sm:text-xl'
const p = 'text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed'

export default function AdmissionPage() {
  return (
    <>
      <AboutHero title="Protocol" icon="/images/bedSun.PNG" iconAnimation="drive" />

      <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
        <ScaleOnLarge>
          <div className="max-w-[1200px] mx-auto">
            <h3 className={h}>What To expect when Your Doctor Refers you for Admission</h3>
            <p className={p}>
              If you are on this page, your doctor may have recommended you for admission for a
              daycare procedure or a longer-term stay for your care, or you may be searching for
              options for procedures at our hospital. Here, we will guide you on the steps you
              need to take for a smooth admissions process.
            </p>
            <p className={p}>• At the Clinic</p>
            <p className={p}>• At the Admission Office</p>
            <p className={p}>• The Day before the admission</p>
            <p className={p}>• The Day of the Admission</p>

            <h3 className={h}>At the Clinic</h3>
            <p className={p}>
              At the end of your clinics visit, if you need to get admitted, your doctor will
              discuss it with you and raise an Inpatient Reservation Form. You will be requested
              to visit the Financial Counselor at the Admission Office and receive an SMS text
              message with these instructions.
            </p>

            <h3 className={h}>After the Clinic Visit:</h3>
            <p className={p}>
              Meet with an Anesthesiologist for medical fitness / clearance at the pre-operative
              Anesthesia Clinic.
            </p>

            <h3 className={h}>At the Admission Office</h3>
            <p className={p}>
              At the Admission office, our financial counselor will provide you with cost
              estimates, payment options and if required If your insurance or employer will cover
              your admission, you will receive an Admission Form for your company&apos;s approval.
            </p>

            <h3 className={h}>The Day Before the Admission</h3>
            <p className={p}>
              You will receive a call from us to confirm your admission, pre-admission
              preparation and confirmation of bed request along with the reporting time.
            </p>

            <h3 className={h}>The Day of the Admission</h3>
            <p className={p}>
              On the day of the admission, please report to the Patient Admission Office or
              surgical daycare, endoscopy unit etc. as mentioned in your Admission Form and
              instructed by the admitting team.
            </p>
          </div>
        </ScaleOnLarge>
      </section>
    </>
  )
}