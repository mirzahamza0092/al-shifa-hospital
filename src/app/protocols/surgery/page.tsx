import Link from 'next/link'
import AboutHero from '@/components/about/AboutHero'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'

const h = 'mt-6 mb-3 text-[#00507c] font-bold text-base sm:text-lg'
const p = 'text-slate-700 text-[0.8rem] sm:text-[0.9rem] leading-relaxed mb-1'

function List({ items }: { items: string[] }) {
  return (
    <>
      {items.map((t, i) => (
        <p key={i} className={p}>
          {t}
        </p>
      ))}
    </>
  )
}

const intro = [
  '• What to Expect on the Day of Your Surgery',
  '• What to Expect in the Operating Room',
  '• What to Expect After Your Surgery',
  '• When You Go Home After Your Surgery',
]

const before = [
  '• Prepare your home living space appropriately for yourself for when you come home after the surgery. If possible, avoid climbing the stairs.',
  '• Make sure you have planned with your family members and/ or friends to help take care of you and stay with you when you come home after the surgery.',
  '• Plan to wear loose and comfortable clothing that is easy to change in and out of and do not wear any make up, nail polish or apply any creams on the day of your surgery. The colour of your skin, lips and nails is important to the anaesthesiologist (doctor specially trained to keep you unconscious or free from pain during the surgery).',
  '• Purchase a cane, walker or crutches in advance of the surgery, if advised.',
  '• Stop smoking before the surgery and through the recovery process. Discuss this with your surgeon.',
  '• Maintain a steady weight and a healthy diet for a minimum of three months prior to the surgical procedure. Good nutrition is essential in proper healing following your surgery.',
  '• Your surgeon will ask you to visit the Anaesthesia Clinic for a routine check-up at least a day before your scheduled surgery date. This check-up is necessary to ensure that you are in a suitable condition for anaesthesia and surgery. It will also help reduce any delay that may result due to any special tests that are required before surgery. The anaesthesiologist will inform you about any pain you may feel after the surgery and how it can be managed.',
  '• You may need to stop taking certain kinds of medication before your surgery. This may be in order to prevent excessive bleeding and avoid any complications. Discuss this with your surgeon.',
  '• You may be asked to take certain medications prior to your surgery. This may be in order to prevent blood clotting and avoid any complications. Discuss this with your surgeon.',
  '• Visit the Patient Admission Office to register at least a day before your scheduled admission date. Let them know your choice of accommodation (general ward, semi-private or private). This will help avoid any inconvenience.',
  '• Call the hospital ward at least six hours prior to arrival to reconfirm your admission. Unfortunately, there may be occasions when scheduled patient surgery times may have to be changed due to other unexpected emergencies.',
  '• Check your hospital admission details (Surgeon Name, Admission Time, Ward or Room Location).',
  '• Do not drink or eat anything for at least 6 hours before your surgery or as advised by the surgeon.',
  '• If you feel sick and have a fever on the day of or several days before your surgery, call your surgeon or the Hospital immediately. We may need to reschedule.',
]

const dayOf = [
  '• You should arrive at the Hospital at the appointed time to allow our staff sufficient time to prepare you for the surgery. Punctuality is essential. Arriving late to the Hospital may delay or postpone your surgery.',
  '• Let the ward receptionist know that you have arrived.',
  '• You will not be allowed to drink or eat anything for at least 6 hours before your surgery.',
  '• You will be asked to observe the following standard practices:',
  '1. Remove any jewellery (e.g. watch, earrings, necklace, bracelet, nose ring) from the body.',
  '2. Remove any make-up and or nail polish.',
  '3. Remove dentures and/ or braces.',
  '4. Refrain from applying any perfumes, deodorants or body lotions.',
  '• You will get an identification name band that you must wear around your wrist at all times. Please check that your information has been captured correctly.',
  '• You will be asked to change into hospital clothing that will be provided.',
  '• Be prepared for repeated questions from various members of our medical staff. You may find the repeated questions a bit bothersome, but please note that this process is necessary before the surgery to ensure patient safety.',
  '• Your family members, attendants or visitors will not be able to accompany you to the surgery area.',
  '• The surgeon (doctor specially trained to perform your surgery) may come and speak with you.',
  '• The anaesthesiologist (doctor specially trained to keep you unconscious or free of pain during the surgery) may come and speak with you.',
  '• You may be given some medication to make you feel a little drowsy before you are taken to the operating room.',
  '• You will most likely have an IV needle (intravenous catheter), placed before the surgery. This allows fluids and medications to be delivered quickly and safely through your vein.',
  '• Depending on your health and the length or type of surgical procedure, you may have a catheter (tube) inserted through your urethra into your bladder after you have received anesthesia, so you will not feel or remember it. Your body always makes urine and the volume you make is a sign of the state of your health. The amount of urine passing through the catheter may be measured during surgery. The catheter may be in place when you wake up, but it will be removed as soon as it is safe to do so.',
  '• You may have time to relax before surgery. You will be escorted to the operating room by our nursing staff. In the event of any delays, you will be informed.',
]

