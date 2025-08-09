"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

export default function Section({
  id = "",
  title = "",
  subtitle = "",
  children,
}: {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="inline-block rounded-md bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-300">
            {subtitle}
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  )
}
