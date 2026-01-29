export default function DetailsStep({ form, handleChange, goToNextStep }) {
    return (
      <form className="space-y-4 flex-1">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company name<span className="text-red-500 ml-0.5">*</span>
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
          <label className="block text-sm font-medium text-gray-700">Industry</label>
          <select
            name="industry"
            value={form.industry}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3"
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
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700">Site name</label>
          <input
            type="text"
            name="siteName"
            value={form.siteName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700">Company size</label>
          <select
            name="companySize"
            value={form.companySize}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3"
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
  }
  