import Button6 from "./Button6.jsx";
import friends from './assets/friends.jpeg';

function Page3() {
    return (
        <div className="md:flex gap-10 bg-[#F0F0FF] h-160 w-full md:px-20 md:py-20">
             {/* this is left side */}  
         <div className="relative top-65 left-14">
            <div>
                <h1 className="md:text-5xl text-[31px] text-purple-900 leading-7 md:leading-tight md:w-150 w-60 font-bold md:mt-10 pt-10">Stop paying to send money</h1>
                <h2 className="md:text-[25px] text-[15px] md:mt-10 mt-4 leading-tight text-purple-900">PalmPay gives you
            </h2>
            <h3 className="text-purple-600 md:text-[25px] text-[15px]">unlimited free bank transfers</h3>
            <h4 className="text-purple-900 md:text-[25px] text-[15px]">- no daily limits, no hidden fees.</h4>
            <div className="md:mt-10 mt-3">
                <Button6 />
                </div>

            
         </div>
       </div>


        {/* this is right side */}
          <div className="relative bottom-45 left-14">
            <img src={friends} alt="friends" className="md:h-110 h-60 md:w-160 w-73 rounded-4xl" />
        </div>
        </div>
    );
}

export default Page3;