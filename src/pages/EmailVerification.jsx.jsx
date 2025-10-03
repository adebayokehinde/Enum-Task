import React, { useState, useRef, useEffect } from "react";

const EmailVerification = ({ userEmail = "ejir0666realll@gmail.com" }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(90);
  const [isRunning, setIsRunning] = useState(true);
  const otpRefs = useRef([]);

  useEffect(() => {
    if (!isRunning) return;
    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, [isRunning]);

  const handleChange = (el, i) => {
    if (isNaN(el.value)) return;
    setOtp((prev) => prev.map((d, idx) => (idx === i ? el.value : d)));
    if (el.value !== "" && i < otp.length - 1) otpRefs.current[i + 1]?.focus();
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && otp[i] === "" && i > 0) {
      otpRefs.current[i - 1]?.focus();
    }
  };

  const formatTime = (s) =>
    `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60)
      .toString()
      .padStart(2, "0")}`;

  return (
    <div className="w-full min-h-screen p-6 md:p-10 flex flex-col bg-gray-50 text-gray-800">
      <div className="w-full flex justify-end text-sm mb-8">
        <p>
          Already on Enum?{" "}
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>

      <main className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left */}
        <div className="lg:col-span-1">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Let's meet you
            </h1>
            <p className="text-gray-600 mb-8">
              Just a few details to get you started — including verifying your
              email — so we can personalize your setup and unlock the right
              tools for you.
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

        {/* Right */}
        <div className="lg:col-span-2 flex items-start justify-center">
          <div className="w-full max-w-lg bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Email verification</h2>
            <p className="text-gray-700 mb-4">
              Enter the code we sent to{" "}
              <span className="font-semibold text-gray-900">{userEmail}</span>
            </p>

            <div className="flex justify-center space-x-3 mb-6">
              {otp.map((d, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={d}
                  onChange={(e) => handleChange(e.target, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onFocus={(e) => e.target.select()}
                  ref={(el) => (otpRefs.current[i] = el)}
                />
              ))}
            </div>

            <div className="flex items-center justify-between mb-6 text-sm">
              <span
                className={`font-semibold ${
                  timeLeft === 0 ? "text-red-500" : "text-blue-600"
                }`}
              >
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmailVerification;
