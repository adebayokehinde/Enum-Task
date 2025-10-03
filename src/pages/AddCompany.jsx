import { useState, useEffect } from "react";
import Upload from "../assets/Upload Field.png";

export default function AddCompany() {
  const [form, setForm] = useState({
    companyName: "",
    industry: "",
    website: "",
    siteName: "",
    companySize: "",
    description: "",
    usagePreferences: [],
  });

  const [activeStep, setActiveStep] = useState("Details");

  // Load saved form from localStorage
  useEffect(() => {
    const savedForm = localStorage.getItem("addCompanyForm");
    const savedStep = localStorage.getItem("addCompanyActiveStep");

    if (savedForm) setForm(JSON.parse(savedForm));
    if (savedStep) setActiveStep(savedStep);
  }, []);

  // Save form and step to localStorage whenever they change
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
      const current = prev.usagePreferences || [];
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
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company name*</label>
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Industry</label>
              <select
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select industry</option>
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="health">Healthcare</option>
                <option value="education">Education</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Website</label>
              <input
                type="url"
                name="website"
                value={form.website}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Site name</label>
              <input
                type="text"
                name="siteName"
                value={form.siteName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Company size</label>
              <select
                name="companySize"
                value={form.companySize}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Next
              </button>
            </div>
          </form>
        );

      case "Short description":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Short description</h3>
            <label className="block text-sm text-gray-700 mb-2">Give a short description of your company</label>
            <textarea
              name="description"
              rows="6"
              maxLength={1000}
              value={form.description}
              onChange={handleChange}
              placeholder="Enter text here"
              className="w-full border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {form.description.length}/1000 characters
            </div>
            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={goToNextStep}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
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
          <div>
            <h3 className="text-xl font-semibold mb-4">Usage preference</h3>
            <p className="text-gray-600 mb-4">How will you like to use Enum?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {usageOptions.map((option) => {
                const isSelected = form.usagePreferences.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => togglePreference(option)}
                    className={`px-4 py-2 rounded-full border text-sm transition text-left ${
                      isSelected
                        ? "bg-blue-100 text-blue-700 border-blue-200"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
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
                className="text-blue-600 font-bold text-lg hover:underline mx-auto block"
              >
                Next
              </button>
            </div>
          </div>
        );

      case "Logo":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Logo</h3>
            <img
              src={Upload}
              alt="Upload preview"
              className="w-40 h-40 object-contain mb-4 border rounded-md"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Panel */}
        <div className="p-8 border-r">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Add company</h2>
          <p className="text-gray-600 mb-6">
            Nice work, David. Just one more step — Now, let’s complete your setup with your organization’s info.
          </p>
          <ul className="space-y-2 text-gray-700">
            {["Details", "Short description", "Usage preference", "Logo"].map((step) => (
              <li
                key={step}
                onClick={() => setActiveStep(step)}
                className={`font-semibold cursor-pointer ${
                  activeStep === step ? "text-blue-600" : "hover:text-blue-500"
                }`}
              >
                • {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Panel */}
        <div className="p-8">{renderStepContent()}</div>
      </div>
    </div>
  );
}
