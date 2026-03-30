import googlePlayBlack from "./assets/googleplayblack.png";
import appStoreBlack from "./assets/appstoreblack.png";
import ButtonA from "./ButtonA.jsx";
import ButtonB from "./ButtonB.jsx"; 

function Page10() {
    return (
        <div className="h-auto w-full bg-[#E6C5FF] md:px-45 md:py-15 py-7">
            <h1 className="md:text-5xl text-[21px] text-purple-900 text-center font-bold">Loved by 40 Million Users</h1>

            <div className="md:mt-7 mt-2 text-purple-900 text-center font-normal md:text-[24px] text-[13px] leading-tight">
                <p>We are the highest-rated fintech app in Africa, with a 4.6*</p>
                <p>rating on the Google Play Store across 1.09 million reviews. </p>
            </div>


                <div className="md:flex md:mt-12 mt-6 md:gap-12">
                    <div className="ml-24 md:ml-0"><ButtonA /></div>
                    <div className="hidden md:block"><ButtonB /></div>
                    
                </div>


                <div className="md:mt-8   flex md:h-16 h-7 w-22 md:w-50 md:gap-10 gap-3 relative bottom-13 ml-27 md:ml-62">
                    <img src={googlePlayBlack} alt="Google Play"/>
                    <img src={appStoreBlack} alt="App Store"/>
                </div>
                
            
        </div>
    );
}
export default Page10;