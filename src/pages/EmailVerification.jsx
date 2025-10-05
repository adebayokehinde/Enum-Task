import React, { useState, useEffect } from "react";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [timer, setTimer] = useState(120); // 2 minutes countdown
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("letMeetYouForm"));
    if (savedData && savedData.workEmail) {
      setEmail(savedData.workEmail);
    }
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
    console.log("Entered OTP:", enteredCode);
    alert("Verification successful!");
  };

  const minutes = Math.floor(timer / 60);
  const seconds = String(timer % 60).padStart(2, "0");

  return (
    <div className="w-full h-screen flex flex-col justify-between bg-gray-50 text-gray-800">
      <div className="w-full flex justify-end text-sm p-4">
        <p>
          Already on Enum?{" "}
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>

      <main className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 md:px-10 overflow-y-auto">
        {/* Left Stepper */}
        <div className="lg:col-span-1">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Let’s meet you
            </h1>
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
          <div className="w-full max-w-lg bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Email verification</h2>
            <p className="mb-4 text-gray-600">
              Enter the code we sent to{" "}
              <span className="font-semibold text-gray-900">{email}</span> to verify your email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex gap-2 justify-between">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    maxLength={1}
                    className="w-10 h-12 text-center text-lg border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                ))}
              </div>

              <p className="text-blue-600 text-sm mt-2">{minutes}:{seconds}</p>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Didn’t receive the email?
                </h3>
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

              <button
                type="submit"
                className="mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmailVerification;
