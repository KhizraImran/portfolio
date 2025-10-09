export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Khizra Imran | All Rights Reserved</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/khizra-imran-7466082b6/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com/KhizraImran" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
          <a href="mailto:khizraimran26@gmail.com" className="hover:text-blue-400">Email Me</a>
        </div>
      </footer>
    );
  }
  