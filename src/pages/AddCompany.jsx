import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import placeholderLogo from "../assets/upload-placeholder.png";

export default function AddCompany() {
  const [form, setForm] = useState({
    companyName: "",
    industry: "",
    website: "",
    siteName: "",
    companySize: "",
    description: "",
    usagePreferences: [],
    logo: "",
  });

  const [activeStep, setActiveStep] = useState("Details");
  const navigate = useNavigate();

  useEffect(() => {
    const savedForm = localStorage.getItem("addCompanyForm");
    const savedStep = localStorage.getItem("addCompanyActiveStep");

    if (savedForm) setForm(JSON.parse(savedForm));
    if (savedStep) setActiveStep(savedStep);
  }, []);

  useEffect(() => {
    localStorage.setItem("addCompanyForm", JSON.stringify(form));
    localStorage.setItem("addCompanyActiveStep", activeStep);
  }, [form, activeStep]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const goToNextStep = () => {
    const steps = ["Details", "Short description", "Usage preference", "Logo"];
    const currentIndex = steps.indexOf(activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1]);
    }
  };

  const togglePreference = (option) => {
    setForm((prev) => {
      const current = prev.usagePreferences;
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, usagePreferences: updated };
    });
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case "Details":
        return (
          <form className="space-y-4 flex-1">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company name*
              </label>
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Industry
              </label>
              <select
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select industry</option>
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="health">Healthcare</option>
                <option value="education">Education</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="url"
                name="website"
                value={form.website}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Site name
              </label>
              <input
                type="text"
                name="siteName"
                value={form.siteName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company size
              </label>
              <select
                name="companySize"
                value={form.companySize}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select size</option>
                <option value="1-10">1–10 employees</option>
                <option value="11-50">11–50 employees</option>
                <option value="51-200">51–200 employees</option>
                <option value="201+">201+ employees</option>
              </select>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={goToNextStep}
                className="text-blue-600 font-semibold hover:underline"
              >
                Next
              </button>
            </div>
          </form>
        );

      case "Short description":
        return (
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Short description</h3>

            <textarea
              name="description"
              rows="6"
              maxLength={1000}
              value={form.description}
              onChange={handleChange}
              className="w-full h-64 border border-gray-300 rounded-md p-3 resize-none"
            />

            <div className="text-right text-sm text-gray-500 mt-1">
              {form.description.length}/1000 characters
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={goToNextStep}
                className="text-blue-600 font-semibold hover:underline"
              >
                Next
              </button>
            </div>
          </div>
        );

      case "Usage preference":
        const usageOptions = [
          "To train employees",
          "To train partners",
          "To sell assessments",
          "To train customers",
          "To hire talent",
          "To sell question banks",
          "To manage talent",
          "To manage hub",
          "To host live classes",
          "To create events",
          "For credentialing",
          "To create courses",
          "To manage programs",
        ];

        return (
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Usage preference</h3>

            <div className="h-80 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
              {usageOptions.map((option) => {
                const isSelected = form.usagePreferences.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => togglePreference(option)}
                    className={`px-4 py-2 rounded-full text-sm text-left ${
                      isSelected
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end pt-6">
              <button
                type="button"
                onClick={goToNextStep}
                className="text-blue-600 font-semibold hover:underline"
              >
                Next
              </button>
            </div>
          </div>
        );

      case "Logo":
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

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">

      {/* Main container */}
      <div className=" relative w-[884px] h-[690px] bg-gray-50 text-gray-800  rounded-xl  flex overflow-hidden">
      <div className="mb-6">
        <button
          type="button"
          onClick={() => navigate(-1)} // go back to previous page
          className="flex items-center text-black text-sm font-medium hover:text-gray-700"
        >
          <span className="mr-2 text-xl">←</span> {/* small black arrow */}
          
        </button>
      </div>


        
        {/* LEFT PANEL */}
        <div className="w-[360px] px-10 py-12">
          <h2 className="text-[32px] font-bold leading-tight mb-6">
            Add <br /> company
          </h2>
  
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            Nice work, <span className="font-medium text-gray-900">David</span>. Just one more step —
            <br />
            Now, let’s complete your setup with your organization’s info.
          </p>
  
          <ul className="space-y-6">
            {["Details", "Short description", "Usage preference", "Logo"].map(
              (step) => (
                <li
                  key={step}
                  onClick={() => setActiveStep(step)}
                  className="flex items-center cursor-pointer"
                >
                  <span
                    className={`w-[3px] h-6 mr-4 rounded-full ${
                      activeStep === step ? "bg-blue-600" : "bg-transparent"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      activeStep === step
                        ? "text-blue-600 font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    {step}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
        
  
        {/* RIGHT PANEL */}
        <div className="flex-1 flex flex-col bg-gray-50 p-10">
          {/* White card inside gray panel */}
          <div className="bg-white rounded-2xl p-8 shadow-sm flex-1 overflow-y-auto">
            {renderStepContent()}
          </div>
        </div>
        
      </div>
    </div>
  );
}
