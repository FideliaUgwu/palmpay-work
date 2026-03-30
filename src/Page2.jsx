
import Button3 from "./Button3.jsx";
import Button4 from "./Button4.jsx";
import Button5 from "./Button5.jsx";
import manimage from './assets/manimage.png';

function Page2() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8 md:mt-12 mt-8">
        <h1 className="md:text-5xl text-[17px] font-bold text-center text-purple-900">Built For People Going Places</h1>
        <h2 className="md:text-3xl text-[13px] md:mt-5 font-normal text-center text-purple-800">Earn more, save smarter, and level up your life</h2>
      </div>

      <div className="flex flex-col gap-7 mt-2 items-center md:flex-row md:gap-25 md:ml-25 md:mt-10 md:items-start">
        
        {/* this is left side */}
        <div className="flex flex-col md:gap-4 gap-0">
          <Button3 />
          <Button4 />
          <Button5 />
        </div>

        {/* this is right side */}
        <div className="">
          <img src={manimage} alt="Man Image" className="md:h-145 h-55 w-55 md:w-110" />
        </div>
      </div>
    </div>
  );
}

export default Page2;
