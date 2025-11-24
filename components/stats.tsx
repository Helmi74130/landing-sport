'use client';
import { motion, Variants, animate, useMotionValue, useTransform } from 'motion/react';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function StatsSection() {
    const t = useTranslations('stats');
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const headingVariants: Variants = {
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

    const statVariants: Variants = {
        hidden: { opacity: 0, scale: 0.5, y: 60 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 12,
            },
        },
    };

    // Counter animations
    const count1 = useMotionValue(0);
    const rounded1 = useTransform(() => Math.round(count1.get()));

    const count2 = useMotionValue(0);
    const rounded2 = useTransform(() => Math.round(count2.get()));

    const count3 = useMotionValue(0);
    const rounded3 = useTransform(() => Math.round(count3.get()));

    useEffect(() => {
        const controls1 = animate(count1, 120, { duration: 2.5, delay: 0.5 });
        const controls2 = animate(count2, 33, { duration: 2.5, delay: 0.7 });
        const controls3 = animate(count3, 99, { duration: 2.5, delay: 0.9 });

        return () => {
            controls1.stop();
            controls2.stop();
            controls3.stop();
        };
    }, []);

    return (
        <section className="py-12 md:py-20">
            <motion.div
                className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div
                    className="relative z-10 mx-auto max-w-xl space-y-6 text-center"
                    variants={containerVariants}
                >
                    <motion.h2
                        variants={headingVariants}
                        className="text-4xl font-medium lg:text-5xl"
                    >
                        {t('title')}
                    </motion.h2>
                    <motion.p variants={headingVariants}>
                        {t('subtitle')}
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0"
                    variants={containerVariants}
                >
                    <motion.div
                        className="space-y-4"
                        variants={statVariants}
                    >
                        <motion.div className="text-5xl font-bold">
                            +<motion.span>{rounded1}</motion.span>
                        </motion.div>
                        <motion.p variants={headingVariants}>
                            {t('projects')}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="space-y-4"
                        variants={statVariants}
                    >
                        <motion.div className="text-5xl font-bold">
                            +<motion.span>{rounded2}</motion.span>
                        </motion.div>
                        <motion.p variants={headingVariants}>
                            {t('countries')}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="space-y-4"
                        variants={statVariants}
                    >
                        <motion.div className="text-5xl font-bold">
                            <motion.span>{rounded3}</motion.span>%
                        </motion.div>
                        <motion.p variants={headingVariants}>
                            {t('satisfaction')}
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}