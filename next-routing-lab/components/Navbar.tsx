import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 space-x-4 text-blue-600">
      <Link href="/">Inicio</Link>
      <Link href="/about">Acerca</Link>
      <Link href="/contact">Contacto</Link>
      <Link href="/products">Productos</Link>
    </nav>
  );
}