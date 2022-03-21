import Link from 'next/link'
import Image from 'next/image'

const FooterLogo = () => {
  return (
    <Link href="/">
      <a>
        <div className='inline-block relative w-[154px] h-10'>
          <Image
            objectFit='scale-down'
            alt='logo'
            src='/logo-color.png'
            layout='fill'
            className='custome-img'
          />
        </div>
      </a>
    </Link>
  )
}

const SocialLinks = () => {
  return (
    <ul className='mb-4'>
      <li className='inline-block'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
          className='social-icon bg-[#0069f7] border-[#0069f7]'
        >
          <i className="fab fa-facebook-f" />
        </a>
      </li>
      <li className='inline-block'>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
          className='social-icon bg-[#00c6f7] border-[#00c6f7]'
        >
          <i className="fab fa-twitter" />
        </a>
      </li>
      <li className='inline-block'>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
          className='social-icon bg-[#0a66c2] border-[#0a66c2]'
        >
          <i className="fab fa-linkedin-in" />
        </a>
      </li>
      <li className='inline-block'>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"
          className='social-icon bg-[#d1062c] border-[#d1062c]'
        >
          <i className="fab fa-google-plus-g"></i>
        </a>
      </li>
    </ul>
  )
}

const Footer = () => {
  return (
    <footer className='relative pt-[90px] bg-footer bg-cover bg-no-repeat'>
      <div className="container">
        <div className='flex mx-[-15px]'>
          <div className='px-[15px] mx-auto w-full max-w-full lg:max-w-[50%]'>
            <div className='text-center'>
              <div className='mb-[23px]'>
                <FooterLogo />
              </div>
              <p className='text-base text-[#555] leading-[1.625] mb-6'>
                Conveying or northward offending admitting perfectly my. <br />
                Colonel gravity get thought fat smiling add but.
              </p>
            </div>
            <div className='text-center mt-[35px]'>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[96px] md:mt-[100px] lg:mt-[110px] py-[20px] border-t-[1px] border-solid border-[#00000026]'>
        <p className='text-center'>
          Copyright © 2022. All rights reserved by Nguyen Minh
        </p>
      </div>
    </footer>
  )
}

export default Footer