import Link from "next/link";

export default function Landing() {
  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>From Speech to Study-Ready Notes</h1>

        <p>Redefining how students capture, organize, and review lectures. </p>
        <p>With real-time speech-to-text transcription and an intelligent auto-reviewer generator,</p>
        <p>fLexiScribe ensures no detail is missed and every concept is easier to revisit.</p>
        <p><b>Listen better. Write less. Learn more.</b></p>

        <Link href="/login">Get Started</Link>
    </main>
  );
}
