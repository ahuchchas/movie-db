import Footer from "@/components/Footer";
import MovieList from "@/components/MovieList";
import Sidebar from "@/components/Sidebar";
import { getMovies } from "@/data/getMovies";

export default async function HomePage() {
  const data = await getMovies();
  const movies = data.results;
  // console.log(movies);

  return (
    <>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList movies={movies} />
        </div>
      </main>
      <Footer />
    </>
  );
}
