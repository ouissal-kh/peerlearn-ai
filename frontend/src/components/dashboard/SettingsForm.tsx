export default function SettingsForm() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">
        Account Settings
      </h2>

      <p className="mt-2 text-gray-600">
        Manage your profile and application preferences.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            defaultValue="Ouissal"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            defaultValue="ouissal@email.com"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Learning Goal
          </label>

          <input
            type="text"
            defaultValue="Cloud Computing"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Preferred Language
          </label>

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none">
            <option>English</option>
            <option>French</option>
            <option>Arabic</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}