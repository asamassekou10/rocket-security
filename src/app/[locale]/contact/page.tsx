'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  CheckCircle,
  Send,
} from 'lucide-react';
import { useState } from 'react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/alhassane.samassekou@gmail.com';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const formData = new FormData(e.currentTarget);
    formData.append('_subject', '[Rocket Security] Demande contact');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-rocket-black overflow-hidden">
        <div className="gradient-orb gradient-orb-yellow w-[400px] h-[400px] -top-40 left-20 opacity-40" />
        <div className="gradient-orb gradient-orb-gold w-[300px] h-[300px] bottom-0 right-10 opacity-30" />
        <div className="absolute inset-0 tactical-grid opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-rocket-white"
          >
            {t('title')}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 h-1 w-20 bg-rocket-yellow mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-rocket-gray-400 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-rocket-dark relative overflow-hidden">
        <div className="gradient-orb gradient-orb-amber w-[500px] h-[500px] -bottom-40 -left-20 opacity-30" />
        <div className="gradient-orb gradient-orb-yellow w-[400px] h-[400px] top-20 -right-40 opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal direction="left">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-rocket-white uppercase">
                  {t('info_title')}
                </h2>
                <div className="mt-2 h-1 w-12 bg-rocket-yellow" />
              </ScrollReveal>

              {/* Address */}
              <ScrollReveal direction="left" delay={0.1}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rocket-yellow/10 text-rocket-yellow shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-rocket-gray-300 leading-relaxed">
                      {t('address')}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Phone Numbers */}
              <ScrollReveal direction="left" delay={0.2}>
                <div className="space-y-3">
                  {['84 40 40 06', '84 40 40 03', '90 95 95 51'].map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:+223${phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rocket-yellow/10 text-rocket-yellow shrink-0 transition-all group-hover:bg-rocket-yellow group-hover:text-rocket-black">
                        <Phone size={22} />
                      </div>
                      <span className="text-2xl font-bold text-rocket-white group-hover:text-rocket-yellow transition-colors font-[family-name:var(--font-heading)]">
                        {phone}
                      </span>
                    </a>
                  ))}
                </div>
              </ScrollReveal>

              {/* Email */}
              <ScrollReveal direction="left" delay={0.3}>
                <a
                  href="mailto:contact@rocketsecurity.net"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rocket-yellow/10 text-rocket-yellow shrink-0 transition-all group-hover:bg-rocket-yellow group-hover:text-rocket-black">
                    <Mail size={22} />
                  </div>
                  <span className="text-rocket-gray-300 group-hover:text-rocket-yellow transition-colors">
                    contact@rocketsecurity.net
                  </span>
                </a>
              </ScrollReveal>

              {/* Hours */}
              <ScrollReveal direction="left" delay={0.4}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rocket-yellow/10 text-rocket-yellow shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-rocket-gray-400">{t('hours_title')}</p>
                    <p className="text-rocket-white font-semibold">{t('hours')}</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Social */}
              <ScrollReveal direction="left" delay={0.5}>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/MLRocket/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-rocket-gray-800 text-rocket-gray-400 transition-all hover:bg-rocket-yellow hover:text-rocket-black"
                  >
                    <Facebook size={22} />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 rounded-2xl glass"
                >
                  <CheckCircle className="mx-auto h-16 w-16 text-rocket-yellow mb-6" />
                  <p className="text-xl text-rocket-white font-semibold">
                    {t('form.success')}
                  </p>
                </motion.div>
              ) : (
                <ScrollReveal direction="right">
                  <div className="rounded-2xl glass p-8 md:p-10">
                    <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-rocket-white uppercase mb-8">
                      {t('form_title')}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input type="hidden" name="form_type" value="contact" />
                      <div className="hidden" aria-hidden="true">
                        <label htmlFor="contact-website">Website</label>
                        <input id="contact-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
                      </div>
                      {/* Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-rocket-gray-300 mb-2">
                            {t('form.name')} *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            className="w-full rounded-lg border border-rocket-gray-700 bg-rocket-gray-800 px-4 py-3 text-rocket-white placeholder-rocket-gray-400 transition-colors focus:border-rocket-yellow focus:outline-none focus:ring-1 focus:ring-rocket-yellow"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-rocket-gray-300 mb-2">
                            {t('form.email')} *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            className="w-full rounded-lg border border-rocket-gray-700 bg-rocket-gray-800 px-4 py-3 text-rocket-white placeholder-rocket-gray-400 transition-colors focus:border-rocket-yellow focus:outline-none focus:ring-1 focus:ring-rocket-yellow"
                          />
                        </div>
                      </div>

                      {/* Phone & Subject */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-rocket-gray-300 mb-2">
                            {t('form.phone')}
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            className="w-full rounded-lg border border-rocket-gray-700 bg-rocket-gray-800 px-4 py-3 text-rocket-white placeholder-rocket-gray-400 transition-colors focus:border-rocket-yellow focus:outline-none focus:ring-1 focus:ring-rocket-yellow"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-rocket-gray-300 mb-2">
                            {t('form.subject')} *
                          </label>
                          <select
                            name="subject"
                            required
                            className="w-full rounded-lg border border-rocket-gray-700 bg-rocket-gray-800 px-4 py-3 text-rocket-white transition-colors focus:border-rocket-yellow focus:outline-none focus:ring-1 focus:ring-rocket-yellow"
                          >
                            <option value="general">{t('form.subjects.general')}</option>
                            <option value="quote">{t('form.subjects.quote')}</option>
                            <option value="partnership">{t('form.subjects.partnership')}</option>
                            <option value="other">{t('form.subjects.other')}</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-rocket-gray-300 mb-2">
                          {t('form.message')} *
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          required
                          className="w-full rounded-lg border border-rocket-gray-700 bg-rocket-gray-800 px-4 py-3 text-rocket-white placeholder-rocket-gray-400 transition-colors focus:border-rocket-yellow focus:outline-none focus:ring-1 focus:ring-rocket-yellow resize-none"
                        />
                      </div>

                      {submitError && (
                        <p className="text-sm text-red-400" role="alert">
                          {t('form.error')}
                        </p>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center justify-center gap-2 w-full rounded-full bg-rocket-yellow py-4 text-base font-bold text-rocket-black transition-all duration-300 hover:bg-rocket-gold hover:shadow-lg hover:shadow-rocket-yellow/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? '...' : t('form.submit')}
                        <Send size={18} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.8!2d-7.95!3d12.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFaladi%C3%A9%20Extension%20EST%2C%20Bamako!5e0!3m2!1sfr!2sml!4v1"
          className="w-full h-full border-0 grayscale contrast-125 opacity-80"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rocket Security Location"
        />
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-rocket-dark to-transparent" />
      </section>
    </>
  );
}
