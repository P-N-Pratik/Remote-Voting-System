import React,{useState} from "react";
import { useFormOptions } from "../../../utils/customHooks/useFormOptions.js" ;
import axios from "axios";

function Addvoterdetails({ onClose }) {

  const [formData, setFormData] = useState({
    avatar: null,
    fullName: "",
    email: "",
    address: "",
    voterIdNo: "",
    aadharNo: "",
    district: "",
    taluka: "",
    state: "",
    city: "",
    pincode: "",
    mobileNo: "",
    municipalCorporation: "",
    constituency: "",
  });

  const { 
    districts, 
    talukas, 
    states, 
    cities, 
    municipalCorporations, 
    constituencies 
  } = useFormOptions();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create FormData object to send file and form data
    const data = formData;
    console.log(data);
    // for (const key in formData) {
    //   data.append(key, formData[key]);
    // }

    try {
      const response = await axios.post(`/api/v1/users/register`, data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });

      if (response.data.statusCode === 200) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
        console.error('Verification failed');
        // Handle verification failure (e.g., show error message)
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle submission error (e.g., show error message)
    }
  };

  return (



    // <div>
    //   <div className="flex flex-row justify-between">
    //     <h1>Addvoterdetails</h1>
    //     <button type="button" onClick={onClose}>
    //       x
    //     </button>
    //   </div>

    //   <div className="mt-6">
    //     <form className="max-w-md ">
    //       <label
    //         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //         for="user_avatar"
    //       >
    //         Upload Photo
    //       </label>
    //       <input
    //         className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    //         aria-describedby="user_avatar_help"
    //         id="user_avatar"
    //         type="file"
    //       />
    //     </form>

    //     <form class="max-w-md mt-10">
    //       <div class="relative z-0 w-full mb-5 group">
    //         <input
    //           type="text"
    //           name="fullName"
    //           id="fullName"
    //           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           for="floating_repeat_password"
    //           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Full Name
    //         </label>
    //       </div>
    //       <div class="relative z-0 w-full mb-5 group">
    //         <input
    //           type="email"
    //           name="floating_email"
    //           id="floating_email"
    //           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           for="floating_email"
    //           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Email address
    //         </label>
    //       </div>

    //       <div class="relative z-0 w-full mb-5 group">
    //         <input
    //           type="text"
    //           name="fullName"
    //           id="fullName"
    //           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           for="floating_repeat_password"
    //           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Full Address
    //         </label>
    //       </div>

    //       <div class="relative z-0 w-full mb-5 group">
    //         <input
    //           type="text"
    //           name="repeat_password"
    //           id="floating_repeat_password"
    //           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           for="floating_repeat_password"
    //           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Voter ID No
    //         </label>
    //       </div>

    //       <div class="relative z-0 w-full mb-5 group">
    //         <input
    //           type="text"
    //           name="floating_last_name"
    //           id="floating_last_name"
    //           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           for="floating_last_name"
    //           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Aadhar No.
    //         </label>
    //       </div>

    //       <div class="grid md:grid-cols-2 md:gap-6">
    //         <div class="relative z-0 w-full mb-5 group">
    //           <input
    //             type="text"
    //             name="floating_company"
    //             id="floating_company"
    //             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //             placeholder=" "
    //             required
    //           />
    //           <label
    //             for="floating_company"
    //             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //           >
    //             District
    //           </label>
    //         </div>

    //         <div class="relative z-0 w-full mb-5 group">
    //           <input
    //             type="text"
    //             name="floating_company"
    //             id="floating_company"
    //             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //             placeholder=" "
    //             required
    //           />
    //           <label
    //             for="floating_company"
    //             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //           >
    //             Taluka
    //           </label>
    //         </div>

    //         <div class="relative z-0 w-full mb-5 group">
    //           <input
    //             type="text"
    //             name="floating_company"
    //             id="floating_company"
    //             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //             placeholder=" "
    //             required
    //           />
    //           <label
    //             for="floating_company"
    //             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //           >
    //             State
    //           </label>
    //         </div>

    //         <div class="relative z-0 w-full mb-5 group">
    //           <input
    //             type="text"
    //             name="floating_company"
    //             id="floating_company"
    //             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //             placeholder=" "
    //             required
    //           />
    //           <label
    //             for="floating_company"
    //             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //           >
    //             City
    //           </label>
    //         </div>

    //         <div class="relative z-0 w-full mb-5 group">
    //           <input
    //             type="text"
    //             name="floating_company"
    //             id="floating_company"
    //             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //             placeholder=" "
    //             required
    //           />
    //           <label
    //             for="floating_company"
    //             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //           >
    //             PinCode
    //           </label>
    //         </div>

    //         <div class="relative z-0 w-full mb-5 group">
    //           <input
    //             type="text"
    //             name="floating_first_name"
    //             id="floating_first_name"
    //             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //             placeholder=" "
    //             required
    //           />
    //           <label
    //             for="floating_first_name"
    //             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //           >
    //             Phone number (123-456-7890)
    //           </label>
    //         </div>
    //       </div>

    //       <div class="grid md:grid-cols-2 md:gap-6">
    //         <div class="relative z-0 w-full mb-5 group">
    //           <input
    //             type="text"
    //             name="floating_company"
    //             id="floating_company"
    //             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //             placeholder=" "
    //             required
    //           />
    //           <label
    //             for="floating_company"
    //             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //           >
    //             Municipal Corporation
    //           </label>
    //         </div>

    //         <div class="relative z-0 w-full mb-5 group">
    //           <input
    //             type="text"
    //             name="floating_company"
    //             id="floating_company"
    //             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //             placeholder=" "
    //             required
    //           />
    //           <label
    //             for="floating_company"
    //             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //           >
    //             Constituency
    //           </label>
    //         </div>
    //       </div>

    //       <button
    //         type="submit"
    //         class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-blue-800"
    //       >
    //         Submit
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <div>
    <div className="flex flex-row justify-between">
      <h1>Add Voter Details</h1>
      <button type="button" onClick={onClose}>
        x
      </button>
    </div>

    <div className="mt-6">
      <form className="max-w-md" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">
            Upload Photo
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="user_avatar"
            type="file"
            onChange={handleFileChange}
          />
        </div>

        {/* Other input fields */}
        <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleInputChange} />
        <InputField label="Email address" name="email" type="email" value={formData.email} onChange={handleInputChange} />
        <InputField label="Full Address" name="address" value={formData.fullAddress} onChange={handleInputChange} />
        <InputField label="Voter ID No" name="voterIdNo" value={formData.voterIdNo} onChange={handleInputChange} />
        <InputField label="Aadhar No." name="aadharNo" value={formData.aadharNo} onChange={handleInputChange} />

        {/* Dropdown fields */}

        <div class="grid md:grid-cols-2 md:gap-6">
          <DropdownField label="District" name="district" options={districts} value={formData.district} onChange={handleInputChange} />
          <DropdownField label="Taluka" name="taluka" options={talukas} value={formData.taluka} onChange={handleInputChange} />
          <DropdownField label="State" name="state" options={states} value={formData.state} onChange={handleInputChange} />
          <DropdownField label="City" name="city" options={cities} value={formData.city} onChange={handleInputChange} />
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <InputField label="PinCode" name="pincode" value={formData.pinCode} onChange={handleInputChange} />
          <InputField label="Phone number" name="mobileNo" value={formData.phoneNumber} onChange={handleInputChange} />
        </div>


        <div class="grid md:grid-cols-2 md:gap-6">
          <DropdownField label="Municipal Corporation" name="municipalCorporation" options={municipalCorporations} value={formData.municipalCorporation} onChange={handleInputChange} />
          <DropdownField label="Constituency" name="constituency" options={constituencies} value={formData.constituency} onChange={handleInputChange} />
      </div>
        <button
          type="submit"
          className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  );
}



const InputField = ({ label, name, type = "text", value, onChange }) => (
  <div className="relative z-0 w-full mb-5 group">
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor={name}
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);

const DropdownField = ({ label, name, options, value, onChange }) => (
  <div className="relative z-0 w-full mb-5 group">
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      required
    >
      <option value="" disabled>Select {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    <label
      htmlFor={name}
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);


export default Addvoterdetails;
