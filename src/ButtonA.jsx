import imagechild from "./assets/imagechild.png";
import starredimage from "./assets/starredimage.png";
function ButtonA() {
    return (
    <div className="rounded-4xl bg-white md:p-8 p-5 md:h-80 h-114  w-52 md:w-110">{/* this is left side */}
    
                            <div className="flex">
                            <img src={imagechild} alt="" className="md:h-10 h-5 md:w-10 w-5"/>
                            <span className="md:text-[18px] text-[13px] md:ml-5 ml-8">Olamide Michael Olatunji</span>
                            </div>
    
                            <div className="flex md:mt-3 mt-2 items-center">
                                <img src={starredimage} className="md:h-3 h-1 w-8 md:w-15" alt=""/>
                                <span className="md:ml-5 ml-2 md:text-[18px] text-[13px]">8/18/25</span>
                            </div>
    
                            <div className="md:mt-3 mt-2 md:w-90 md:text-[15px] text-[13px]">PalmPay has been a game changer for me. Transactions are always fast and reliable, and I love the convenience of paying bills and sending money instantly without stress. The app is very easy to use, and the cashback rewards make it even better. Their loan and savings options are also quite helpful. Overall, PalmPay makes digital banking simple, quick, and rewarding. I highly recommend it!</div>
    
                        </div>
    
    );
}
export default ButtonA;