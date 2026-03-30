import googlelogo from "./assets/googlelogo.png";
import appstorelogo from "./assets/appstorelogo.png";

function Page12() {
    return (
        <div className="md:h-30 h-38 w-full bg-[rgb(111,6,192)] md:px-25 px-5 items-center md:flex md:gap-25 " >
            <div>
                <h1 className="text-white pt-8 md:pt-0 md:text-4xl text-[21px] md:font-bold font-semibold">Join <span className="text-white md:text-5xl font-extrabold">40 million</span> users who love PalmPay</h1>
            </div>


            <div className="flex md:h-12 h-6 w-23 md:w-40 mt-5 md:mt-0 gap-3">
                <img src={googlelogo} alt="Google Logo"/>
                <img src={appstorelogo} alt="App Store Logo"/>
            </div>
        </div>
    );
}
export default Page12;