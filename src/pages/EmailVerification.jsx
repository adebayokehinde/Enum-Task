import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [timer, setTimer] = useState(120);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [toast, setToast] = useState(""); // For non-blocking message

  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("letMeetYouForm"));
    if (savedData && savedData.workEmail) setEmail(savedData.workEmail);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = otp.join("");


    setToast("Verification successful!");
    

    setTimeout(() => {
      setToast("");
      navigate("/AddCompany");
    }, 2000);
  };

  const minutes = Math.floor(timer / 60);
  const seconds = String(timer % 60).padStart(2, "0");

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-[884px] h-[634px] bg-gray-50 text-gray-800 relative overflow-hidden rounded-xl">
      <div className="mb-6">
        <button
          type="button"
          onClick={() => navigate(-1)} // go back to previous page
          className="flex items-center text-black text-sm font-medium hover:text-gray-700"
        >
          <span className="mr-2 text-xl">←</span> 
          
        </button>
      </div>
        

        {/* Main section */}
        <main className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 md:px-10 overflow-y-auto">
          {/* Left Stepper */}
          <div className="lg:col-span-1">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Let’s meet you</h1>
              <p className="text-gray-600 mb-8">
                Just a few details to get you started — including verifying your email — 
                so we can personalize your setup and unlock the right tools for you.
              </p>
              <nav className="space-y-4">
                <span className="flex items-center p-3 border-l-4 border-transparent text-gray-500">
                  Basic info
                </span>
                <span className="flex items-center p-3 border-l-4 border-blue-600 font-semibold text-blue-600">
                  Email verification
                </span>
              </nav>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 flex items-start justify-center">
            <div className="w-[404px] h-[536px] bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Email verification</h2>
              <p className="mb-4 text-gray-600">
                Enter the code we sent to{" "}
                <span className="font-semibold text-gray-900">{email}</span> to verify your email.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex gap-1 justify-between">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      maxLength={1}
                      placeholder="-"
                      className="w-10 h-12 text-center text-lg border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  ))}
                </div>

                <p className="text-blue-600 text-sm mt-2">{minutes}:{seconds}</p>

                <div className="mt-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Didn’t receive the email?</h3>
                  <ul className="list-decimal list-inside text-gray-600 text-sm space-y-1">
                    <li>Check spam or promotions.</li>
                    <li>Confirm your email is correct.</li>
                    <li>Email may be auto-filled incorrectly.</li>
                    <li>Company filters blocked email.</li>
                  </ul>
                  <p className="text-blue-600 text-sm mt-2 cursor-pointer hover:underline">
                    Re-enter your email address
                  </p>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="text-blue-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Verify
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>

        {/* Toast Message */}
        {toast && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg animate-fadeInOut">
            {toast}
          </div>
        )}

        {/* Tailwind Animation */}
        <style>{`
          @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
          }
          .animate-fadeInOut {
            animation: fadeInOut 2s forwards;
          }
        `}</style>
        </div>
    </div>
  );
};

export default EmailVerification;
