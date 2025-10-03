import { useState } from "react";


export default function InviteTeam() {
  const [emailList, setEmailList] = useState([]);
  const [emailInput, setEmailInput] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleAddEmail = () => {
    const newEmails = emailInput
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email.length > 0 && !emailList.includes(email));

    if (newEmails.length > 0) {
      setEmailList([...emailList, ...newEmails]);
      setEmailInput("");
    }
  };

  const handleRemoveEmail = (emailToRemove) => {
    setEmailList(emailList.filter((email) => email !== emailToRemove));
  };

  const handleContinue = () => {
    if (agreed) {
      console.log("Continuing setup...");
      // Navigate to next step or submit
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white shadow-md rounded-lg p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Invite your team</h2>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Already on Enum? Log In
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          Want help managing things? Invite teammates now or add them anytime later.
        </p>

        {/* Email Input with Tags and Invite Button in Bottom Right */}
        <div className="relative mb-6">
          <div className="flex flex-wrap items-center border border-gray-300 rounded-md px-2 py-2 min-h-[60px] focus-within:ring-2 focus-within:ring-blue-500">
            {emailList.map((email) => (
              <div
                key={email}
                className="flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2"
              >
                <span className="mr-2">{email}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveEmail(email)}
                  className="text-gray-500 hover:text-red-600 font-bold"
                >
                  ×
                </button>
              </div>
            ))}
            <input
              type="text"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === ",") {
                  e.preventDefault();
                  handleAddEmail();
                }
              }}
              placeholder="Enter emails"
              className="flex-grow min-w-[150px] border-none focus:outline-none"
            />
          </div>

          {/* Invite Button Positioned Bottom Right */}
          <button
            type="button"
            onClick={handleAddEmail}
            className="absolute bottom-2 right-2 text-blue-600 hover:underline font-medium"
          >
            Invite
          </button>
        </div>

        {/* Terms Agreement and Continue Button Side-by-Side */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              I agree to{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
          <button
            type="button"
            onClick={handleContinue}
            disabled={!agreed}
            className={`py-2 px-4 rounded-md font-semibold transition ${
              agreed
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}