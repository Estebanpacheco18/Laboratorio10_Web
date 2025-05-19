interface Params {
  params: {
    id: string;
  };
}

export default async function BlogPostPage({ params }: Params) {
  const resolvedParams = await params;
  return (
    <main>
      <h1>Mostrando post con ID: {resolvedParams.id}</h1>
    </main>
  );
}