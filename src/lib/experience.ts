export type Experience = {
  company: string
  position: string
  location?: string
  startDate: string
  endDate?: string
  description: string
  achievements?: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: "Consultar Srl",
    position: "Desarrollador de software en .NET y Full Stack en React",
    location: "Rosario, Argentina",
    startDate: "09/2022",
    endDate: undefined, // Presente
    description:
      "Responsable de la creación y mantenimiento de aplicaciones industriales y páginas web empleando tecnologías como .NET y React.",
    achievements: [
      "Desarrollo de aplicaciones híbridas con .NET y React, mejorando la eficiencia del equipo en un 30%",
      "Creación de App de Gestión de Órdenes de Trabajo, optimizando la experiencia del usuariow",
      "Lideré la migración de una aplicación legacy a Next.js 14, mejorando la experiencia de desarrollador",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MySql", "Sqlite", ".NET", "Tailwind CSS"],
  },
  {
    company: "Workana",
    position: "Frontend Developer Freelance",
    location: "Rosario, Argentina (Remoto)",
    startDate: "07/2021",
    endDate: "02/2022",
    description:
      "Experiencia en la creación y mejora de páginas web utilizando tecnologías como React y TypeScript",
    achievements: [
      "Especializado en el desarrollo de landing pages y tiendas en línea basadas en React y JavaScript",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Jest"],
  },
]
