import React from 'react'
import {area} from '../area'

const Addconstituency=({onClose})=> {
  return (
    <div>
         <div className='flex flex-row justify-between'>
        <h1>Add  Candidate</h1>

        <button type="button" onClick={onClose}>
        x
        </button>
    </div>

    <div className='mt-6'>
       
        <form class="max-w-lg mt-10">
          <div class="relative z-0 w-full mb-5 group">
              <input type="text" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Constituency Name</label>
          </div>
          
          <fieldset>
                <legend class="sr-many">Select Area</legend>
                <div id='area-option'>
                {area.map((area,index) => (
                    <div key={index} class="flex items-center mb-4">
                        <input id={`area-option-1-${index + 1}`} type="radio" name="area" value={area} class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
                        <label for={`area-option-1-${index + 1}`} class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {area}
                        </label>
                    </div>
                ))}
                </div>
            </fieldset>

          
          <button type="submit" class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-blue-800">Submit</button>
        </form>


  </div>
    </div>
  )
}

export default Addconstituency