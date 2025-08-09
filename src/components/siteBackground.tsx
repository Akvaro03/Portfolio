export default function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      {/* Base dark */}
      <div className="absolute inset-0 bg-neutral-950" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgb(16_185_129/0.16),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_80%_20%,rgb(59_130_246/0.08),transparent_60%)]" />
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
    </div>
  )
}
