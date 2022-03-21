import { useState, useEffect, useCallback, memo } from 'react'
import Link from "next/link"
import Image from 'next/image'

const isInViewport = (el) => {
  const { height } = el.getBoundingClientRect();
  const offsetTop = el.offsetTop;
  const offsetBottom = offsetTop + height;
  return window.scrollY + 77 >= offsetTop && window.scrollY + 77 < offsetBottom;
}

const MenuLogo = ({ onClick, show = false }) => {
  return (
    <div className={`menu-icon ${show ? 'active' : ''}`} onClick={onClick}>
      <span />
      <span />
      <span />
    </div>
  )
}

const LinkItem = memo(({ path, title, isHighlight = false, isScrolled = false }) => {
  return (
    <li className='block'>
      <a
        href={path}
        className={`link-item 
          ${isScrolled ? '' : 'lg:before:bg-white lg:before:bg-none'}
          ${isHighlight ? 'before:scale-100 before:opacity-100' : ''}
        `}
      >
        {title}
      </a>
    </li>
  )
})

const LinkItemDropDown = ({ path, title }) => {
  const [show, setShow] = useState(false);
  return (
    <li className={`group relative  ${show ? 'active' : ''}`} onClick={() => setShow(prevState => !prevState)}>
      <div className="link-item dropdown">
        {title}
        <i className="fas fa-caret-down ml-2"></i>
      </div>
      <ul className='dropdown-menu'>
        <li className='dropdown-item'>
          <a href='#'>
            Login
          </a>
        </li>
        <li className='dropdown-item'>
          <a href='#'>
            Register
          </a>
        </li>
      </ul>
    </li>
  )
}

const Header = ({ sectionRefs }) => {
  const [show, setShow] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentSection, setCurrentSection] = useState(null)

  const handleShowMobileMenu = () => {
    setShow(prevState => !prevState)
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY < 10) {
      setIsScrolled(false)
    } else {
      setIsScrolled(true)
    }
    const currentSection = sectionRefs.find(({ ref }) => {
      const ele = ref.current;
      if (ele) {
        return isInViewport(ele)
      }
    });
    setCurrentSection(currentSection?.section)
  }, [sectionRefs]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-10 border-b-[1px] 
      border-solid border-b-white-200 ${isScrolled ? 'lg:bg-white shadow-xl' : 'lg:bg-transparent'}`}
    >
      <div className="container mx-auto px-[15px]">
        <div className="mx-[-15px]">
          <nav className="flex flex-wrap items-center justify-between px-[15px] py-[6px] lg:p-0">
            <Link href='/'>
              <a className="block relative text-[30px] w-[154px] h-10 font-bold leading-[50px] lg:mt-[-2px] uppercase">
                <Image
                  layout='fill'
                  src='/logo-color.png'
                  alt='prolab-logo'
                  objectFit='contain'
                  className={`max-w-[170px] ${isScrolled ? '' : 'lg:brightness-0 lg:invert'}`}
                />
              </a>
            </Link>
            <MenuLogo onClick={handleShowMobileMenu} show={show} />
            <div className={`basis-full lg:basis-auto overflow-hidden lg:overflow-visible 
              ${show ? 'max-h-[100vh]' : 'max-h-0 lg:max-h-[100vh]'} transition-all duration-300 ease-in-out`}>
              <ul className={`flex flex-col ${isScrolled ? '' : 'lg:text-white'} lg:flex-row`}>
                <LinkItem
                  path='#home' title='Home' isScrolled={isScrolled}
                  isHighlight={currentSection === 'Home' ? true : false}
                />
                <LinkItem
                  path='#about' title='About' isScrolled={isScrolled}
                  isHighlight={currentSection === 'About' ? true : false}
                />
                <LinkItem
                  path='#feature' title='Features' isScrolled={isScrolled}
                  isHighlight={currentSection === 'Feature' ? true : false}
                />
                <LinkItem
                  path='#product' title='Products' isScrolled={isScrolled}
                  isHighlight={currentSection === 'Product' ? true : false}
                />
                <LinkItemDropDown title='Pages' isScrolled={isScrolled} />
                <LinkItem
                  path='#feedback' title='Testimonial' isScrolled={isScrolled}
                  isHighlight={currentSection === 'Testimonial' ? true : false}
                />
                <LinkItem
                  path='#faq' title='FAQ' isScrolled={isScrolled}
                  isHighlight={currentSection === 'FAQ' ? true : false}
                />
                <LinkItem
                  path='#contact' title='Contact' isScrolled={isScrolled}
                  isHighlight={currentSection === 'Contact' ? true : false}
                />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header