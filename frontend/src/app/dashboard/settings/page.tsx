import SettingsForm from "@/components/dashboard/SettingsForm";

export default function SettingsPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          ⚙️ Settings
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your account and personalize your learning experience.
        </p>
      </div>

      <SettingsForm />
    </>
  );
}