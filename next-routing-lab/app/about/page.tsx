export default function AboutPage() {
  return (
    <main className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-[var(--color-primary)]">Acerca de Nosotros</h1>
      <p className="mt-2 text-[var(--color-secondary)]">
        Somos una empresa dedicada a ofrecer los mejores productos a nuestros clientes.
      </p>
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-[var(--color-secondary)]">Nuestra Misión</h2>
        <p>
          Brindar productos de calidad y un excelente servicio al cliente, innovando constantemente para satisfacer las necesidades del mercado.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-[var(--color-secondary)]">Nuestro Equipo</h2>
        <ul className="list-disc ml-6">
          <li>Elver - CEO</li>
          <li>María - Gerente de Ventas</li>
          <li>Pedro - Soporte Técnico</li>
        </ul>
      </section>
    </main>
  );
}