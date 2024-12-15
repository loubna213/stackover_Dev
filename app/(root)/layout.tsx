import Navbar from '@/components/shared/navbar/Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='realtive background-light850_dark100'>
            <Navbar />
            <div className='flex'>
                LeftSidebar
                <section className='flex flex-col flex-1 min-h-screen px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
                    <div className='mx-auto w-full max-w-5xl'>
                        { children }
                    </div>
                </section>
                RighSideabr
            </div>
            toaster
        </main>
    )
}

export default Layout;