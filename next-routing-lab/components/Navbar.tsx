import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[var(--color-primary)] px-8 py-4 shadow-md flex items-center justify-between">
      <span className="text-white font-bold text-xl">MiSitio</span>
      <div className="space-x-6">
        <Link href="/" className="text-white hover:text-[var(--color-secondary)] transition">Inicio</Link>
        <Link href="/about" className="text-white hover:text-[var(--color-secondary)] transition">Acerca</Link>
        <Link href="/contact" className="text-white hover:text-[var(--color-secondary)] transition">Contacto</Link>
        <Link href="/products" className="text-white hover:text-[var(--color-secondary)] transition">Productos</Link>
      </div>
    </nav>
  );
}