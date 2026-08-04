export default function Topbar() {
  return (
    <header className="mb-8 flex items-center justify-between rounded-3xl bg-white p-5 shadow-sm">
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="text-2xl">
          🔔
        </button>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
          O
        </div>
      </div>
    </header>
  );
}