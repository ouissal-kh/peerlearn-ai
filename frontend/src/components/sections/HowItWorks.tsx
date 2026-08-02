export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Set Your Goal",
      text: "Tell PeerLearn AI what you want to learn.",
    },
    {
      number: "02",
      title: "AI Creates Roadmap",
      text: "Receive a personalized learning journey.",
    },
    {
      number: "03",
      title: "Meet Your Team",
      text: "Get matched with learners at your level.",
    },
    {
      number: "04",
      title: "Learn Together",
      text: "Attend sessions, complete challenges, and grow.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Learn in four simple steps
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            From your first goal to collaborative learning sessions,
            PeerLearn AI guides every step.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="text-4xl font-bold text-blue-600">
                {step.number}
              </span>

             <h3 className="mt-6 text-2xl font-semibold text-gray-900">
  {step.title}
</h3>

              <p className="mt-4 text-gray-600">
                {step.text}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}