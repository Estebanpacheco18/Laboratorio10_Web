export default async function ProductsPage() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <main className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-4">Productos</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product: any) => (
          <li key={product.id} className="border rounded-lg p-4 flex flex-col items-center bg-gray-50 hover:shadow-md transition">
            <img src={product.image} alt={product.title} className="w-24 h-24 object-contain mb-2" />
            <span className="font-semibold text-[var(--color-secondary)]">{product.title}</span>
            <span className="text-[var(--color-primary)] font-bold mt-2">${product.price}</span>
            <a href={`/products/${product.id}`} className="mt-2 text-sm text-[var(--color-primary)] underline hover:text-[var(--color-secondary)]">Ver detalles</a>
          </li>
        ))}
      </ul>
    </main>
  );
}