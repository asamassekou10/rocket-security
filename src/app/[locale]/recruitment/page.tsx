'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  GraduationCap,
  TrendingUp,
  Wrench,
  Users,
  Shield,
  UserCheck,
  Dog,
  Car,
  Monitor,
  Upload,
  CheckCircle,
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/contact@rocketsecurity.net';

const whyIcons = {
  training: GraduationCap,
  career: TrendingUp,
  equipment: Wrench,
  team: Users,
};

const profileIcons = {
  agent: Shield,
  supervisor: UserCheck,
  k9_handler: Dog,
  driver: Car,
  operator: Monitor,
};

export default function RecruitmentPage() {
  const t = useTranslations('recruitment');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const formData = new FormData(e.currentTarget);
    formData.append('_subject', '[Rocket Security] Candidature');
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
      {/* Page Hero with RS5 background */}
      <section className="relative pt-32 pb-20 bg-rocket-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/RS5.jpg"
            alt="Rocket Security team meeting"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rocket-black via-rocket-black/80 to-rocket-black" />
        </div>
        <div className="absolute inset-0 tactical-grid opacity-30" />
        <div className="gradient-orb gradient-orb-yellow w-[400px] h-[400px] -top-40 right-20 opacity-40" />

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
            className="mt-6 text-lg text-rocket-gray-400 max-w-2xl mx-auto font-[family-name:var(--font-body)]"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Why Join Us — split layout: left text, right image */}
      <section className="py-24 bg-rocket-dark relative overflow-hidden">
        <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] -top-20 -left-20 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — why cards */}
            <ScrollReveal direction="left">
              <p className="font-[family-name:var(--font-accent)] text-sm tracking-[0.3em] uppercase text-rocket-yellow mb-4">
                {t('why_title')}
              </p>
              <div className="mt-4 h-1 w-16 bg-rocket-yellow" />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {(Object.keys(whyIcons) as Array<keyof typeof whyIcons>).map((key, index) => {
                  const Icon = whyIcons[key];
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group rounded-xl glass glass-hover p-6"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-rocket-yellow/10 text-rocket-yellow transition-all duration-500 group-hover:bg-rocket-yellow group-hover:text-rocket-black">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-rocket-white uppercase">
                        {t(`why_items.${key}.title`)}
                      </h3>
                      <p className="mt-2 text-sm text-rocket-gray-400 leading-relaxed font-[family-name:var(--font-body)]">
                        {t(`why_items.${key}.text`)}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Right — RS image */}
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden img-zoom border border-rocket-gray-700">
                  <Image
                    src="/images/RS1.jpg"
                    alt="Rocket Security agent"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-rocket-yellow rounded-br-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Profiles — centered grid */}
      <section className="py-24 bg-rocket-black relative overflow-hidden">
        <div className="gradient-orb gradient-orb-amber w-[400px] h-[400px] bottom-0 -right-20 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('profiles_title')} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(Object.keys(profileIcons) as Array<keyof typeof profileIcons>).map((key, index) => {
              const Icon = profileIcons[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-xl glass p-6 transition-all hover:border-rocket-yellow/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rocket-yellow/10 text-rocket-yellow shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-rocket-white">
                      {t(`profiles.${key}.title`)}
                    </h3>
                    <p className="mt-1 text-sm text-rocket-gray-400 font-[family-name:var(--font-body)]">
                      {t(`profiles.${key}.text`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-rocket-dark relative overflow-hidden">
        <div className="gradient-orb gradient-orb-yellow w-[500px] h-[500px] top-1/2 -translate-y-1/2 -right-40 opacity-20" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('form_title')} />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 rounded-2xl glass"
            >
              <CheckCircle className="mx-auto h-16 w-16 text-rocket-yellow mb-6" />
              <p className="text-xl text-rocket-white font-semibold font-[family-name:var(--font-body)]">
                {t('form.success')}
              </p>
            </motion.div>
          ) : (
            <ScrollReveal>
              <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6 rounded-2xl glass p-8 md:p-10">
                <input type="hidden" name="form_type" value="recruitment" />
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="recruitment-website">Website</label>
                  <input id="recruitment-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-rocket-gray-300 mb-2 font-[family-name:var(--font-body)]">
                    {t('form.name')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-rocket-gray-700 bg-rocket-gray-800 px-4 py-3 text-rocket-white placeholder-rocket-gray-400 transition-colors focus:border-rocket-yellow focus:outline-none focus:ring-1 focus:ring-rocket-yellow font-[family-name:var(--font-body)]"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-rocket-gray-300 mb-2 font-[family-name:var(--font-body)]">
                      {t('form.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-rocket-gray-700 bg-rocket-gray-800 px-4 py-3 text-rocket-white placeholder-rocket-gray-400 transition-colors focus:border-rocket-yellow focus:outline-none focus:ring-1 focus:ring-rocket-yellow font-[family-name:var(--font-body)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-rocket-gray-300 mb-2 font-[family-name:var(--font-body)]">
                      {t('form.phone')} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full rounded-lg border border-rocket-gray-700 bg-rocket-gray-800 px-4 py-3 text-rocket-white placeholder-rocket-gray-400 transition-colors focus:border-rocket-yellow focus:outline-none focus:ring-1 focus:ring-rocket-yellow font-[family-name:var(--font-body)]"
                    />
                  </div>
                </div>

                {/* Position */}
                <div>
                  <label className="block text-sm font-medium text-rocket-gray-300 mb-2 font-[family-name:var(--font-body)]">
                    {t('form.position')} *
                  </label>
                  <select
                    name="position"
                    required
                    className="w-full rounded-lg border border-rocket-gray-700 bg-rocket-gray-800 px-4 py-3 text-rocket-white transition-colors focus:border-rocket-yellow focus:outline-none focus:ring-1 focus:ring-rocket-yellow font-[family-name:var(--font-body)]"
                  >
                    <option value="">{t('form.select_position')}</option>
                    {(Object.keys(profileIcons) as Array<keyof typeof profileIcons>).map((key) => (
                      <option key={key} value={key}>
                        {t(`profiles.${key}.title`)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* CV Upload */}
                <div>
                  <label className="block text-sm font-medium text-rocket-gray-300 mb-2 font-[family-name:var(--font-body)]">
                    {t('form.cv')} *
                  </label>
                  <div className="relative rounded-lg border-2 border-dashed border-rocket-gray-700 bg-rocket-gray-800/50 p-8 text-center transition-colors hover:border-rocket-yellow/50">
                    <Upload className="mx-auto h-8 w-8 text-rocket-gray-400 mb-3" />
                    <p className="text-sm text-rocket-gray-400 font-[family-name:var(--font-body)]">{t('form.cv_help')}</p>
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf"
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-rocket-gray-300 mb-2 font-[family-name:var(--font-body)]">
                    {t('form.message')}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-lg border border-rocket-gray-700 bg-rocket-gray-800 px-4 py-3 text-rocket-white placeholder-rocket-gray-400 transition-colors focus:border-rocket-yellow focus:outline-none focus:ring-1 focus:ring-rocket-yellow resize-none font-[family-name:var(--font-body)]"
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
                  className="w-full rounded-full bg-rocket-yellow py-4 text-base font-bold text-rocket-black transition-all duration-300 hover:bg-rocket-gold hover:shadow-lg hover:shadow-rocket-yellow/20 disabled:opacity-50 disabled:cursor-not-allowed font-[family-name:var(--font-accent)] uppercase tracking-wider"
                >
                  {isSubmitting ? '...' : t('form.submit')}
                </button>
              </form>
            </ScrollReveal>
          )}
        </div>
      </section>
    </>
  );
}
