import { notFound } from 'next/navigation'
import AboutHero from '@/components/about/AboutHero'
import ContentBlocks from '@/components/services/ContentBlocks'
import FaqAccordion from '@/components/services/FaqAccordion'
import ServiceSidebar from '@/components/services/ServiceSidebar'
import { getServiceDetail } from '@/data/serviceDetails'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const detail = getServiceDetail(slug)

  if (!detail) notFound()

  const hasSide = detail.related.length > 0

  return (
    <>
      <AboutHero
        title="Service Details"
        icon="/images/astrature.png"
        iconAnimation="drive"
      />

      <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
        <ScaleOnLarge>
        <div
          className={`max-w-[1100px] mx-auto grid gap-10 ${
            hasSide ? 'lg:grid-cols-[1fr_320px]' : ''
          }`}
        >
          <div className="min-w-0">
            <img
              src={detail.image}
              alt={detail.title}
              className="w-full h-[220px] sm:h-[300px] md:h-[360px] object-cover rounded-xl"
            />

            <ContentBlocks blocks={detail.content} />

            {detail.faqs.length > 0 && <FaqAccordion faqs={detail.faqs} />}
          </div>

          {hasSide && <ServiceSidebar items={detail.related} />}
        </div>
        </ScaleOnLarge>
      </section>
    </>
  )
}