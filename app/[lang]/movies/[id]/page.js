import MovieDetails from "@/components/MovieDetails";
import Sidebar from "@/components/Sidebar";

export default function MoviePage({ params }) {
  const { id, lang } = params;

  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <MovieDetails id={id} lang={lang} />
      </div>
    </main>
  );
}
