import React from 'react'

const Candidatedata=()=> {
  return (
    <div >
            <table id="default-table" className='w-full '>
                <thead>
                    <tr>
                        <th>
                            <span className="flex items-center">
                                Name
                            </span>
                        </th>
                        <th >
                            <span className="flex items-center">
                                Party Name
                            </span>
                        </th>
                        <th>
                            <span className="flex items-center">
                                Constituency Name
                            </span>
                        </th>
                        <th>
                            <span className="flex items-center">
                                Symbol
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">JayPrakash</td>
                        <td>jay party</td>
                        <td>C 1</td>
                        <td>@</td>
                    </tr>
                    <tr>
                        <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Raghav</td>
                        <td>Veer party</td>
                        <td>C 1</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Naath</td>
                        <td>jay part</td>
                        <td>C 2</td>
                        <td>@</td>
                    </tr>
                    <tr>
                        <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Varaa</td>
                        <td>Veer party</td>
                        <td>C 2</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Ram</td>
                        <td>Vijay party</td>
                        <td>C 3</td>
                        <td>$</td>
                    </tr>
                
                </tbody>
            </table>

    </div>
  )
}

export default Candidatedata