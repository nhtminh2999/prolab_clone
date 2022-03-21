import { useRef, useMemo } from 'react'
import AboutSection from "../components/about_section/about_section"
import CompareSection from '../components/compare_section/compare_section'
import ContactSection from '../components/contact_section/contact_section'
import DealSection from "../components/deal_section/deal_section"
import FaqSection from '../components/faq_section/faq_section'
import FeatureSection from "../components/feature_section/feature_section"
import FeedBackSection from '../components/feeback_section/feedback_section'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import HeroSection from "../components/hero_section/hero_section"
import ProductSection from "../components/product_section/product_section"
import ReasonSection from "../components/reason_section/reason_section"
import SubscribeSection from '../components/subscribe_section/subscribe_section'
import ThirdSection from "../components/third_section/third_section"

function Page() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const featureRef = useRef(null)
  const productRef = useRef(null)
  const feedbackRef = useRef(null)
  const faqRef = useRef(null)
  const contactRef = useRef(null)

  const sectionRefs = useMemo(() => [
    { section: 'Home', ref: heroRef },
    { section: 'About', ref: aboutRef },
    { section: 'Feature', ref: featureRef },
    { section: 'Product', ref: productRef },
    { section: 'Testimonial', ref: feedbackRef },
    { section: 'FAQ', ref: faqRef },
    { section: 'Contact', ref: contactRef },
  ], [])

  return (
    <>
      <Header sectionRefs={sectionRefs} />
      <HeroSection ref={heroRef} />
      <AboutSection ref={aboutRef} />
      <ThirdSection />
      <FeatureSection ref={featureRef} />
      <DealSection />
      <ProductSection ref={productRef} />
      <ReasonSection />
      <CompareSection />
      <FeedBackSection ref={feedbackRef} />
      <SubscribeSection />
      <FaqSection ref={faqRef} />
      <ContactSection ref={contactRef} />
      <Footer />
    </>
  )
}

export default Page