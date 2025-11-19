'use client';
import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'
import { TextEffect } from "@/components/ui/text-effect";
import { useInView } from 'motion/react' 
import { useRef } from 'react'

export default function Features() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div ref={ref} className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <TextEffect 
                        per="char"
                        preset="fade-in-blur"
                        speedReveal={1}
                        speedSegment={0.5}
                        delay={0.1}
                        trigger={inView}
                        className="text-balance text-4xl font-medium lg:text-5xl"
                    >
                        La solution complète pour propulser votre club de sport
                    </TextEffect>
                    <p>Wii Studio évolue pour devenir bien plus qu'une agence. Nous proposons un écosystème complet de services digitaux pour aider les clubs de sport à innover et se développer.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Site Web</h3>
                        </div>
                        <p className="text-sm">Créez une vitrine digitale qui attire et convertit vos futurs membres 24/7.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">App Mobile</h3>
                        </div>
                        <p className="text-sm">Fidélisez vos membres avec une application dédiée pour réservations et suivi.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />

                            <h3 className="text-sm font-medium">Stratégie</h3>
                        </div>
                        <p className="text-sm">Développez votre club avec un plan marketing sur-mesure et orienté résultats.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />

                            <h3 className="text-sm font-medium">Design</h3>
                        </div>
                        <p className="text-sm">Démarquez-vous avec une identité visuelle percutante qui reflète vos valeurs.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />

                            <h3 className="text-sm font-medium">Vidéo
                            </h3>
                        </div>
                        <p className="text-sm">Captez l'attention et boostez vos conversions avec du contenu vidéo impactant.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Community Management</h3>
                        </div>
                        <p className="text-sm">Engagez votre communauté et transformez vos membres en ambassadeurs.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
