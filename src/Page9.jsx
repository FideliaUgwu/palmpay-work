import cbn2 from "./assets/cbn2.png";
import ndic2 from "./assets/ndic2.png";
function Page9() {
    return (
        <div className="h-auto w-full bg-[#F0F0FF] md:px-28 md:py-15 py-8 text-purple-900">
            <div>{/* this is the first div */}
                <h1 className="md:text-5xl text-[17px] text-center font-bold">Your money's safe space</h1>
            </div>



            <div className="flex md:mt-15 mt-7 md:text-[17px] px-22 md:px-0 text-[8px] font-bold md:ml-75">{/* this is the second div */}

                <div className="flex items-center"> {/* this is left side */}
                    <span>Licenced bythe CBN</span>
                    <img src={cbn2} alt="" className="md:h-16 h-7 md:w-12 w-5 md:ml-5"/>
                    </div>

                <div className="flex md:ml-15 ml-5 items-center">{/* this is right side */}
                    <span>Deposits
                        insured by
                    </span>
                    <img src={ndic2} alt="" className="md:h-17 h-8 md:w-28 w-15 md:ml-5"/>
                     </div>
            </div>



            <div className="md:mt-20 mt-8 md:flex md:justify-between text-center">{/* this is the third div */}
                <div>
                    <h2 className="md:text-[25px] text-[17px] font-bold">Licenced by the CBN</h2>
                    <div className="md:text-[18px] text-[13px] font-normal md:mt-5 mt-3">
                        <h3 className="md:ml-5">We are fully licensed by the</h3>
                        <h3 className="md:ml-4">Central Bank of Nigeria, so you</h3>
                        <h3 className="md:ml-5">can bank with confidence</h3>
                        <h3>knowing your money is always in</h3>
                        <h3 className="md:ml-20">safe hands.</h3>
                    </div>

                </div>
                <div className="border-l-2 border-purple-900"></div>


                <div className="mt-10 md:mt-0">
                    <h2 className="md:text-[25px] text-[17px] font-bold text-center">Reliable</h2>
                    <div className="md:text-[18px] text-[13px] font-normal md:mt-5 mt-3">
                        <h3 className="md:ml-5">We safeguard your data and</h3>
                        <h3>funds with advanced encryption,</h3>
                        <h3 className="md:ml-5">fraud detection, and multiple</h3>
                        <h3 className="md:ml-10">authentication layers.</h3>
                        </div>
                </div>

                <div className="border-l-2 border-purple-900"></div>



                <div className="mt-10 md:mt-0">
                    <h2 className="md:text-[25px] text-[17px] font-bold text-center">24/7 Support</h2>
                    <div className="md:text-[18px] text-[13px] font-normal md:mt-5 mt-3">
                        <h3 className="md:ml-5">Our customer care and fraud</h3>
                        <h3>desk are available 24/7, with in-</h3>
                        <h3 className="md:ml-5">app reporting tools for instant</h3>
                        <h3>support whenever you need it.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Page9;