import AboutHero from '@/components/about/AboutHero'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'

const h = 'mt-6 mb-3 text-[#00507c] font-bold text-base sm:text-lg'
const p = 'text-slate-700 text-[0.8rem] sm:text-[0.9rem] leading-relaxed mb-1'

function Line({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <p className={p}>
      {parts.map((part, i) =>
        part.startsWith('**') ? (
          <b key={i} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </b>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <>
      {items.map((t, i) => (
        <Line key={i} text={t} />
      ))}
    </>
  )
}

const intro = [
  '• Before Arriving to the Hospital',
  '• What to Bring to the Hospital',
  '• What NOT to Bring to the Hospital',
  '• What You Can Expect When You Arrive at the Hospital',
  '• What You Can Expect During Your Hospital Stay',
  '• What You Can Expect During Hospital Discharge',
]

const before = [
  '• Visit the patient Admission Office to register and collect your Admission Letter at least one day before your scheduled admission date. Let them know your choice of accommodation (general ward, semi-private or private). This will help avoid any inconvenience.',
  '• Call the hospital patient ward at least 6 hours prior to arrival to reconfirm your admission. Unfortunately, there may be times when scheduled patient admissions may have to be changed due to other unexpected emergencies.',
  '• Check your hospital admission details (Doctor Name, Admission Time, Ward or Room Location).',
]

const bring = [
  '• Your Registration Card, you will need your Medical Record (MR) number and your Admission Letter.',
  '• Any relevant health reports, x-ray films, diagnostic or laboratory reports.',
  '• Signed letter from your employer if your organisation has an agreement or Memorandum of Understanding (MOU) with the Pakistan Airforce Hospital clearly indicating the accommodation recommended.',
  '• Any medicines that you regularly take or have been advised to take in preparation for the treatment, procedure or surgery (e.g. inhalers, eye drops, creams, lotions). These should be in their original containers.',
  '• Brush, comb, tooth brush, tooth paste, dentures, soap, shaving kit, bath towel, creams, lotions, cosmetics and any necessary personal items.',
  '• Undergarments, nightgown and bedroom slippers.',
  '• Comfortable clothing and shoes for you to wear when you are discharged.',
  '• Spectacles, hearing aids and/or dentures. (Please ask the nursing staff to provide you with protective containers for the dentures). Please keep these items within your reach, to prevent misplacing them.',
  '• Mobile phone and charger.',
  '• Contact information and telephone numbers of family members and friends that you may need.',
  '• Reading material (magazines and books).',
  '• Small amount of cash for any purchases you wish to make from the hospital.',
  'Please limit the number of personal items you bring to the hospital. Any suitcases or large bags will have to be unpacked, taken home and can be brought back when required at the time of discharge.',
]

const notBring = [
  '• Valuables (jewellery items, cheque books or credit cards).',
  '• Large sums of cash money.',
  '• Food items, unless discussed with the nurse in charge.',
  '• Unnecessary extra clothing items.',
  '• Alcohol, cigarettes, tobacco or pipes.',
  '• Electrical appliances (excluding electrical shavers).',
  '• Weapons and firearms.',
]

const arrive = [
  '• Visit the patient Admission Office to register, if you haven\'t done so already. You will be required to deposit the payment (either partially or in full, depending on the case) to register the patient and get admission.',
  '• When you arrive at the ward, the nurse will show you to your hospital bed. All our hospital ward areas are air-conditioned for your comfort and convenience.',
  '• All patient beds are fitted with side rails for your safety. You will have an adjustable over-the-bed table where your meals will be served.',
  '• Beside your bed and in the bathroom is an emergency call bell that you can use to request for assistance.',
  '• The staff will show you where you may unpack your personal items. Please store them safely especially when leaving your bed. The hospital cannot take responsibility, for the theft, loss or damage to any personal belongings.',
  '• You will get an identification name band that you must wear around your wrist at all times. Please check that it captures your information correctly.',
  '• You will be asked to change into hospital clothing that will be provided.',
  '• A member of the nursing or ward staff will help you feel comfortable and settled in.',
  '• Your doctor, nurse and/ or patient care coordinator will come to see you to discuss the purpose of your stay and details of any planned treatment, procedure or surgery.',
]

const during = [
  '• **Your quality care, comfort and safety are our priority:** Our hospital staff will do their best to make your stay as comfortable as possible. The Pakistan Airforce Hospital prides itself on maintaining high quality medical standards and for which we request cooperation from patients, families, attendants and visitors in following our guidelines.',
  '• **Your Medical Team is responsible for your care:** A team of doctors, nurses, residents, allied health and administrative professionals will care for you during your stay. The doctors and nurses will come and visit you as part of the daily rounds and may be accompanied by the doctors in training. Our staff members work in shifts so you will see a different team of care providers after every shift. Do not let this alarm you. They discuss the details of every patient at the time of shift change over, to ensure that your care is smooth and uninterrupted. All our staff members are required to wear their identity badges at all times when on duty. You can recognize them by checking the name, job title, and photograph on the badge. Should you have any questions about your care provider, please do not hesitate to ask them to show you the badge or ask your nurse for information.',
  '• **Infection prevention and control to stop the spread of germs in the hospital is taken seriously:** Patients may be more prone to become infected because their immune system cannot fight infections effectively. We take appropriate measures to ensure that other patients, visiting family members, attendants and visitors are not put at any risk. A patient may need to be quarantined (kept away from other patients and people) to stop the spread of an infection.',
  '• **Housekeeping staff works hard to keep our hospital clean:** You are requested to allow the housekeeping staff to change your sheets and clean your bed and table areas as required. Please alert the ward staff if housekeeping is required in case of any spillage or other need. Please place all rubbish in the dustbins provided and help keep our hospital clean.',
  '• **Family members, attendants and visitors are welcome but should please note the following:**',
  '1. Only one family member or attendant is permitted to stay with the patient at all times unless otherwise allowed by the nurse in-charge. During medical visits, nursing visits and housekeeping hours, the family member or attendant will be requested to leave the area.',
  '2. Do not visit the patient if you are sick, have an infection, fever, diarrhoea or are suffering from a cold or cough.',
  '3. A patient can have a maximum of two visitors at any one time. Visitors are requested to follow the visitor timings. Visitors may not be allowed outside these timings to help the patient rest and allow the medical staff to do their work.',
  '4. In order to maintain the privacy and dignity of the female patients admitted in the Gynae ward, HUSBANDS AND MALE ATTENDANTS will be allowed during visiting hours only. Your support and cooperation is appreciated.',
  '5. Children under age 12 are not allowed to visit the patient. Patients can visit their children in the hospital courtyards if they are able to walk or can sit in a wheelchair. A family member or attendant must provide assistance.',
  '7. Do not sit on the patient bed to prevent transfer of infection.',
  '8. No food from outside the hospital should be brought into the ward for patients as this may interfere with their treatment and nutrition plan.',
  '9. No smoking is allowed inside any hospital area or outside on our hospital grounds.',
  '10. No weapons or firearms are allowed inside any hospital area or outside on our hospital grounds.',
  '11. Refrain from chewing tobacco, spitting tobacco and littering the hospital grounds.',
  '• **Hospital meals are designed to suit the patient\'s nutritional needs:** Our nutritionists (dieticians) work closely with our Food and Nutrition Services to ensure that all our patients receive nutritious meals that are suitable for their health status. All food items served will be charged to your final bill.',
  '• **Pharmacy services for admitted patients are 24/7:** Our pharmacies can promptly dispense medicines as they are ordered by your doctor. The medicines are delivered to your ward and the nurse will ensure that you receive the medication as advised. All our medicines are acquired from an authorized source and can be trusted for delivering the desired therapeutic benefit.',
  '• **FREE Wi-fi services may be available:** Please contact your nursing counter in the ward to find out if this service is available in the hospital',
]

const discharge = [
  '• To help you plan your discharge from the hospital, you will be given an estimated date for discharge within 24 hours of your admission. We try our best to discharge all patients by noon on the day you are due to leave hospital.',
  '• You will be expected to settle your hospital bill before leaving to go home.',
  '• Our pharmacy can provide any medicines that have been prescribed for you to take home.',
  '• You may be provided with relevant instructions and discharge summary (e.g. diet, medications, wound care) for you to follow at home.',
  '• You may be provided with equipment specific to your aftercare.',
  '• Make sure you take all your items including any valuables and money home with you.',
  '• You will receive a discharge summary stating that you have been discharged from the Hospital.',
  '• Our staff will schedule a follow up appointment for you to return to see the doctor in the clinic if necessary.',
  '• You will be expected to make your own transport arrangements to go home. Our staff will inform you if there is a specific medical need and you require an ambulance service to take you home.',
]

export default function HospitalStayPage() {
  return (
    <>
      <AboutHero title="Protocol" icon="/images/bedSun.PNG" iconAnimation="float" />

      <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
        <ScaleOnLarge>
          <div className="max-w-[1200px] mx-auto">
            <h3 className={h}>Prepare for Your Hospital Stay</h3>
            <Line text="Here are some guidelines to help you prepare for your hospital stay." />
            <List items={intro} />

            <h3 className={h}>Before Arriving to the Hospital</h3>
            <List items={before} />

            <h3 className={h}>What to Bring to the Hospital</h3>
            <List items={bring} />

            <h3 className={h}>What NOT to Bring to the Hospital</h3>
            <List items={notBring} />

            <h3 className={h}>What You Can Expect When You Arrive at the Hospital</h3>
            <List items={arrive} />

            <h3 className={h}>What You Can Expect During Your Hospital Stay</h3>
            <List items={during} />

            <h3 className={h}>What You Can Expect During Hospital Discharge</h3>
            <List items={discharge} />

            <p className={`${p} mt-6`}>We wish you a comfortable hospital stay and speedy recovery.</p>
          </div>
        </ScaleOnLarge>
      </section>
    </>
  )
}