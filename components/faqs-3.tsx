'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'clock',
            question: "Pourquoi choisir Wii Studio plutôt qu'une autre agence?",
            answer: "Parce qu'on comprend le sport. Nos clients le savent. Hidalgo Academy, Bourgo Arena, Ismaël Gharbi - ce ne sont pas des hasards. C'est de l'expertise.",
        },
        {
            id: 'item-2',
            icon: 'credit-card',
            question: 'On peut avoir une évaluation de notre présence actuelle?',
            answer: 'Oui. Une consultation gratuite pour analyser votre site, vos réseaux, votre stratégie actuelle et identifier les opportunités.',
        },
        {
            id: 'item-3',
            icon: 'truck',
            question: 'Combien de ressources mobilisez-vous pour suivre notre projet?',
            answer: 'Vous avez un point de contact dédié et une équipe dédiée selon la complexité du projet. Réunions mensuelles structurées pour suivi et validation. Pas de réunion inutile.',
        },
        {
            id: 'item-4',
            icon: 'globe',
            question: 'Comment se déroule la première consultation?',
            answer: "Audit gratuit de votre présence digitale actuelle (site, réseaux, stratégie). Analyse des opportunités. Proposition d'un plan d'action adapté. Zéro obligation.",
        },
        {
            id: 'item-5',
            icon: 'package',
            question: "Travaillez-vous avec des clubs à l'international?",
            answer: "Oui. Notre expertise s'étend internationalement. Décalage horaire géré selon vos besoins.",
        },
    ]

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Can't find what you're looking for? Contact our{' '}
                                <Link
                                    href="#"
                                    className="text-primary font-medium hover:underline">
                                    customer support team
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
