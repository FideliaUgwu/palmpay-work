import appStorelogo from './assets/appStorelogo.png'
import googlelogo from './assets/googlelogo.png'
import cbnlogo from './assets/cbnlogo.png'
import ndiclogo from './assets/ndiclogo.png'
import mobileAppPreview from './assets/mobileAppPreview.png'

function Home() {
    return (
        <div className=" md:flex items-center md:justify-between md:px-16" style={{ backgroundColor: '#8B2BF7', height: '600px' }}>
        {/* this is left side */}
            <div>
                                <h1 className="md:text-6xl text-[30px] font-bold pl-18 md:pl-0 md:pt-40 pt-25 leading-tight text-white md:w-140 w-80" style={{ textShadow: '6px 6px 8px rgba(0,0,0,0.8)' }}>The Smarter Way
                                    to Bank is Here</h1>
                <h2 className='md:text-[25px] text-[14px] text-white md:w-110 w-80 md:pt-10 pt-5 pl-18 md:pl-0'>Tools to help you pay, earn, save and
                    grow - all in one app</h2>

            <div className='flex md:pt-12 pt-5 pl-22 md:pl-0'> {/* app store and google play logos */}
                <img src={googlelogo} alt="Google Logo" className="md:h-13 md:w-40 h-7 w-24" />
                <img src={appStorelogo} alt="App Store" className="md:h-13 md:w-40 h-7 w-26 pl-3" />
            </div>

            <div className='flex text-white md:pt-10 pt-7 pl-22 md:pl-0 md:pb-15 pb-6 md:space-x-10 space-x-5'> {/* CBN and NDIC logos with text */}
                <div className='flex'>
                <span className='md:text-[10px] text-[9px] md:w-15 w-12'>Licenced by the CBN</span>
                <img src={cbnlogo} alt="CBN Logo" className="md:h-9 h-8 md:w-9 w-8 pl-2" />
            </div>

            <div className='flex'>
                <span className='md:text-[10px] text-[9px] md:w-15 w-12'>Deposits insured by</span>
                <img src={ndiclogo} alt="NDIC Logo" className="md:h-6 h-5 md:w-15 w-13 md:pl-2 pl-1" />
            </div>
            </div>
            
            </div>

        {/* this is right side */}
        <div className='md:mt-10 pl-25 md:pl-0'>
            <img src={mobileAppPreview} alt="Mobile App Preview" className="md:h-140 md:w-135 h-56 w-50 md:pr-30" />
        </div>
        </div>

    );
    
}   
export default Home;