import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/submit'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#B08079] p-4">
      <div className="bg-[#ecc9c9] p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-3 ">Registration Form</h2>
        <p className='mb-6'>Fill out the form carefully for registration</p>
        <hr className='bg-[#f0efef] mb-6' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Student Name</label>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="First Name"
                {...register('firstName', { required: true })}
                className={`w-full p-2 border rounded hover:border-[#B08079] ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <input
                type="text"
                placeholder="Middle Name"
                {...register('middleName')}
                className="w-full p-2 border border-gray-300 rounded hover:border-[#B08079]"
              />
              <input
                type="text"
                placeholder="Last Name"
                {...register('lastName', { required: true })}
                className={`w-full p-2 border rounded hover:border-[#B08079] ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.firstName && <p className="text-red-500 text-sm">First name is required</p>}
            {errors.lastName && <p className="text-red-500 text-sm">Last name is required</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Birth Date</label>
            <div className="flex space-x-2">
              <select
                {...register('birthMonth', { required: true })}
                className={`w-full p-2 border rounded hover:border-[#B08079] ${
                  errors.birthMonth ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                {...register('birthDay', { required: true })}
                className={`w-full p-2 border rounded hover:border-[#B08079] ${
                  errors.birthDay ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                {...register('birthYear', { required: true })}
                className={`w-full p-2 border rounded hover:border-[#B08079] ${
                  errors.birthYear ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Year</option>
                {Array.from({ length: 100 }, (_, i) => 2023 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            {(errors.birthMonth || errors.birthDay || errors.birthYear) && (
              <p className="text-red-500 text-sm">Birth date is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              placeholder="Street Address"
              {...register('streetAddress', { required: true })}
              className={`w-full p-2 border rounded mb-2 hover:border-[#B08079] ${
                errors.streetAddress ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.streetAddress && <p className="text-red-500 text-sm">Street address is required</p>}
            <input
              type="text"
              placeholder="Street Address Line 2"
              {...register('streetAddressLine2')}
              className="w-full p-2 border border-gray-300 rounded mb-2 hover:border-[#B08079]"
            />
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="City"
                {...register('city', { required: true })}
                className={`w-full p-2 border rounded hover:border-[#B08079] ${
                  errors.city ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <input
                type="text"
                placeholder="State / Province"
                {...register('state', { required: true })}
                className={`w-full p-2 border rounded hover:border-[#B08079] ${
                  errors.state ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            <input
              type="text"
              placeholder="Postal / Zip Code"
              {...register('postalCode', { required: true })}
              className={`w-full p-2 border rounded hover:border-[#B08079] ${
                errors.postalCode ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.city && <p className="text-red-500 text-sm">City is required</p>}
            {errors.state && <p className="text-red-500 text-sm">State/Province is required</p>}
            {errors.postalCode && <p className="text-red-500 text-sm">Postal/Zip Code is required</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Student E-mail</label>
            <input
              type="email"
              placeholder="ex: myname@example.com"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className={`w-full p-2 border rounded hover:border-[#B08079] ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm">Valid email is required</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input
              type="text"
              placeholder="(000) 000-0000"
              {...register('mobileNumber', { required: true })}
              className={`w-full p-2 border rounded hover:border-[#B08079] ${
                errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.mobileNumber && <p className="text-red-500 text-sm">Mobile number is required</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              placeholder="(000) 000-0000"
              {...register('phoneNumber')}
              className="w-full p-2 border border-gray-300 rounded mb-2 hover:border-[#B08079]"
            />
            <label className="block text-gray-700">Work Number</label>
            <input
              type="text"
              placeholder="(000) 000-0000"
              {...register('workNumber')}
              className="w-full p-2 border border-gray-300 rounded mb-2 hover:border-[#B08079]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Company</label>
            <input
              type="text"
              {...register('company')}
              className="w-full p-2 border border-gray-300 rounded hover:border-[#B08079]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Courses</label>
            <select
              {...register('course', { required: true })}
              className={`w-full p-2 border rounded hover:border-[#B08079] ${
                errors.course ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Please Select</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
            </select>
            {errors.course && <p className="text-red-500 text-sm">Course selection is required</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Additional Comments</label>
            <textarea
              {...register('comments')}
              className="w-full p-2 border border-gray-300 rounded hover:border-[#B08079]"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-[#B08079] text-white p-2 rounded hover:bg-white hover:text-[#B08079]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
