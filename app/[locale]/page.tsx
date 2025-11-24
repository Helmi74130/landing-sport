'use client';

import FAQsThree from "@/components/faqs-3";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-4";
import ContentSection from "@/components/content-3";
import StatsSection from "@/components/stats";
import TestimonialsSection from "@/components/testimonials";
import ContactForm from "@/components/contact-form";
import { useTranslations } from 'next-intl';




export default function PageHome() {
    const t = useTranslations('cases');

    return (
        <>
            <HeroSection />

            <section id="solutions">
                <Features></Features>
            </section>

            <TestimonialsSection></TestimonialsSection>

            <section id="cases">
                <ContentSection
                    title={t('ismael.title')}
                    description={t('ismael.description')}
                    video="/Ismaelmontage.mp4"
                    buttonText={t('button')}
                    buttonLink="#contact"
                />

                <ContentSection
                    title={t('hidalgo.title')}
                    description={t('hidalgo.description')}
                    video="/hidalgo.mp4"
                    buttonText={t('button')}
                    buttonLink="#contact"
                />

                <ContentSection
                    title={t('bourgo.title')}
                    description={t('bourgo.description')}
                    video="/bourgovideo.mp4"
                    buttonText={t('button')}
                    buttonLink="#contact"
                />
            </section>

            <section id="stats">
                <StatsSection></StatsSection>
            </section>


            <section id="contact">
                <ContactForm />
            </section>

            <FAQsThree></FAQsThree>
        </>
    )
}