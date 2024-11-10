const Footer = () => {
    return (
      <>
      <div className="w-full h-auto flex justify-evenly bg-white text-primary mt-20">
        <div className="flex flex-col">
          <h4 className="font-bold mb-2">Company</h4>
          <a href="#about" className="mb-1">About Us</a>
          <a href="#careers" className="mb-1">Careers</a>
          <a href="#press">Press</a>
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold mb-2">Support</h4>
          <a href="#help" className="mb-1">Help Center</a>
          <a href="#contact" className="mb-1">Contact Us</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold mb-2">Legal</h4>
          <a href="#privacy" className="mb-1">Privacy Policy</a>
          <a href="#terms" className="mb-1">Terms of Service</a>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>
      <div className="w-full text-center mt-6">
        <hr />
        <a href="https://www.linkedin.com/in/nemanja-antonijevic-6baabb2a2/">Nemanja Antonijevic 2024©</a>
      </div>
      </>
    )
  }
  
  export default Footer
  