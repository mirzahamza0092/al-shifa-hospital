import AboutHero from '@/components/about/AboutHero'
import DocumentCard from '@/components/about/DocumentCard'
import { missionVision } from '@/data/documents'

export default function MissionVisionPage() {
  return (
    <>
      <AboutHero
        title={missionVision.heroTitle}
        icon={missionVision.heroIcon}
        iconAnimation={missionVision.heroIconAnimation}
      />
      <DocumentCard doc={missionVision} />
    </>
  )
}