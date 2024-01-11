import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Jesús Velasco Page",
  description: "About page",
};

export default function AboutPage() {
  return (
    <>
      <span className="text-5xl">About</span>
    </>
  );
}
