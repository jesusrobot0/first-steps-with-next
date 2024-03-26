import type { Metadata } from "next";

// Snippet: mr
export const metadata: Metadata = {
  title: "Pricing - Jesús Velasco Page",
  description: "Pricing page",
};

export default function PrincingPage() {
  return (
    <>
      <span className="text-5xl">Pricing</span>
    </>
  );
}