const operatingRoom = [
  '• In the operating room you may be fully unconscious (general anaesthesia) or if you are having a procedure that requires you to be awake, you will be given medicine that will put a part of your body to sleep so that you feel no pain (local anaesthesia).',
  '• The operating room team is highly trained and specialized in surgery, comprised of the leading surgeon(s), possibly some assisting surgeons, technicians and nurses.',
  '• All of the operating room staff members work to maintain a sterile field during your operation; they wear a mask over their nose and mouth, a full hood covering over their head, sterile gloves and a gown.',
  '• Disposable supplies are supplied sterile from the manufacturer and they are stored with protective coverings to keep them sealed until use. Reusable instruments are thoroughly cleaned, inspected, packaged and sterilized by the hospital before each use. Our hospital has systems in place to monitor and ensure that all items are processed completely so they are safe for you.',
  '• During the surgery, your vital signs are continuously measured using our modern automatic devices and monitored by the operating team. Vital signs include temperature, heart rate (pulse), breathing rate (respirations), blood pressure and presence of pain. Your heart rhythm (EKG) and blood oxygen saturation (pulse-oximetry) may also be measured. If changes in your vital signs indicate a danger to your health and safety, the anesthesiologist will begin appropriate treatment to correct it.',
]

const after = [
  '• After your surgery, you will be taken to the recovery room where you will be kept under the close observation of our doctors and nurses. If needed, you may be taken to one of our critical care areas to ensure that you receive any extra medical attention. The time you spend in the recovery room will depend on the type and length of your surgery. Your family will not be allowed to enter the recovery room.',
  '• You may experience some shivering as you wake up from a general anaesthetic. Your body\'s internal thermostat that keeps you warm is not working when you are anaesthetized, so your temperature can decrease. If you do awaken shivering, we will warm you in the recovery room with a warming blanket and you may receive medication to decrease the symptoms.',
  '• You may feel nausea (vomiting) after the surgery.',
  '• When the doctors and nurses feel you are stable, you will be moved back to the ward or room.',
  '• You will likely have a surgical dressing that covers the incisions and stiches on your body where the surgeon has operated.',
  '• You may feel some discomfort and pain. Our medical staff will do their best to help you manage any pain.',
]

export default function SurgeryPage() {
  return (
    <>
      <AboutHero title="Protocol" icon="/images/bedSun.PNG" iconAnimation="float" />

      <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
        <ScaleOnLarge>
          <div className="max-w-[1200px] mx-auto">
            <h3 className={h}>Prepare for Your Surgery</h3>
            <p className={p}>
              Patients can do their part in taking measures to ensure a successful outcome after
              the surgery, in the days leading up to the surgery. • Before Arriving to the
              Hospital for Your Surgery
            </p>
            <List items={intro} />

            <h3 className={h}>Before Arriving to the Hospital for Your Surgery</h3>
            <List items={before} />

            <h3 className={h}>What to Expect on the Day of Your Surgery</h3>
            <List items={dayOf} />

            <h3 className={h}>What to Expect in the Operating Room</h3>
            <List items={operatingRoom} />

            <h3 className={h}>What to Expect After Your Surgery</h3>
            <List items={after} />

            <h3 className={h}>When You Go Home After Your Surgery</h3>
            <p className={p}>
              It is crucial that you follow the guidance of your surgeon on how to manage and take
              care of the dressing. Positioning your body correctly when sitting and lying down
              after your surgery is very important. Follow your surgeon&apos;s instructions on how
              best to position yourself in order to ease the pain and support proper healing.
              Strenuous exercise may have to be limited for a minimum of 6 weeks after your
              surgery. You may also need time off from work in order to facilitate the healing
              process. Your surgeon will advise you about your activity, the time you may need for
              proper recovery according to your particular situation and when you can return to
              work or to your usual household chores. Healing can be a slow and gradual process,
              and it can take anywhere from a few weeks to several months until you fully recover.
              However, most people are generally content after a surgery. It is important that you
              keep up with a nutritious and healthy diet, and regular exercise in order to
              maintain the outcome. We wish you a speedy recovery.
            </p>

            <p className={`${p} mt-6 text-slate-900`}>
              Please also read the information on{' '}
              <Link href="/protocols/hospital-stay" className="underline">
                Prepare for your Hospital Stay
              </Link>
            </p>
          </div>
        </ScaleOnLarge>
      </section>
    </>
  )
}