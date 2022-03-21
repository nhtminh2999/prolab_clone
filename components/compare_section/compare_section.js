import { motion } from 'framer-motion'
import Image from 'next/image'

const CompareSection = () => {
  return (
    <section className="pt-[90px] px-[0] pb-[90px] relative">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="mb-6 text-[25px] leading-[35px] font-bold capitalize text-[#242424] lg:text-[40px] lg:leading-[50px]">
            Compare Similar Products
          </h2>
          <p className="max-w-[650px] text-[16px] leading-[26px] text-[#555] mx-auto">
            Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
          </p>
        </div>
        <div className="flex mx-[-15px]">
          <div className="w-full px-[15px]">
            <motion.table
              className='compare-table'
              initial={{ visibility: 'hidden', opacity: 0, y: 200 }}
              whileInView={{ visibility: 'visible', opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 60, duration: 1 }}
            >
              <thead>
                <tr>
                  <th className=''></th>
                  <th>
                    <div className='product-image'>
                      <Image layout='responsive' src="/mydrone3.png" alt="drone-1" width={1920} height={1080} />
                    </div>
                    <h3>Watch Yellow</h3>
                    <p>For Man & Woman</p>
                  </th>
                  <th>
                    <div className='product-image'>
                      <Image layout='responsive' src="/mydrone4.png" alt="drone-1" width={1920} height={1080} />
                    </div>
                    <h3>Watch Black</h3>
                    <p>For Man & Woman</p>
                  </th>
                  <th>
                    <div className='product-image'>
                      <Image layout='responsive' src="/mydrone5.png" alt="drone-1" width={1920} height={1080} />
                    </div>
                    <h3>Watch White</h3>
                    <p>For Man & Woman</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className=''>Price</th>
                  <td className='sale-price'>$335</td>
                  <td className='sale-price'>$424</td>
                  <td className='sale-price'>$579</td>
                </tr>
                <tr className='bg-black-50'>
                  <th className='text-[#555]'>Brand</th>
                  <td className='text-[#555]'>Apple</td>
                  <td className='text-[#555]'>Microsoft</td>
                  <td className='text-[#555]'>MSI</td>
                </tr>
                <tr >
                  <th className='text-[#555]'>Color</th>
                  <td className='text-[#555]'>Yellow</td>
                  <td className='text-[#555]'>Black</td>
                  <td className='text-[#555]'>White</td>
                </tr>
                <tr className='bg-black-50'>
                  <th className='text-[#555]'>Compatible with</th>
                  <td className='text-[#555]'>Android 4.0 iOS7 and above</td>
                  <td className='text-[#555]'>Android 5.0, iOS8 and above</td>
                  <td className='text-[#555]'>Android 6.0, iOS9 and above</td>
                </tr>
                <tr >
                  <th className='text-[#555]'>Item Dimensions</th>
                  <td className='text-[#555]'>9 x 3.01 x 0.79 in</td>
                  <td className='text-[#555]'>7 x 5.03 x 0.63 in</td>
                  <td className='text-[#555]'>10 x 2.01 x 0.21 in</td>
                </tr>
                <tr className='bg-black-50'>
                  <th className='text-[#555]'>Item Weight</th>
                  <td className='text-[#555]'>0.7 lb</td>
                  <td className='text-[#555]'>2.4 ounces</td>
                  <td className='text-[#555]'>0.9 lb</td>
                </tr>
                <tr >
                  <th className='text-[#555]'>Operating System</th>
                  <td className='text-[#555]'>iOS</td>
                  <td className='text-[#555]'>iOS, Android</td>
                  <td className='text-[#555]'>890mAh</td>
                </tr>
                <tr className='bg-black-50'>
                  <th className='text-[#555]'>Battery Capacity</th>
                  <td className='text-[#555]'>670mAh</td>
                  <td className='text-[#555]'>780mAh</td>
                  <td className='text-[#555]'>890mAh</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <td className='text-center'>
                    <button className='btn btn-secondary w-[120px] h-10 leading-10 text-sm'>
                      <span className='relative z-[2]'>Buy Now</span>
                    </button>
                  </td>
                  <td className='text-center'>
                    <button className='btn btn-secondary w-[120px] h-10 leading-10 text-sm'>
                      <span className='relative z-[2]'>Buy Now</span>
                    </button>
                  </td>
                  <td className='text-center'>
                    <button className='btn btn-secondary w-[120px] h-10 leading-10 text-sm'>
                      <span className='relative z-[2]'>Buy Now</span>
                    </button>
                  </td>
                </tr>
              </tfoot>
            </motion.table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompareSection