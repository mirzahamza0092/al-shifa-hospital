import AboutHero from '@/components/about/AboutHero'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'

const h = 'mt-8 mb-3 text-[#00507c] font-bold text-lg sm:text-xl'
const sub = 'mt-4 mb-2 text-[#00507c] font-bold text-[0.95rem] sm:text-base'
const p = 'text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed mb-1'

const preparingEndoscopy = [
  '• If you are suffering from a gastrointestinal medical condition (related to your oesophagus, stomach, or colon) that requires diagnosis or treatment, you may be scheduled for an endoscopy.',
  '• An endoscopy can also be used to diagnose diseases of the ear, nose, throat, heart, urinary tract, joints, and abdomen.',
  '• Endoscopy can be a nonsurgical or a minimally invasive surgical procedure that allows the doctor to examine, remove tissues or treat the body areas using an endoscope. The endoscope is a flexible tube with a powerful light and camera attached to it. The endoscope is inserted into the body through small incisions or natural body openings and allows your doctor to view pictures of your digestive tract on a display monitor.',
  '• If you are taking medications, you may be asked to stop. You will be asked to stop taking blood-thinning medicines a few days before the surgery, as these increase the chances of bleeding.',
  '• You should inform your doctor if you have any medication allergies or have had any adverse reactions to medications.',
  '• You should inform your doctor if you are pregnant or have any other medical condition so that special precautions can be taken.',
  '• You may need to fast for 4 to 8 hours before the procedure to ensure your stomach is empty, if you are having an upper gastrointestinal endoscopy.',
  '• For a colonoscopy:',
  '1. You will be asked to change your diet a few days before the procedure. Changes will include elimination of fibre and foods with small seeds.',
  '2. You may be given a laxative to take the night before coming in for the procedure. You may also be asked to drink a cleansing solution to clean out your bowel.',
  '3. You may be given an enema 2 to 3 hours before the procedure.',
  '4. You may undergo a rectal examination to help the doctor look for any bleeding or abnormal growths.',
]

const duringEndoscopy = [
  '• You may receive anaesthesia and/ or a sedative depending on the type of endoscopy. Anaesthesia blocks the awareness of pain. A sedative relaxes you. The sedative may make you feel lethargic and slow after the procedure and usually takes 24 hours to wear off.',
  '• The effects of sedatives may be manipulated by other medications. To avoid such issues, please inform your doctor about any other medications you are taking.',
  '• Throughout the procedure, our health care team will monitor your temperature, blood pressure, and heart rate.',
  '• Your doctor will review and, in some cases, record the images from the endoscope. He or she will also perform any procedures, such as collecting tissue for testing.',
]

const afterEndoscopy = [
  '• After the endoscopy, you will be taken to rest in a recovery area.',
  '• You may experience some mild side effects depending on the type of endoscopy. These can include but are not limited to, a sore, dry throat or bloating and gas.',
  '• Complications from an endoscopy are uncommon, but they can happen. They can include a hole or tear in the area being examined, bleeding, and infection.',
  '• Talk with your doctor right away if you have any of the following symptoms:',
  '1. Fever',
  '2. Vomiting',
  '3. Chest pain',
  '4. Abnormal stool',
  '5. Shortness of breath',
  '6. Severe abdominal pain or other unusual symptoms',
]

const preparingDialysis = [
  '• The Dialysis Ward is an outpatient facility that seeks to provide the best care possible for patients who have kidney disease or kidney failure. Our medical team of doctors, nurses and technicians are highly experienced and trained to ensure the comfort and convenience of every patient at each dialysis station.',
  '• Dialysis keeps your body in balance by removing waste products, salt and extra fluids from your blood, to prevent them from building up when your kidneys can no longer do this. It also helps in keeping a safe level of certain chemicals in your blood, such as potassium, sodium and bicarbonate and in controlling your blood pressure.',
  '• At Pakistan Airforce Hospital, we offer services for haemodialysis.',
  '• In haemodialysis, a machine acts as an artificial kidney to remove waste and excess fluids and chemicals from your blood. Before you can begin your first haemodialysis session, you will need to have minor surgery in your arm or leg to make an access (entrance) into your blood vessels. This access site will be used to connect you to the dialysis machine and is the site where blood and fluids will flow in and out of your body.',
  '• Before coming to the Dialysis Session,',
  '1. You will be asked to restrict the amount of water you drink, depending on your weight. This is to prevent the excess accumulation of fluid in the body.',
  '2. You will be asked to follow a strict nutritional food plan, to prevent the build-up of minerals (including sodium, potassium and phosphorus) in the body.',
]

const duringDialysis = [
  '• You will sit or lie on a bed.',
  '• You will be able to read, use your mobile phone and listen to music or go to sleep.',
  '• You may feel dizzy or have muscle cramps caused by the rapidly changing blood fluid levels in your body.',
  '• Each haemodialysis treatment lasts about four hours and may be done three times per week. The time needed for your dialysis depends on:',
  '1. How well your kidneys work',
  '2. How much fluid weight you gain between treatments',
  '3. How much waste you have in your body',
  '4. The size of your body.',
]

const afterDialysis = [
  '• Our medical team at the Hospital will guide you on the care you will need to take at home to prevent issues with changes in blood pressure.',
  '• You will also be educated on how to take care of the dialysis access site to prevent any possible infections.',
]

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

export default function DayCarePage() {
  return (
    <>
      <AboutHero title="Protocol" icon="/images/bedSun.PNG" iconAnimation="float" />

      <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
        <ScaleOnLarge>
          <div className="max-w-[1200px] mx-auto">
            <h3 className={h}>Prepare for Your Day Care Services</h3>
            <p className={p}>
              The Pakistan Airforce Hospital offers Day Care Services for patients who require a
              minor procedure and/ or treatment without the need to stay overnight. If you have
              been scheduled for a day care service, you will have your procedure or treatment and
              be discharged on the same day.
            </p>
            <p className={p}>• Dialysis</p>
            <p className={p}>• Endoscopy</p>

            <h3 className={h}>Endoscopy</h3>

            <h4 className={sub}>Preparing for your endoscopy:</h4>
            <List items={preparingEndoscopy} />

            <h4 className={sub}>What you can expect during the endoscopy:</h4>
            <List items={duringEndoscopy} />

            <h4 className={sub}>What you can expect after the endoscopy:</h4>
            <List items={afterEndoscopy} />

            <h4 className={sub}>Locations:</h4>
            <p className="text-slate-900 text-sm sm:text-[0.95rem]">
              Block C Building – 3rd Floor, The Pakistan Airforce Hospital, Main Margalla Road ,
              Islamabad
            </p>

            <h4 className={sub}>Preparing for your dialysis session:</h4>
            <List items={preparingDialysis} />

            <h4 className={sub}>What to expect during the dialysis session:</h4>
            <List items={duringDialysis} />

            <h4 className={sub}>What to expect after the dialysis session:</h4>
            <List items={afterDialysis} />

            <h4 className={sub}>Locations:</h4>
            <p className="text-slate-900 text-sm sm:text-[0.95rem]">
              Block C Building – 2nd Floor, The Pakistan Airforce Hospital, Main Margalla Road ,
              Islamabad
            </p>
          </div>
        </ScaleOnLarge>
      </section>
    </>
  )
}