import { Link } from 'react-router-dom';
import logolight from "./assets/logolight.png";
import centralBank from "./assets/centralbank.png";
import PCI from "./assets/PCI.png";
import NDIC from "./assets/NDIC.png";
import NDPC from "./assets/NDPC.png";
import fccpc from "./assets/fccpc.png";
import instagram from "./assets/instagram.png";
import facebook from "./assets/facebook.png";
import XCorp from "./assets/XCorp.png";
import linkedin from "./assets/linkedin.png";

function Footer() {
    return (
        <div className='bg-black text-white h-auto w-full md:py-12 py-10 px-5 md:px-30'>{/* main div */}

          {/* upper section with logos and links */}
            <div className='md:flex justify-between gap-20'>

                {/* left column - logos */}
                <div className='flex flex-col gap-6 min-w-max  border-b pb-10 md:pb-0 border-[#FFFFFF4D]'>{/* logo section */}  
                    <img src={logolight} className='h-8 w-30' alt="PalmPay"/>
                    <div className='flex flex-col md:gap-6 gap-4'>
                        <img src={centralBank} className='h-10 w-40' alt="Central Bank"/>
                        <img src={PCI} className='h-10 w-40' alt="PCI"/>
                        <img src={NDIC} className='h-10 w-40' alt="NDIC"/>
                        <img src={NDPC} className='h-10 w-40' alt="NDPC"/>
                        <img src={fccpc} className='h-10 w-40' alt="FCCPC"/>
                    </div>
                </div>

                {/* right section with all links columns */}
                <div className='md:flex gap-24 flex-1 justify-start'>

                    {/* Personal column */}
                    <div className='flex flex-col gap-3 min-w-max pt-6 md:pt-0 border-b pb-10 md:pb-0 border-[#FFFFFF4D]'>  
                        <h3 className='md:text-lg text-[17px] font-semibold mb-2'>Personal</h3>
                        <Link to="/palmpay-app" className='text-gray-300 hover:text-white text-sm '>PalmPay App</Link>
                        <Link to="/send-receive" className='text-gray-300 hover:text-white text-sm'>Send and Receive Money</Link>
                        <Link to="/bill-payment" className='text-gray-300 hover:text-white text-sm'>Bill Payment</Link>
                        <Link to="/buy-shop" className='text-gray-300 hover:text-white text-sm'>Buy and Shop</Link>
                    </div>

                    {/* Business column */}
                    <div className='flex flex-col gap-3 min-w-max pt-6 md:pt-0 border-b pb-10 md:pb-0 border-[#FFFFFF4D]'>  
                        <h3 className='md:text-lg text-[17px] font-semibold mb-2'>Business</h3>
                        <Link to="/payin" className='text-gray-300 hover:text-white text-sm'>Payin</Link>
                        <Link to="/payout" className='text-gray-300 hover:text-white text-sm'>Payout</Link>
                        <Link to="/pos" className='text-gray-300 hover:text-white text-sm'>POS</Link>
                        <Link to="/pay-transfer" className='text-gray-300 hover:text-white text-sm'>Pay with Transfer</Link>
                        <Link to="/business-account" className='text-gray-300 hover:text-white text-sm'>Business Account</Link>
                        <Link to="/management" className='text-gray-300 hover:text-white text-sm'>Management</Link>
                        <Link to="/agent-network" className='text-gray-300 hover:text-white text-sm'>Agent Network</Link>
                    </div>

                    {/* Company column */}
                    <div className='flex flex-col gap-3 min-w-max pt-6 md:pt-0 border-b pb-10 md:pb-0 border-[#FFFFFF4D]'>  
                        <h3 className='md:text-lg text-[17px] font-semibold mb-2'>Company</h3>
                        <Link to="/about" className='text-gray-300 hover:text-white text-sm'>About</Link>
                        <Link to="/blog" className='text-gray-300 hover:text-white text-sm'>Blog</Link>
                        <Link to="/press-media" className='text-gray-300 hover:text-white text-sm'>Press and Media</Link>
                        <Link to="/contact" className='text-gray-300 hover:text-white text-sm'>Contact</Link>
                        <Link to="/careers" className='text-gray-300 hover:text-white text-sm'>Careers</Link>
                    </div>

                    {/* Legal column */}
                    <div className='flex flex-col gap-3 min-w-max pt-6 md:pt-0 border-b pb-10 md:pb-0 border-[#FFFFFF4D]'>  
                        <h3 className='md:text-lg text-[17px] font-semibold mb-2'>Legal</h3>
                        <Link to="/privacy-policy" className='text-gray-300 hover:text-white text-sm'>Privacy Policy</Link>
                        <Link to="/terms-conditions" className='text-gray-300 hover:text-white text-sm'>Terms & Conditions</Link>
                        <Link to="/complaints" className='text-gray-300 hover:text-white text-sm'>Complaints</Link>
                        <Link to="/loan-privacy" className='text-gray-300 hover:text-white text-sm'>Loan Privacy Policy</Link>
                    </div>
                </div>
            </div>

            {/* bottom section - copyright and social icons */}
            <div className='md:flex md:justify-between md:pt-14 pt-18 border-b border-[#FFFFFF4D] pb-6'>
                <div className='relative top-4'>
                    <p className='text-gray-400 font-semibold text-sm'>© 2026 PalmPay. All rights reserved.</p>
                </div>

                {/* social media icons */}
                <div className='flex md:gap-6 gap-4 relative bottom-15'>
                    <img src={instagram} alt="Instagram" className='h-6 w-6 cursor-pointer hover:opacity-80'/>
                    <img src={facebook} alt="Facebook" className='h-6 w-6 cursor-pointer hover:opacity-80'/>
                    <img src={XCorp} alt="X Corp" className='h-6 w-6 cursor-pointer hover:opacity-80'/>
                    <img src={linkedin} alt="LinkedIn" className='h-6 w-6 cursor-pointer hover:opacity-80'/>
                </div>
            </div>

            <div className='py-5 text-[#FFFFFF4D]'>
                <p className='md:text-[15px] text-[13px] md:font-semibold leading-6 md:leading-normal'>PalmPay is a financial service provided by PalmPay Limited, licensed and regulated by the Central Bank of Nigeria (CBN). Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC). Loan services on PalmPay are provided by Flexi Microfinance Bank Limited, licensed by the Central Bank of Nigeria (CBN). We empower individuals and businesses with payments solutions, high-yield investment opportunities, and easy-to-use tools for financial management. We are a global company with a presence in Nigeria, Ghana, Tanzania, and the United Kingdom.</p>
            </div>
        </div>
    );
}
export default Footer;