import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import this

export default function InviteTeam() {
  const [emailList, setEmailList] = useState([]);
  const [emailInput, setEmailInput] = useState("");
  const [agreed, setAgreed] = useState(false);

  const navigate = useNavigate(); // ✅ create navigation hook

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
      console.log("Continuing setup with emails:", emailList);
      alert("Team invited successfully!");
      navigate("/dashboard"); // ✅ redirect to dashboard
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800">
      {/* Top right login link */}
      <div className="flex justify-end p-6 text-sm">
        <p>
          Already on Enum?{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Log In
          </a>
        </p>
      </div>

      {/* Main section */}
      <main className="flex flex-col items-center justify-center flex-grow px-6">
        <div className="max-w-3xl w-full flex flex-col md:flex-row items-start gap-12">
          {/* Left section */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-3 text-gray-900">
              Invite your team
            </h1>
            <p className="text-gray-600">
              Want help managing things? Invite teammates now or add them
              anytime later.
            </p>
          </div>

          {/* Right section (form) */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <label
              htmlFor="emails"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>

            <div className="flex flex-wrap items-center border border-gray-300 rounded-md px-2 py-2 min-h-[56px] focus-within:ring-2 focus-within:ring-blue-500">
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
                placeholder="Enter emails, separated by commas"
                className="flex-grow min-w-[150px] border-none focus:outline-none text-gray-700"
              />
            </div>

            <button
              type="button"
              onClick={handleAddEmail}
              className="mt-3 text-blue-600 font-medium hover:underline text-sm"
            >
              Invite
            </button>
          </div>
        </div>
      </main>

      {/* Bottom section */}
      <footer className="border-t border-gray-200 mt-10 py-6 px-6 flex justify-between items-center">
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
          className={`py-2 px-6 rounded-md font-semibold transition ${
            agreed
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </footer>
    </div>
  );
}
