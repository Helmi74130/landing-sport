import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface ContentSectionProps {
  title: string
  description: string
  image?: string
  video?: string
  buttonText?: string
  buttonLink?: string
}

export default function ContentSection({
  title,
  description,
  image,
  video,
  buttonText = "Learn More",
  buttonLink = "#",
}: ContentSectionProps) {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">

        {/* Image OU vidéo */}
        {video ? (
          <video
            className="rounded-(--radius) w-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            className="rounded-(--radius) w-full object-cover"
            src={image}
            alt={title}
            loading="lazy"
          />
        )}

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">{title}</h2>
          <div className="space-y-6">
            <p>{description}</p>

            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href={buttonLink}>
                <span>{buttonText}</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
