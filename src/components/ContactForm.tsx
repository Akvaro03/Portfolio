"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"
import { CheckCircle2, Loader2 } from 'lucide-react'
import { enviarContacto } from "@/utils/enviarContacto"

function SubmitButton() {
  const status = useFormStatus()
  return (
    <Button
      type="submit"
      className="bg-emerald-400 hover:bg-emerald-300 text-neutral-900"
      disabled={status.pending}
      aria-disabled={status.pending}
    >
      {status.pending ? (
        <span className="inline-flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" /> Enviando...
        </span>
      ) : (
        "Enviar"
      )}
    </Button>
  )
}

export default function ContactForm() {
  const [success, setSuccess] = React.useState<string | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  async function action(formData: FormData) {
    setSuccess(null)
    setError(null)
    const res = await enviarContacto(formData)
    if (res.ok) setSuccess("¡Gracias! Te responderé pronto.")
    else setError(res.message ?? "Ocurrió un error. Inténtalo de nuevo.")
  }

  return (
    <form action={action} className="space-y-4" aria-label="Formulario de contacto">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="nombre" className="text-sm font-medium text-zinc-200">
            Nombre
          </label>
          <Input
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            required
            className="bg-black/30 border-white/10 text-zinc-100 placeholder:text-zinc-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-200">
            Email
          </label>
          <Input
            id="email"
            name="email"
            placeholder="tu@email.com"
            type="email"
            required
            className="bg-black/30 border-white/10 text-zinc-100 placeholder:text-zinc-500"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="mensaje" className="text-sm font-medium text-zinc-200">
          Mensaje
        </label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder="Cuéntame sobre tu proyecto..."
          rows={5}
          required
          className="bg-black/30 border-white/10 text-zinc-100 placeholder:text-zinc-500"
        />
      </div>
      <div className="flex items-center gap-3">
        <SubmitButton />
        {success && (
          <span className="inline-flex items-center gap-2 text-sm text-emerald-300">
            <CheckCircle2 className="w-4 h-4" />
            {success}
          </span>
        )}
        {error && <span className="text-sm text-red-400">{error}</span>}
      </div>
    </form>
  )
}
