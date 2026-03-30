import Button7 from "./Button7.jsx";
import manimage from './assets/manimage.jpeg';
function Page4() {
    return (
        <div className="md:flex gap-10 bg-white h-auto w-full md:px-28 md:py-30 py-12">
            {/* this is left side */} 
            <div>
                <img src={manimage} alt="man"  className="md:h-135 h-60 w-73 md:w-350 ml-14 md:ml-0 rounded-4xl"/>
            </div>

            {/* this is right side */} 
            <div>
                <h1 className="text-purple-900 md:text-5xl text-[30px] font-bold md:pt-10 pt-3 pl-20">Earn up to 20% on</h1>
                <h1 className="text-purple-900 md:text-5xl text-[30px] font-bold w-80 leading-0 md:leading-7 md:ml-50 ml-30 md:mt-3 mt-1">your savings</h1>
                <h2 className="text-purple-900 md:text-[25px] text-[15px] W-80 md:mt-13 mt-8 md:ml-20 text-center md:text-start font-normal">You work hard for your money. We work just as hard for you. Pick from  <span className="text-purple-700">flexible and fixed plans</span> to help you reach your goals faster.
</h2>

<div className="md:mt-15 mt-5 md:px-10 ml-14 md:ml-0 py-2 ">
    <Button7 />
</div>
            </div>
        </div>
    );
}
export default Page4;