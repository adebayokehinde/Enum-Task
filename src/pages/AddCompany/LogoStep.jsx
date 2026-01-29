import placeholderLogo from "../../assets/upload-placeholder.png";

export default function LogoStep({ form, setForm, navigate }) {
  return (
    <div className="flex-1 flex flex-col">
      <h3 className="text-xl font-semibold mb-4">Logo</h3>

      <div className="w-40 h-40 border rounded-md bg-gray-100 relative mb-6 overflow-hidden">
        <img
          src={form.logo || placeholderLogo}
          alt="Company logo"
          className="w-full h-full object-cover"
        />

        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) =>
              setForm((prev) => ({ ...prev, logo: ev.target.result }));
            reader.readAsDataURL(file);
          }}
        />
      </div>

      <div className="mt-auto flex justify-end">
        <span
          onClick={() => navigate("/InviteTeam")}
          className="text-blue-600 font-semibold cursor-pointer hover:underline"
        >
          Next
        </span>
      </div>
    </div>
  );
}
