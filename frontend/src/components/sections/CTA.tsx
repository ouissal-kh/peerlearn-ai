export default function CTA() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-5xl font-bold">
          Ready to transform the way you learn?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Join PeerLearn AI and experience personalized learning,
          AI guidance, and collaborative study sessions.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:opacity-90">
            Get Started
          </button>

          <button className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}