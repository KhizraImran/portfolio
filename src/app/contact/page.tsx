import Navbar from "../component/navbar"
import Footer from "../component/footer";
import ContactForm from "../component/contactfoam"

export default function Contact() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <main className="pt-20 pb-10">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
