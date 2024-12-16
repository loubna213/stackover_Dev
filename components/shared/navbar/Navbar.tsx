import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Theme from './Theme'
import MobileNav from './MobileNav'


const Navbar = () => {
  return (
    <nav className='flex-between gap-5 background-light900_dark200 fixed z-50 w-full dark:shadow-none sm:px-12 shadow-light-300 p-6'>
      <Link href="/" className='flex items-center gap-1'>
        <Image src='/assets/images/site-logo.svg' width={23} height={23} alt="DevFlow" />
        <p className='h2-bold font-spaceGrostek text-dark-100 dark:text-light-900 max-sm:hidden'>Dev <span className='text-primary-500'>Flow</span></p>
      </Link>
      SearchGlobal 
      <div className="flex-between gap-5">
        <Theme/>
        <SignedIn>
            <UserButton appearance={{ 
                elements: {
                    avatarBox: 'h-10 w-10'
                },
                variables: {
                    colorPrimary: "#FF7000"
                }
             }}/>
        </SignedIn>
      </div>
      <MobileNav />
    </nav>
  )
}

export default Navbar
