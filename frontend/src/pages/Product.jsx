import React from 'react'
import Navbar from '../components/Navbar'
import CustomCursor from '../components/CustomCursor'

function Product() {
    return (
        <div className='w-screen bg-black h-screen px-10 text-white'>
            <Navbar />
            <CustomCursor/>
            <div className='h-160 flex gap-5 pt-10'>
                <div className="h-full w-1/2">
                    <img src="https://img-getpocket.cdn.mozilla.net/592x296/smart/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fmedia.self.com%2Fphotos%2F687691af8485f00c3ec51e6c%2F2%3A1%2Fw_1280%2Cc_limit%2FAdobeStock_219199326.png" alt="" className='w-full h-full' />
                </div>
                <div className="h-full w-1/2 flex flex-col gap-5 pt-5 px-5">
                    <h3>Name</h3>
                    <h3>Price</h3>
                    <h3>details</h3>
                    <h3>seller</h3>
                    <h3>warrenty</h3>
                    <h3>offers</h3>
                    <div className="flex items-center justify-center gap-20 mt-10">
                        <div className='select-none border px-5 py-3 rounded-lg active:scale-99 active:shadow-zinc-700 active:shadow-md'>add to cart</div>
                        <div className='select-none border px-5 py-3 rounded-lg active:scale-99 active:shadow-zinc-700 active:shadow-md'>buy now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product