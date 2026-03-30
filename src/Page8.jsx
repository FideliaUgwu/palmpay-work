import family from "./assets/family.jpeg";
import Button11 from "./Button11.jsx";

function Page8() {
    return (
        <div className="md:flex h-auto w-full bg-white md:px-28 md:py-28 py-15">
            {/* this is left side */} 
            <div className="ml-15 md:ml-0">
                <img src={family} alt="family" className="md:h-135 h-60 w-70 md:w-140 rounded-4xl"/>
            </div>

            {/* this is right side */} 
            <div className="md:mt-15">
                <div className="md:text-5xl text-[31px] font-bold text-purple-900">
                    <h1 className="md:ml-45 ml-20 mt-2 md:mt-0">Life happens. Be</h1>
                    <h1 className="md:mt-3 md:ml-88 ml-30 leading-3 md:leading-normal">covered.</h1>
                </div>

                <div className="md:text-[25px] text-[15px] text-purple-900 md:mt-15 mt-7 font-normal">
                    <h3 className="md:ml-56 ml-26">Get quick, reliable protection</h3>
                    <h3 className="md:ml-52 ml-23">for health, phones, and more -</h3>
                    <h3 className="md:ml-73 ml-28">no paperwork needed.</h3>
                </div>

                <div className="md:mt-15 mt-5 md:ml-7 ml-15">
                    <Button11 />
                </div>
            </div>
        </div>
    );
}
export default Page8;