"use client"

import { ArrowRight, Github, Linkedin } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-white/10">
            <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center rounded-full bg-emerald-950/40 text-emerald-300 px-3 py-1 text-xs font-medium border border-emerald-500/20">
                            Desarrollador Full‑Stack
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-50">
                            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                                Construyo productos web modernos
                            </span>
                            <br />
                            <span className="text-zinc-300">rápidos y accesibles</span>
                        </h1>
                        <p className="text-zinc-300 text-base sm:text-lg">
                            Especializado en React, Next.js y TypeScript. Diseño y desarrollo experiencias que escalan y encantan a los
                            usuarios.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="#proyectos"
                                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-neutral-900 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                            >
                                Ver Proyectos <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="https://github.com/Akvaro03"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium border border-white/10 hover:bg-white/5 text-zinc-200 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-4 h-4" /> GitHub
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/alvaro-ballarini/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium border border-white/10 hover:bg-white/5 text-zinc-200 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" /> LinkedIn
                            </Link>
                        </div>
                    </motion.div>

                    {/* <motion.div
                        className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black/30"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        <Image
                            src="/developer-portfolio-dashboard-mockup.png"
                            alt="Vista previa de proyectos destacados"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl pointer-events-none" />
                    </motion.div> */}
                </div>
            </div>
        </section>
    )
}
