import FAQsThree from "@/components/faqs-3";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-4";
import ContentSection from "@/components/content-3";
import StatsSection from "@/components/stats";
import TestimonialsSection from "@/components/testimonials";
import { TextEffect } from "@/components/ui/text-effect";
import ContactForm from "@/components/contact-form";




export default function PageHome() {
    return (
        <>
            <HeroSection />
            <Features></Features>



            <TestimonialsSection></TestimonialsSection>

            <ContentSection
                title="Découvrez notre univers"
                description="Une vidéo immersive pour présenter votre club."
                video="/Ismaelmontage.mp4"
                buttonText="Voir plus"
                buttonLink="/video"
            />

            <ContentSection
                title="A creative team at your service"
                description="Our designers and developers work hand-in-hand to create unique experiences."
                image="/hidalgo.jpg"
                buttonText="Meet the Team"
                buttonLink="/team"
            />

            <ContentSection
                title="A creative team at your service"
                description="Our designers and developers work hand-in-hand to create unique experiences."
                image="/bourgo.jpg"
                buttonText="Meet the Team"
                buttonLink="/team"
            />
            <StatsSection></StatsSection>
            <FAQsThree></FAQsThree>
            <ContactForm />
        </>
    )
}