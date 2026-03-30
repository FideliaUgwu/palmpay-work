import handimage from "./assets/handimage.png";
import googlePlayBlack from "./assets/googleplayblack.png";
import appStoreBlack from "./assets/appstoreblack.png";

function Page11() {
    return (
        <div className="h-auto w-full bg-white md:px-30 flex md:gap-18">
            {/* this is left side */}
            <div className="md:mt-8 mt-5 md:ml-20 ml-10">
                <img src={handimage} alt="Hand Image" className="md:h-150 h-50 w-35 md:w-110"/>
                <img src="" alt=""/>
            </div>

            {/* this is right side */}
            <div className="md:mt-40 mt-10">
                <div className="text-purple-900 md:text-5xl text-[15px] ml-8 md:ml-0 font-bold leading-4 md:leading-13">
                    <h1>Download the</h1>
                    <h1>PalmPay app now</h1>
                    <h1>and discover a</h1>
                    <h1>smarter way to bank</h1>
                </div>


                <div className="md:mt-10 mt-5 flex md:h-14 h-6 w-23 md:w-48 gap-3">
                    <img src={googlePlayBlack} alt="Google Play"/>
                    <img src={appStoreBlack} alt="App Store"/>
                </div>
            </div>
        </div>
    );
}
export default Page11;