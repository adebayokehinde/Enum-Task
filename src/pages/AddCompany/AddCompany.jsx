import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DetailsStep from "./DetailsStep";
import DescriptionStep from "./DescriptionStep";
import UsagePreferenceStep from "./UsagePreferenceStep";
import LogoStep from "./LogoStep";
import { IoMdArrowBack } from "react-icons/io";

export default function AddCompany() {
  const navigate = useNavigate();

  // All shared form state lives here
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

  // 🔹 Step controller
  const [activeStep, setActiveStep] = useState("Details");

  // 🔹 Persist state
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

  // 🔹 Shared handlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePreference = (option) => {
    setForm((prev) => ({
      ...prev,
      usagePreferences: prev.usagePreferences.includes(option)
        ? prev.usagePreferences.filter((item) => item !== option)
        : [...prev.usagePreferences, option],
    }));
  };

  const goToNextStep = () => {
    const steps = ["Details", "Short description", "Usage preference", "Logo"];
    const currentIndex = steps.indexOf(activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1]);
    }
  };

  //  Step renderer (VERY CLEAN)
  const renderStep = () => {
    switch (activeStep) {
      case "Details":
        return (
          <DetailsStep
            form={form}
            handleChange={handleChange}
            goToNextStep={goToNextStep}
          />
        );

      case "Short description":
        return (
          <DescriptionStep
            form={form}
            handleChange={handleChange}
            goToNextStep={goToNextStep}
          />
        );

      case "Usage preference":
        return (
          <UsagePreferenceStep
            form={form}
            togglePreference={togglePreference}
            goToNextStep={goToNextStep}
          />
        );

      case "Logo":
        return (
          <LogoStep
            form={form}
            setForm={setForm}
            navigate={navigate}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="relative w-[884px] h-[690px] bg-gray-50 rounded-xl flex overflow-hidden">
        <div  
        onClick={() => navigate(-1)}
        className="absolute top-6 pl- left-7 text-xl font-medium">
        <IoMdArrowBack />

        </div>
        
        <div className="w-[360px] px-8 py-12">
          <h2 className="text-[32px] font-bold mb-6">
            Add <br /> company
          </h2>

          <p className="text-gray-500 text-sm mb-10">
            Nice work, <span className="text-gray-900 font-medium">David</span>.
            <br />
            Let’s complete your setup.
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
                      activeStep === step
                        ? "bg-blue-600"
                        : "bg-transparent"
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

        
        <div className="flex-1 bg-gray-50 p-10">
          <div className="bg-white rounded-2xl p-8 shadow-sm h-full overflow-y-auto">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}
