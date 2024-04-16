"use client";
import { useParams } from "next/navigation";

export default function NotFound() {
  const params = useParams();
  const { id } = params;

  return (
    <div className="h-screen flex justify-center items-center">
      <h2>This movie with {id} id was not found!</h2>
    </div>
  );
}
