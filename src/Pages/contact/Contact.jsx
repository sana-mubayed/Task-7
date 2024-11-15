import Navbar from '../../component/Navbar/Navbar'
import './Contact.css'
import Ready from '../../component/ready/ready'
import HeroContact from '../../component/HeroContact/HeroContact';
import Footer from '../../component/Footer/Footer';
export default function Contact() {
  return (
    <>
      < Navbar />
      <HeroContact title="Contact Us" />
      {/* < Ready /> */}
      < Footer />
    </>
  )
}
