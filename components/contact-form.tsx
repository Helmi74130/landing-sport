'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'motion/react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
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

  const formContainerVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message envoyé avec succès! Nous vous répondrons bientôt.',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Une erreur est survenue lors de l\'envoi.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Impossible de se connecter au serveur. Veuillez réessayer.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-12" variants={containerVariants}>
          <motion.h2
            variants={headingVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Contactez-nous
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg"
          >
            Une question ? Un projet ? N&apos;hésitez pas à nous écrire.
          </motion.p>
        </motion.div>

        <motion.div
          variants={formContainerVariants}
          className="bg-card border rounded-lg p-8 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom */}
            <motion.div variants={itemVariants}>
              <motion.label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                whileHover={{ x: 5 }}
              >
                Nom complet *
              </motion.label>
              <motion.input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="Jean Dupont"
                whileFocus={{ scale: 1.02, boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <motion.label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                whileHover={{ x: 5 }}
              >
                Email *
              </motion.label>
              <motion.input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="jean.dupont@exemple.com"
                whileFocus={{ scale: 1.02, boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </motion.div>

            {/* Sujet */}
            <motion.div variants={itemVariants}>
              <motion.label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
                whileHover={{ x: 5 }}
              >
                Sujet
              </motion.label>
              <motion.input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="Demande d'information"
                whileFocus={{ scale: 1.02, boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={itemVariants}>
              <motion.label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
                whileHover={{ x: 5 }}
              >
                Message *
              </motion.label>
              <motion.textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                placeholder="Votre message..."
                whileFocus={{ scale: 1.02, boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </motion.div>

            {/* Message de statut */}
            {status.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
                }`}
              >
                <motion.p
                  className="text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {status.message}
                </motion.p>
              </motion.div>
            )}

            {/* Bouton Submit */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg font-semibold cursor-pointer"
                  size="lg"
                >
                  {isSubmitting ? (
                    <motion.span
                      className="flex items-center justify-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </motion.svg>
                      Envoi en cours...
                    </motion.span>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      Envoyer le message
                    </motion.span>
                  )}
                </Button>
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xs text-muted-foreground text-center"
            >
              * Champs obligatoires
            </motion.p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}