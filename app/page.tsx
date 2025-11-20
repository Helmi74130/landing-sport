import FAQsThree from "@/components/faqs-3";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-4";
import ContentSection from "@/components/content-3";
import StatsSection from "@/components/stats";
import TestimonialsSection from "@/components/testimonials";
import ContactForm from "@/components/contact-form";




export default function PageHome() {
    return (
        <>
            <HeroSection />

            <section id="solutions">
                <Features></Features>
            </section>
            
            <TestimonialsSection></TestimonialsSection>

            <section id="cases">
                <ContentSection
                    title="ASSOCIATION ISMAËL GHARBI"
                    description="Création et gestion du site web du footballeur international."
                    video="/Ismaelmontage.mp4"
                    buttonText="Voir plus"
                    buttonLink="/video"
                />

                <ContentSection
                    title="HIDALGO ACADEMY"
                    description="Growth marketing et gestion web de l'académie du légendaire Michel Hidalgo. +1.5x augmentation du trafic web"
                    video="/hidalgo.mp4"
                    buttonText="Meet the Team"
                    buttonLink="/team"
                />

                <ContentSection
                    title="BOURGO ARENA"
                    description="Création complète du branding, site web et consulting. Résultat : +1000 inscriptions avant l'ouverture"
                    video="/bourgovideo.mp4"
                    buttonText="Meet the Team"
                    buttonLink="/team"
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