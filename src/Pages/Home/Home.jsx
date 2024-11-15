import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import HeroMainContent from '../../component/HeroMainContent/HeroMainContent'
import PartnersLogos from '../../component/PartnersLogos/PartnersLogos'
import ServicesSection from '../../component/ServicesSection/ServicesSection'
import SectionImage from '../../component/SectionImage/SectionImage'
import Video from '../../component/Video/Video'
import Steps from '../../component/Steps/Steps'
import Pricing from '../../component/Pricing/Pricing'
import Feedback from '../../component/Feedback/Feedback'
import News from '../../component/News/News'
import EdgeImage from '../../component/EdgeImage/EdgeImage'
import Footer from '../../component/Footer/Footer'
export default function Home() {
  return (
    <>
      < Navbar />
      < HeroMainContent />
      < PartnersLogos />
      < ServicesSection />
      < Video />
      < Steps />
      < Pricing />
      < SectionImage />
      < Feedback />
      < News />
      < EdgeImage />
      < Footer />
    </>
  )
}
