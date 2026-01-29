const usageOptions = [
    "To train employees",
    "To train partners",
    "To sell assessments",
    "To train customers",
    "To sell courses",
    "To hire talent",
    "To sell question banks",
    "To manage talent",
    "To manage hub",
    "To host live classes",
    "To manage event",
    "For credentialing",
    "To create courses",
    "To manage programs",
  ];
  
  export default function UsagePreferenceStep({
    form,
    togglePreference,
    goToNextStep,
  }) {
    return (
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-4">Usage preference</h3>
  
        <div className="max-h-80 overflow-y-auto">
          <div className="flex flex-wrap gap-3">
            {usageOptions.map((option) => {
              const isSelected = form.usagePreferences.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => togglePreference(option)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
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
  }
  