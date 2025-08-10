export type Project = {
  slug: string
  title: string
  description: string
  descriptionLong?: string
  image: string
  tags: string[]
  links: {
    demo: string
    repo: string
  }
}

export const projects: Project[] = [
  {
    slug: "Devforges",
    title: "Devforges - Gestor de tareas",
    description:
      "Plataforma de recuesos para programadores.",
    descriptionLong:
      "DevForge es una plataforma en línea diseñada para ayudar a los programadores a descubrir y explorar una amplia gama de recursos, herramientas y cursos relacionados con la programación y el desarrollo de software.",
    image:
      "/DevForges.png",
    tags: ["React", "TypeScript", "Tailwind", "Material-UI","Firebase","JWT (JSON Web Tokens)"],
    links: { demo: "https://devforges.vercel.app/", repo: "https://github.com/Akvaro03/DevForge" },
  },
]
