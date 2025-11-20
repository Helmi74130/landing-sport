'use client';
import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'
import { TextEffect } from "@/components/ui/text-effect";
import { useInView } from 'motion/react' 
import { useRef } from 'react'
import {AnimatedGroup} from './ui/animated-group';
import {motion, Variants } from 'motion/react';


export default function Features() {
    const ref = useRef(null);
    const cardsRef = useRef(null);
    const inView = useInView(cardsRef, { once: true });

    const epicVariants: {
        container?: Variants;
        item?: Variants;
    } = {
        container: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.1,
                },
            },
        },
        item: {
            hidden: {
                opacity: 0,
                y: 150,
                rotateZ: -25,
                scale: 0.3,
                filter: 'blur(15px)',
            },
            visible: {
                opacity: 1,
                y: 0,
                rotateZ: 0,
                scale: 1,
                filter: 'blur(0px)',
                transition: {
                    type: 'spring',
                    stiffness: 80,
                    damping: 12,
                    duration: 0.8,
                },
            },
        },
    };
    
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
                        trigger={true}
                        className="text-balance text-4xl font-medium lg:text-5xl"
                    >
                        La solution complète pour propulser votre club de sport
                    </TextEffect>
                    <p>Wii Studio évolue pour devenir bien plus qu'une agence. Nous proposons un écosystème complet de services digitaux pour aider les clubs de sport à innover et se développer.</p>
                </div>

                <div ref={cardsRef}>
                    {inView && (
                        <AnimatedGroup
                            variants={epicVariants}
                            className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3"
                            asChild="div"
                        >
                            <motion.div className="space-y-3 group relative cursor-pointer hover:scale-105 transition-transform duration-300"
                                whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
                                <div className="relative z-10 flex items-center gap-2">
                                    <motion.div whileHover={{ scale: 1.4, rotate: 15 }} transition={{ duration: 0.3 }}>
                                        <Zap className="size-4 text-blue-500" />
                                    </motion.div>
                                    <h3 className="text-sm font-medium">Site Web</h3>
                                </div>
                                <p className="text-sm">Créez une vitrine digitale qui attire et convertit vos futurs membres 24/7.</p>
                            </motion.div>

                            <motion.div className="space-y-2 group relative cursor-pointer hover:scale-105 transition-transform duration-300"
                                whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2)' }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
                                <div className="relative z-10 flex items-center gap-2">
                                    <motion.div whileHover={{ scale: 1.4, rotate: 15 }} transition={{ duration: 0.3 }}>
                                        <Cpu className="size-4 text-purple-500" />
                                    </motion.div>
                                    <h3 className="text-sm font-medium">App Mobile</h3>
                                </div>
                                <p className="text-sm">Fidélisez vos membres avec une application dédiée pour réservations et suivi.</p>
                            </motion.div>

                            <motion.div className="space-y-2 group relative cursor-pointer hover:scale-105 transition-transform duration-300"
                                whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.2)' }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
                                <div className="relative z-10 flex items-center gap-2">
                                    <motion.div whileHover={{ scale: 1.4, rotate: 15 }} transition={{ duration: 0.3 }}>
                                        <Fingerprint className="size-4 text-pink-500" />
                                    </motion.div>
                                    <h3 className="text-sm font-medium">Stratégie</h3>
                                </div>
                                <p className="text-sm">Développez votre club avec un plan marketing sur-mesure et orienté résultats.</p>
                            </motion.div>

                            <motion.div className="space-y-2 group relative cursor-pointer hover:scale-105 transition-transform duration-300"
                                whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.2)' }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
                                <div className="relative z-10 flex items-center gap-2">
                                    <motion.div whileHover={{ scale: 1.4, rotate: 15 }} transition={{ duration: 0.3 }}>
                                        <Pencil className="size-4 text-green-500" />
                                    </motion.div>
                                    <h3 className="text-sm font-medium">Design</h3>
                                </div>
                                <p className="text-sm">Démarquez-vous avec une identité visuelle percutante qui reflète vos valeurs.</p>
                            </motion.div>

                            <motion.div className="space-y-2 group relative cursor-pointer hover:scale-105 transition-transform duration-300"
                                whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.2)' }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
                                <div className="relative z-10 flex items-center gap-2">
                                    <motion.div whileHover={{ scale: 1.4, rotate: 15 }} transition={{ duration: 0.3 }}>
                                        <Settings2 className="size-4 text-orange-500" />
                                    </motion.div>
                                    <h3 className="text-sm font-medium">Vidéo</h3>
                                </div>
                                <p className="text-sm">Captez l'attention et boostez vos conversions avec du contenu vidéo impactant.</p>
                            </motion.div>

                            <motion.div className="space-y-2 group relative cursor-pointer hover:scale-105 transition-transform duration-300"
                                whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(234, 179, 8, 0.2)' }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
                                <div className="relative z-10 flex items-center gap-2">
                                    <motion.div whileHover={{ scale: 1.4, rotate: 15 }} transition={{ duration: 0.3 }}>
                                        <Sparkles className="size-4 text-yellow-500" />
                                    </motion.div>
                                    <h3 className="text-sm font-medium">Community Management</h3>
                                </div>
                                <p className="text-sm">Engagez votre communauté et transformez vos membres en ambassadeurs.</p>
                            </motion.div>
                        </AnimatedGroup>
                    )}
                </div>
            </div>
        </section>
    )
}