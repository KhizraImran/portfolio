// import ProfileImage from "./profileimage";
import ProfileImage from "./profileimage";
export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 pt-20">
      <ProfileImage />

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Hi, I’m <span className="text-blue-500">Khizra Imran</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 mb-6 text-center max-w-2xl leading-8">
        A creative <strong>10th grade student</strong> with a passion for in building responsive, user-friendly websites using modern technologies like <strong>TypeScript, Next.js</strong>, and <strong>Tailwind CSS</strong>.
      </p>

      <div className="space-x-4">
        <a href="/Khizra-Imran.pdf" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-blue-500 transition duration-300">
            View My Resume
          </button>
        </a>
        <a href="/contact">
          <button className="bg-gray-800 text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-gray-700 transition duration-300">
            Hire Me
          </button>
        </a>
      </div>
    </section>
  );
}
