import Button8 from "./Button8.jsx";
import card from './assets/card.png';
function Page5() {
    return (
        <div className="md:flex w-full h-auto bg-[#F0F0FF] md:px-28 md:py-25 gap-10">
{/* this is left side */} 
            <div className="md:mt-15 relative top-65 left-14">
                <div>
                    <h1 className="text-purple-900 md:text-5xl text-[31px] pl-5 md:pl-0 font-bold">A debit card that</h1>
                    <h1 className="text-purple-900 md:text-5xl text-[31px] pl-25 md:pl-0 leading-0 md:leading-normal font-bold mt-3">works</h1>
                    <h3 className="text-purple-900 md:text-[25px] text-[15px] pl-10 md:pl-0 md:w-85 w-65 font-normal md:mt-15 mt-8">Shop online & in-store. Enjoy
                        lower fees and exclusive
                        merchant offers.</h3>
                </div>

                <div className="md:mt-15 mt-5">
                     <Button8 />
                     </div>
            </div>

{/* this is right side */} 
            <div className="relative bottom-45 left-15 pb-15 md:pb-0">
                <img src={card} alt="card" className="md:h-135 h-60 w-70 md:w-200 rounded-4xl"/>
            </div>

        </div>
    );
}
export default Page5;