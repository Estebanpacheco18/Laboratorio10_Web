interface Params {
  params: {
    id: string;
  };
}

export default async function BlogPostPage({ params }: Params) {
  // Aquí se podría hacer fetch a una API real de posts
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Mostrando post con ID: {params.id}</h1>
      <article className="mt-4">
        <h2 className="text-xl font-semibold">Título del post {params.id}</h2>
        <p>
          Este es un ejemplo de contenido para el post del blog con ID {params.id}. Aquí se puede mostrar el contenido real del post, imágenes, autor, fecha, etc.
        </p>
      </article>
    </main>
  );
}