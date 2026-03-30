import girl from "./assets/girl.jpeg";
import Button9 from "./Button9.jsx";

function Page6() {
    return (
     <div className="md:flex h-auto w-full bg-white md:px-28 md:py-30 py-15">
{/* this is left side */} 
        <div className="pl-15 md:pl-0">
            <img src={girl} alt="girl" className="md:h-135 h-60 w-70 md:w-140 rounded-4xl"/>
        </div>

{/* this is right side */}
        <div className="md:mt-15 mt-3">
            <div className="text-purple-900 font-bold">
                <h1 className="md:text-5xl text-[31px] font-bold md:ml-18 ml-15">Get credit when you</h1>
                <h1 className="md:text-5xl text-[31px] leading-3 md:leading-normal md:mt-3 md:ml-90 ml-35">need it</h1>

                <div className="md:mt-15 mt-5">
                    <h3 className="md:text-[24px] text-[15px] font-normal md:ml-60 ml-30">With instant approval and</h3>
                    <h3 className="md:text-[24px] text-[15px] font-normal md:ml-50 ml-27">transparent pricing, credit on</h3>
                    <h3 className="md:text-[24px] text-[15px] font-normal md:ml-40 ml-23">PalmPay helps you move forward.</h3>
                </div>
            </div>

            <div className="md:mt-15 mt-5 md:ml-7 ml-13">
                <Button9 />
                </div>
        </div>

     </div>   
    );
}
export default Page6;