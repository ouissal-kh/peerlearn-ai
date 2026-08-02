export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <h3 className="text-2xl font-bold text-gray-900">
          PeerLearn AI
        </h3>

        <p className="text-gray-500">
          © 2026 PeerLearn AI. All rights reserved.
        </p>

        <div className="flex gap-6 text-gray-500">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}