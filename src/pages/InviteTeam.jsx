import { useState } from "react";

const ArrowLeftIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

export default function InviteTeam() {
  const [email, setEmail] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInvite = () => {
    console.log("Inviting emails:", email);
  };

  const handleContinue = () => {
    if (agreedToTerms) {
      console.log("Continuing to next step");
    }
  };

  return (
    <div className="flex flex-col h-full p-8 bg-gray-50 overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeftIcon />
        </button>
        <div className="text-sm text-gray-600">
          Already on Enum?{" "}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Log in
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="flex flex-col md:flex-row gap-8 flex-1">
          {/* Left Side - Text */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Invite your team
            </h1>
            <p className="text-gray-600">
              Want help managing things? Invite teammates now or add them anytime
              later.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter emails, separated by commas"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleInvite}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex justify-between items-center">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Privacy Policy
              </a>
            </label>
          </div>
          <button
            onClick={handleContinue}
            disabled={!agreedToTerms}
            className={`px-6 py-2.5 font-medium rounded-lg transition-colors ${
              agreedToTerms
                ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
