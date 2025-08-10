"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { Experience } from "@/lib/experience"

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <motion.div
      className="relative pl-8 pb-8 border-l border-white/10 last:border-l-0 last:pb-0"
      variants={{
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-2 top-2 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.6)]" />

      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-zinc-100">{experience.position}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-zinc-400">
              <div className="flex items-center gap-1">
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span className="text-zinc-300">{experience.company}</span>
              </div>
              {experience.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{experience.location}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-zinc-400 bg-black/20 rounded-full px-3 py-1 shrink-0">
            <Calendar className="w-4 h-4" />
            <span>
              {experience.startDate} - {experience.endDate || "Presente"}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-zinc-300 leading-relaxed">{experience.description}</p>

          {experience.achievements && experience.achievements.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-zinc-200">Logros principales:</h4>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className="text-emerald-400 mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {experience.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="border-emerald-500/20 text-emerald-300 bg-emerald-950/30 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
