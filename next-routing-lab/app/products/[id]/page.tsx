type Params = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: Params) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return (
    <main className="p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-[var(--color-primary)]">{product.title}</h1>
      <div className="flex flex-col md:flex-row mt-4 gap-6">
        <img src={product.image} alt={product.title} className="w-40 h-40 object-contain border rounded bg-gray-50" />
        <div>
          <p className="mt-2 text-[var(--color-secondary)]">{product.description}</p>
          <p className="mt-2 font-semibold text-[var(--color-primary)]">Precio: ${product.price}</p>
          <p className="mt-2 text-sm text-gray-500">Categoría: {product.category}</p>
          <button className="mt-4 bg-[var(--color-primary)] text-white px-4 py-2 rounded hover:bg-[var(--color-secondary)] transition">Agregar al carrito</button>
        </div>
      </div>
    </main>
  );
}