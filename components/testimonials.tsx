'use client';
import { motion, Variants } from 'motion/react';

export default function TestimonialsSection() {
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
                            Travailler avec Wii Studio a été comme débloquer un super-pouvoir marketing. C'est la fusion parfaite entre simplicité et performance, nous permettant de remplir nos créneaux et fidéliser nos membres comme jamais.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="mt-12 flex items-center gap-6"
                        >
                            <motion.img
                                variants={imageVariants}
                                className="h-7 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                alt="Nvidia Logo"
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
                                    Zino
                                </motion.cite>
                                <motion.span
                                    variants={itemVariants}
                                    className="text-muted-foreground block text-sm"
                                >
                                    Academic Manager, Hidalgo Academy
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    </motion.blockquote>
                </motion.div>
            </div>
        </section>
    )
}