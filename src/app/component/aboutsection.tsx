import Image from "next/image";
import projpic from "../../../image/temp_image_20241104_235253_2b22b67a-455e-4309-a47b-438f187fde7c.png"
export default function AboutSection() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 text-center bg-gray-100 mt-16 rounded-lg shadow-md">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">About <span className="text-blue-500">Me</span></h2>
      
      <p className="text-lg text-gray-700 leading-7 mb-4">
       I'm Khizra Khan, a 10th‑grade Computer Science student at Zeal Public School. Currently learning python & agentic AI in <strong>GIAIC</strong> while working on multiple personal projects. I am also a proud student at <strong>Aptech shahrah-e-faisal</strong>, constantly expanding my skillset.
        </p>

      <div className="flex justify-center items-center my-8">
        <Image 
          src={projpic}
          alt="Project showcase image" 
          height={200} 
          width={200} 
          className="rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
