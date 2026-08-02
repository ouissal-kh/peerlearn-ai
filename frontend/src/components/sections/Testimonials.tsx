export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah",
      role: "Computer Science Student",
      text: "PeerLearn AI completely changed the way I study. Finding teammates is now effortless.",
    },
    {
      name: "Adam",
      role: "Software Engineering Student",
      text: "The AI roadmap keeps me focused every week. I finally know what to learn next.",
    },
    {
      name: "Lina",
      role: "Data Science Student",
      text: "Studying became fun again. Sessions are organized and everyone stays accountable.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            TESTIMONIALS
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Loved by learners
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Students collaborate better, stay motivated, and achieve their goals
            with PeerLearn AI.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="text-gray-600 leading-7">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}