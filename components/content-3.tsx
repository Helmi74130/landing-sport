'use client';
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion, Variants } from 'motion/react';

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
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-16 md:py-32">
      <motion.div
        className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image OU vidéo */}
        {video ? (
          <motion.video
            variants={imageVariants}
            className="rounded-(--radius) w-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <motion.img
            variants={imageVariants}
            className="rounded-(--radius) w-full object-cover"
            src={image}
            alt={title}
            loading="lazy"
          />
        )}

        <motion.div
          variants={itemVariants}
          className="grid gap-6 md:grid-cols-2 md:gap-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-medium"
          >
            {title}
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.p variants={itemVariants}>
              {description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="gap-1 pr-1.5 cursor-pointer"
              >
                <Link href={buttonLink}>
                  <span>{buttonText}</span>
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <ChevronRight className="size-2" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}