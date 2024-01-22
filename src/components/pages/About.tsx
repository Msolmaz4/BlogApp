import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const About:React.FC<In>= ( { darkTheme, theme }) => {


  const [to, setTo] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [text, setText] = useState<string>("");
  const sendEmail = async () :Promise<void>=> {
    try {
      const mailtoLink = `mailto:msolmaz83@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(text)}`;
      window.location.href = mailtoLink;
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div>
      <Navbar darkTheme={darkTheme} theme={theme} />

      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12 mt-24">
        <h2 className="text-2xl text-sky-900 font-bold mb-6">Contact</h2>

        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              name="email"
              id="email"
              type="email"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="bio"
            >
              Messaj
            </label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md"
              style={{ resize: "none" }}
              name="bio"
              id="bio"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              className="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              type="submit"
              onClick={sendEmail}
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
