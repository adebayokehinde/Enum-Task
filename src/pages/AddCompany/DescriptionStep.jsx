export default function DescriptionStep({ form, handleChange, goToNextStep }) {
    return (
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-4">Short description</h3>
        <p className="text-gray-500 text-sm mb-2">
          Give a short description of your company
        </p>
  
        <textarea
          name="description"
          placeholder="Enter text here"
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
  }
  