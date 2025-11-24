'use client';
import { motion, Variants } from 'motion/react';
import { useTranslations } from 'next-intl';

export default function TestimonialsSection() {
    const t = useTranslations('testimonials');
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40, rotateX: -20 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -15 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 12,
            },
        },
    };

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    className="mx-auto max-w-2xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.blockquote variants={itemVariants}>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg font-semibold sm:text-xl md:text-3xl"
                        >
                            {t('quote')}
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="mt-12 flex items-center gap-6"
                        >
                            <motion.img
                                variants={imageVariants}
                                style={{ filter: 'brightness(0) invert(1)', height: '40px', width: 'auto' }}
                                className="h-7 w-fit dark:invert"
                                src="/Hida.svg"
                                alt="Hidalgo logo"
                                height="20"
                                width="auto"
                            />
                            <motion.div
                                variants={itemVariants}
                                className="space-y-1 border-l pl-6"
                            >
                                <motion.cite
                                    variants={itemVariants}
                                    className="font-medium block"
                                >
                                    {t('author')}
                                </motion.cite>
                                <motion.span
                                    variants={itemVariants}
                                    className="text-muted-foreground block text-sm"
                                >
                                    {t('role')}
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    </motion.blockquote>
                </motion.div>
            </div>
        </section>
    )
}