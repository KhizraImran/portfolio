import Image from "next/image";
import tahapic from "../../../image/WhatsApp Image 2025-10-06 at 16.51.44_4d27daab.jpg"

export default function ProfileImage() {
  return (
    <div className="flex justify-center items-center my-6">
      <Image 
        src={tahapic}
        alt="Profile picture of Khizra Imran" 
        height={250} 
        width={250} 
        className="rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300" 
      />
    </div>
  );
}
