import imageA from "./assets/imageA.png";
import starredimage from "./assets/starredimage.png";
function ButtonB() {
    return (
    <div className="rounded-4xl bg-white p-8 h-80 w-110">{/* this is right side */}
    
                            <div className="flex">
                                <img src={imageA} className="h-10 w-10" alt=""/>
                                <span className="ml-5 text-[18px]">Anna</span>
                            </div>

                            <div className="flex mt-3 items-center">
                                <img src={starredimage} className="h-3 w-15" alt="rating"/>
                                <span className="ml-5">8/19/25</span>
                            </div>

                            <div className="mt-3 text-[15px] w-90">One of the best banking apps at the moment. Quick transactions, PalmPoints, betting discounts, and Coupon that reward users. In fact, it's the only banking app with so many benefits for its users. For me, it's PalmPay forever. Highly recommended for an amazing banking experience.</div>

                        </div>
    );
}
export default ButtonB;