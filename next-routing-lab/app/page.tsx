export default function HomePage() {
  return (
    <main className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h1 className="text-4xl font-extrabold mb-4 text-[var(--color-primary)]">Página de Inicio</h1>
      <p className="mb-6 text-lg text-[var(--color-secondary)]">
        Bienvenido a nuestro sitio web. Explora nuestros productos, conoce más sobre nosotros y ponte en contacto para cualquier consulta.
      </p>
      <nav className="mb-8">
        <ul className="flex space-x-6">
          <li>
            <a href="/products" className="text-[var(--color-primary)] font-semibold hover:underline">Productos</a>
          </li>
          <li>
            <a href="/about" className="text-[var(--color-primary)] font-semibold hover:underline">Acerca de</a>
          </li>
          <li>
            <a href="/contact" className="text-[var(--color-primary)] font-semibold hover:underline">Contacto</a>
          </li>
        </ul>
      </nav>
      <section>
        <h2 className="text-2xl font-bold mb-2 text-[var(--color-secondary)]">¿Por qué elegirnos?</h2>
        <ul className="list-disc ml-6 space-y-1 text-[var(--color-foreground)]">
          <li>Amplia variedad de productos de calidad.</li>
          <li>Atención personalizada y soporte rápido.</li>
          <li>Precios competitivos y ofertas exclusivas.</li>
          <li>Envíos rápidos a todo el país.</li>
        </ul>
      </section>
    </main>
  );
}