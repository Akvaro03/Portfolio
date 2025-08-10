export async function enviarContacto(formData: FormData): Promise<{ ok: boolean; message?: string }> {
  // Simular procesamiento en servidor
  const nombre = String(formData.get("nombre") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const mensaje = String(formData.get("mensaje") ?? "").trim()

  if (!nombre || !email || !mensaje) {
    return { ok: false, message: "Por favor completa todos los campos." }
  }
  if (!isValidEmail(email)) {
    return { ok: false, message: "Email inválido." }
  }

  // Aquí podrías integrar con un servicio de email o base de datos
  console.log("Nuevo mensaje de contacto:", { nombre, email, mensaje })

  await new Promise((r) => setTimeout(r, 600))
  return { ok: true }
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
