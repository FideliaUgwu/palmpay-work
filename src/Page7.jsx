import Button10 from "./Button10.jsx";
import boy from "./assets/boy.jpeg";

function Page7() {
    return (
<div className="md:flex h-auto w-full bg-[#F0F0FF] md:px-28 md:py-25 py-10">
    {/* this is left side */} 
    <div className="md:mt-15 relative top-65 left-14">
        <div>
            <h1 className="md:text-5xl text-[31px] font-bold text-purple-900">Cashback on bills &</h1>
            <h1 className="md:text-5xl text-[31px] font-bold leading-2 md:leading-normal pl-25 md:pl-0 text-purple-900 md:mt-3">more</h1>
            <h3 className="text-purple-900 md:text-[25px] text-[15px] md:w-100 w-70 pl-7 md:pl-0 font-normal md:mt-15 mt-7">From airtime and bills to shopping,
                get extra value when paying with
                PalmPay.</h3>
        </div>

        <div className="md:mt-15 mt-7 md:mr-10">
            <Button10 />
        </div>
    </div>

    {/* this is right side */} 
    <div className="relative bottom-60 left-15">
        <img src={boy} alt="boy" className="md:h-135 h-60 w-70 md:w-145 mt-10 md:mt-0 rounded-4xl"/>
    </div>
</div>
    );
}
export default Page7;