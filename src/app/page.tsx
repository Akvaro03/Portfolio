"use client"

import { ArrowRight, Mail } from "lucide-react";
import Section from "@/components/section";
import SiteBackground from "../components/siteBackground";

import Image from "next/image";
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/hero";
import ExperienceCard from "@/components/experienceCard";
import { experiences } from "@/lib/experience";
export default function Home() {
  console.log({ motion, Badge, Link, ArrowRight, Mail, Image });
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteBackground />
      <main className="flex-1">
        <Hero />
        <Section id="sobre-mi" title="Sobre mí" subtitle="Conoce al desarrollador">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-zinc-300">
                Soy un desarrollador full‑stack con enfoque en construir experiencias web rápidas, accesibles y bien
                diseñadas. Me encanta trabajar con React, Next.js y TypeScript, y tengo experiencia integrando APIs y
                servicios cloud.
              </p>
              <p className="text-zinc-300">
                Disfruto transformar ideas en productos reales: desde el diseño de la arquitectura hasta el despliegue y
                observabilidad. Aquí encontrarás algunos de mis proyectos personales, donde exploro nuevas tecnologías y buenas
                prácticas modernas.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"].map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="border-emerald-500/20 text-emerald-300 bg-emerald-950/30"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                {/* <Link
                  href="#proyectos"
                  className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-neutral-900 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                >
                  Ver Proyectos <ArrowRight className="w-4 h-4" />
                </Link> */}
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium border border-white/10 hover:bg-white/5 text-zinc-200 transition-colors"
                >
                  Contacto <Mail className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black/30"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/illustrated-professional-profile.png"
                alt="Foto de perfil del desarrollador"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl pointer-events-none" />
            </motion.div>

          </div>
        </Section>

        <Section id="habilidades" title="Habilidades" subtitle="Tecnologías con las que trabajo">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } }
            }}
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Tailwind",
              "Pruebas",
            ].map((name) => (
              <motion.div
                key={name}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-zinc-200 backdrop-blur"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                <span>{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </Section>
        <Section id="experiencia" title="Experiencia" subtitle="Trayectoria profesional">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} experience={exp} />
            ))}
          </motion.div>
        </Section>

        {/* <Section id="proyectos" title="Proyectos" subtitle="Web apps personales">
          <motion.div
            className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
          </motion.div>
          <div className="mt-8 text-center">
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-neutral-900 bg-emerald-400 hover:bg-emerald-300 transition-colors"
            >
              ¿Te gusta lo que ves? Hablemos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section> */}

        <Section id="contacto" title="Contacto" subtitle="¿Tienes una idea? Conectemos">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold text-zinc-100">Trabajemos juntos</h3>
              <p className="text-zinc-300">
                Estoy abierto a propuestas de trabajo, freelance y colaboraciones. Completa el formulario y te responderé lo
                antes posible.
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-emerald-400 rounded-full" />
                  {"alvaroballarini03@gmail.com"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-emerald-400 rounded-full" />
                  {"Ubicación: Remoto / Híbrido"}
                </li>
              </ul>
            </motion.div>
            <ProjectContactCard />
          </div>
        </Section>
      </main>
    </div>
  );
}
function ProjectContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      <ContactForm />
    </motion.div>
  )
}
