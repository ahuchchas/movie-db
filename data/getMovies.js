export async function getMovies() {
  return import("./movies.json").then((module) => module.default);
}
