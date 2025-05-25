export default function ContactPage() {
  return (
    <main className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-[var(--color-primary)]">Página de Contacto</h1>
      <p className="text-[var(--color-secondary)]">
        Puedes contactarnos a través de este formulario o enviando un correo a <a href="mailto:contacto@ejemplo.com" className="text-[var(--color-primary)] underline">contacto@ejemplo.com</a>.
      </p>
      <form className="mt-6 space-y-4 max-w-md">
        <div>
          <label className="block font-semibold text-[var(--color-secondary)]">Nombre</label>
          <input type="text" className="border rounded w-full p-2" placeholder="Tu nombre" />
        </div>
        <div>
          <label className="block font-semibold text-[var(--color-secondary)]">Correo electrónico</label>
          <input type="email" className="border rounded w-full p-2" placeholder="tu@email.com" />
        </div>
        <div>
          <label className="block font-semibold text-[var(--color-secondary)]">Mensaje</label>
          <textarea className="border rounded w-full p-2" rows={4} placeholder="Escribe tu mensaje aquí"></textarea>
        </div>
        <button type="submit" className="bg-[var(--color-primary)] text-white px-4 py-2 rounded hover:bg-[var(--color-secondary)] transition">Enviar</button>
      </form>
    </main>
  );
}