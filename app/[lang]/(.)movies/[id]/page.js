import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";

export default function InterceptedMoviePage({ params }) {
  const { id, lang } = params;

  return (
    <Modal>
      <MovieDetails id={id} lang={lang} />
    </Modal>
  );
}
