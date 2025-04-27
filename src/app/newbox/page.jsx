import React from 'react'

function page() {
  return (
    <div className='w-[100%] justify-center bg-black items-center flex flex-col'>
        <div className='relative mt-[100px] w-[100%] justify-center items-center flex flex-col'>
            <div className='absolute top-[-20px]  md:top-[-70px]'>
                <img src="/image/Mega Bar.png" className='flex h-[120px] md:h-full' alt="" />
            </div>
            <div className='flex overflow-hidden mt-[50px] pt-[100px] flex-col w-[90%] md:w-[60%] px-[15px] md:px-[50px] justify-center items-center bg-[#232323] py-[40px] rounded-[30px] border-[#E3E354] border-2 '>
               
                <div className='flex justify-center items-center'>
                    <div className='md:w-[300px]  w-[20%]'>
                        <img src="/image/golden line 1@2x.png" alt="" />
                    </div>
                    <div className='text-[#E3E354] border-2 border-[#E3E354] justify-center items-center flex w-[60%] md:w-[300px] py-[5px] md:py-[10px] text-[10px] md:text-[18px] rounded-full'>
                        $MEGA LAUNCH
                    </div>
                    <div className='md:w-[300px] w-[20%]'>
                        <img src="/image/golden line 1@2x.png" alt="" />
                    </div>
                </div>
                <div className='w-[100%] mt-[20px] text-white flex justify-between font-semibold text-[14px]'>
                    <p>Current Progress</p>
                    <p>Sold Tokens: 24.312.500/47.000.000</p>
                </div>

                <div className="w-full relative">
                    {/* background bar */}
                    <div className="bg-gray-500 w-full rounded-full flex justify-end pr-[20px] items-center h-[30px] md:h-[37px] mt-[20px]">
                        <p className="text-white">4.700 ETH</p>
                    </div>

                    {/* gradient progress bar */}
                    <div
                        className="absolute top-[20px] left-0 w-[47%] rounded-full flex justify-end pr-[20px] items-center h-[30px] md:h-[37px]"
                        style={{
                        background: "linear-gradient(to right, #E3E354, #E3E354)",
                        }}
                    >
                        <p className="text-black">46%</p>
                    </div>
                </div>

                <div className='w-[100%] justify-between gap-[20px] md:gap-0 flex flex-col md:flex-row mt-[20px] items-center'>
                    <div className='flex gap-[30px] w-[100%] md:w-[40%]'>
                        <div className='w-[30%] md:w-[190px] h-[42px] border-2 border-[#E3E354] bg-black rounded-full flex justify-center items-center gap-[5px]'>
                            <img src="/image/eth.png" alt="" />
                            <p className='text-white font-bold text-[13px] md:text-[18px]'>ETC</p>
                        </div>
                        <div className='w-[30%] md:w-[190px] h-[42px] border-2 border-[#E3E354] bg-black rounded-full flex justify-center items-center gap-[5px]'>
                            <img src="/image/usdc.png" alt="" />
                            <p className='text-white font-bold text-[13px] md:text-[18px]'>USDC</p>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[338px] h-[42px] border-2 border-[#E3E354] bg-black rounded-full flex justify-between px-[10px] items-center gap-[5px]'>
                        <p className='text-gray-300 font-bold text-[18px]'>Current Balance: 0.0</p>
                        <div className='flex gap-[10px]'>
                            <img src="/image/eth.png" alt="" />
                            <p className='text-white font-bold text-[18px]'>USDC</p>
                        </div>
                    </div>
                </div>

                <div className='w-[100%] flex justify-between items-center mt-[20px] border-2 border-[#E3E354] px-[10px] md:px-[20px] rounded-[20px] py-[10px] md:py-[15px]'>
                    <div className='flex items-center justify-center gap-[10px]'>
                        <img src="/image/eth.png" className='w-[24px] h-[24px]' alt="" />
                        <div>
                            <p className='text-white text-[10px] md:text-[18px]'>0.0 ETH</p>
                            <p className='text-gray-300 text-[10px] md:text-[18px]'>0.0 USD</p>
                        </div>
                    </div>
                    <button className='bg-gradient-to-b from-[#E3D7AE] to-[#E3E354] text-black text-[13px] md:text-[18px] font-bold w-[40%] md:w-[212px] py-[15px] rounded-full'>
                        Max Amount
                    </button>
                </div>

                <div className='flex justify-center items-center mt-[30px]'>
                    <div className='md:w-[300px] w-[20%]'>
                        <img src="/image/golden line 1@2x.png" alt="" />
                    </div>
                  
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-white text-18px]'>You Will Receive</p>
                        <p className='text-[#E3E354] text-[22px]'>0 $MEGA</p>
                    </div>
                    <div className='md:w-[300px] w-[20%]'>
                        <img src="/image/golden line 1@2x.png" alt="" />
                    </div>
                </div>

                <div className='w-[100%] flex justify-between items-center mt-[40px]  px-[20px] bg-[#44444440] rounded-[10px] py-[15px]'>
                        <p className='text-white font-bold text-[13px] md:text-[18px]'>Your $MEGA Balance</p>
                        <p className='text-white font-bold text-[13px] md:text-[18px]'>0 $MEGA</p>  
                </div>
                <button className='bg-gradient-to-b from-[#E3D7AE] to-[#E3E354] mt-[20px] w-[100%] text-black text-[13px] md:text-[18px] font-bold py-[15px] rounded-full'>
                        Connect Wallet
                </button>
            </div>

        </div>

        <div className='relative mt-[100px] w-[100%] justify-center items-center flex flex-col'>
            <div className='absolute top-[-20px]  md:top-[-70px]'>
                <img src="/image/Mega Bar.png" className='flex h-[120px] md:h-full' alt="" />
            </div>
            <div className='flex overflow-hidden mt-[50px] pt-[100px] flex-col w-[90%] md:w-[60%] px-[15px] md:px-[50px] justify-center items-center bg-[#232323] py-[40px] rounded-[30px] border-[#E3E354] border-2 '>
               
                <div className='flex justify-center items-center'>
                    <div className='md:w-[300px]  w-[20%]'>
                        <img src="/image/golden line 1@2x.png" alt="" />
                    </div>
                    <div className='text-[#E3E354] border-2 border-[#E3E354] justify-center items-center flex w-[60%] md:w-[300px] py-[5px] md:py-[10px] text-[10px] md:text-[18px] rounded-full'>
                        $MEGA LAUNCH
                    </div>
                    <div className='md:w-[300px] w-[20%]'>
                        <img src="/image/golden line 1@2x.png" alt="" />
                    </div>
                </div>
                <div className='w-[100%] mt-[20px] text-white flex justify-between font-semibold text-[14px]'>
                    <p>Current Progress</p>
                    <p>Sold Tokens: 24.312.500/47.000.000</p>
                </div>

                <div className="w-full relative">
                    {/* background bar */}
                    <div className="bg-gray-500 w-full rounded-full flex justify-end pr-[20px] items-center h-[30px] md:h-[37px] mt-[20px]">
                        <p className="text-white">4.700 ETH</p>
                    </div>

                    {/* gradient progress bar */}
                    <div
                        className="absolute top-[20px] left-0 w-[47%] rounded-full flex justify-end pr-[20px] items-center h-[30px] md:h-[37px]"
                        style={{
                        background: "linear-gradient(to right, #E3E354, #E3E354)",
                        }}
                    >
                        <p className="text-black">46%</p>
                    </div>
                </div>

                <div className='w-[100%] justify-between gap-[20px] md:gap-0 flex flex-col md:flex-row mt-[20px] items-center'>
                    <div className='flex gap-[30px] w-[100%] md:w-[40%]'>
                        <div className='w-[30%] md:w-[190px] h-[42px] border-2 border-[#E3E354] bg-black rounded-full flex justify-center items-center gap-[5px]'>
                            <img src="/image/eth.png" alt="" />
                            <p className='text-white font-bold text-[13px] md:text-[18px]'>ETC</p>
                        </div>
                        <div className='w-[30%] md:w-[190px] h-[42px] border-2 border-[#E3E354] bg-black rounded-full flex justify-center items-center gap-[5px]'>
                            <img src="/image/usdc.png" alt="" />
                            <p className='text-white font-bold text-[13px] md:text-[18px]'>USDC</p>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[338px] h-[42px] border-2 border-[#E3E354] bg-black rounded-full flex justify-between px-[10px] items-center gap-[5px]'>
                        <p className='text-gray-300 font-bold text-[18px]'>Current Balance: 0.0</p>
                        <div className='flex gap-[10px]'>
                            <img src="/image/eth.png" alt="" />
                            <p className='text-white font-bold text-[18px]'>USDC</p>
                        </div>
                    </div>
                </div>

                <div className='w-[100%] flex justify-between items-center mt-[20px] border-2 border-[#E3E354] px-[10px] md:px-[20px] rounded-[20px] py-[10px] md:py-[15px]'>
                    <div className='flex items-center justify-center gap-[10px]'>
                        <img src="/image/eth.png" className='w-[24px] h-[24px]' alt="" />
                        <div>
                            <p className='text-white text-[10px] md:text-[18px]'>0.0 ETH</p>
                            <p className='text-gray-300 text-[10px] md:text-[18px]'>0.0 USD</p>
                        </div>
                    </div>
                    <button className='bg-gradient-to-b from-[#E3D7AE] to-[#E3E354] text-black text-[13px] md:text-[18px] font-bold w-[40%] md:w-[212px] py-[15px] rounded-full'>
                        Max Amount
                    </button>
                </div>

                <div className='flex justify-center items-center mt-[30px]'>
                    <div className='md:w-[300px] w-[20%]'>
                        <img src="/image/golden line 1@2x.png" alt="" />
                    </div>
                  
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-white text-18px]'>You Will Receive</p>
                        <p className='text-[#E3E354] text-[22px]'>0 $MEGA</p>
                    </div>
                    <div className='md:w-[300px] w-[20%]'>
                        <img src="/image/golden line 1@2x.png" alt="" />
                    </div>
                </div>

                <div className='w-[100%] flex justify-between items-center mt-[40px]  px-[20px] bg-[#44444440] rounded-[10px] py-[15px]'>
                        <p className='text-white font-bold text-[13px] md:text-[18px]'>Your $MEGA Balance</p>
                        <p className='text-white font-bold text-[13px] md:text-[18px]'>0 $MEGA</p>  
                </div>
                <button className='bg-gradient-to-b from-[#E3D7AE] to-[#E3E354] mt-[20px] w-[100%] text-black text-[13px] md:text-[18px] font-bold py-[15px] rounded-full'>
                        BUY $MEGA
                </button>
            </div>

        </div>
      
    </div>
  )
}

export default page
