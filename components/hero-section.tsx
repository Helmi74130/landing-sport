'use client';
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ChevronRight } from 'lucide-react'
import { TextEffect } from "@/components/ui/text-effect";
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
    const t = useTranslations('hero');

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
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

    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <motion.div
                                className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <TextEffect
                                    as="h1"
                                    per="char"
                                    preset="fade-in-blur"
                                    speedReveal={1}
                                    speedSegment={0.5}
                                    delay={0.2}
                                    className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl"
                                >
                                    {t('title')}
                                </TextEffect>

                                <motion.p
                                    variants={itemVariants}
                                    className="mt-8 max-w-2xl text-balance text-lg"
                                >
                                    {t('subtitle')}
                                </motion.p>

                                <motion.div
                                    variants={itemVariants}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                                    >
                                        <Button
                                            asChild
                                            size="lg"
                                            className="h-12 rounded-full pl-5 pr-3 text-base cursor-pointer"
                                        >
                                            <Link href="#solutions">
                                                <span className="text-nowrap">{t('cta')}</span>
                                                <motion.div
                                                    whileHover={{ x: 5 }}
                                                    transition={{ type: 'spring', stiffness: 400 }}
                                                >
                                                    <ChevronRight className="ml-1" />
                                                </motion.div>
                                            </Link>
                                        </Button>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                                    >
                                        
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>

                        <motion.div
                            className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <video
                                autoPlay
                                muted
                                loop
                                className="size-full object-cover opacity-50 dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                                src="/videohero.mp4"
                            ></video>
                        </motion.div>
                    </div>
                </section>

                <section className="bg-background pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <motion.div
                                className="md:max-w-44 md:border-r md:pr-6"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-end text-sm">{t('trustSection')}</p>
                            </motion.div>

                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}
                                >
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit invert"
                                            style={{
                                                filter: 'brightness(0) invert(1)', height: '40px',
                                                width: 'auto'
                                            }}
                                            src="/ACC.svg"
                                            alt="ACC"

                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit invert"
                                            style={{ filter: 'brightness(0) invert(1)', height: '40px',
                                                width: 'auto' }}
                                            src="/BA.svg"
                                            alt="Column Logo"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit invert"
                                            style={{ filter: 'brightness(0) invert(1)', height: '40px',
                                                width: 'auto' }}
                                            src="/Hida.svg"
                                            alt="Column Logo"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit invert"
                                            style={{ filter: 'brightness(0) invert(1)', height: '40px',
                                                width: 'auto' }}
                                            src="/adagiologo.svg"
                                            alt="Column Logo"
                                        />
                                    </div>
                                    
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}