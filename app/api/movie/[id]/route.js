import { deleteMovieById, getMovieById, updateMovieById } from "@/data/data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  const movie = await getMovieById(id);

  return NextResponse.json(movie);
}

export async function PATCH(request, { params }) {
  const { id } = params;
  const { title } = await request.json();

  const updatedMovie = await updateMovieById(id, title);

  return NextResponse.json(updatedMovie);
}

export async function DELETE(request, { params }) {
  const { id } = params;

  await deleteMovieById(id);

  return new Response(null, { status: 204 });
}
