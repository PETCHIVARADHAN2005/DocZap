import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorAppointments = () => {
  const {dToken, getAppointments, appointments,completeAppointment,cancelAppointment} = useContext(DoctorContext)
  const{slotDateFormat,currency,calculateAge} =useContext(AppContext)
  useEffect(()=>{
    if(dToken)
      getAppointments()
  },[dToken])
  return (
    <div className='w-full max-w-6xl m-5'>
        <p className='mb-3 text-lg font-medium'>All Appointments</p>
        <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
          <div className='max-sm:hidden grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
            <p>#</p>
            <p>Patients</p>
            <p>Payment</p>
            <p>Age</p>
            <p>Date & Time</p>
            <p>Fees</p>
            <p>Actions</p>
          </div>
          {appointments.map((item,index)=>(
            <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50' key={index}>
              <p className='max-sm:hidden'>{index+1}</p>
              <div className='flex items-center gap-2'>
                <img className='w-8 rounded-full' src={item.userData.image} alt=""/>
                <p className='text-gray-800 font-medium'>{item.userData.name}</p>
                </div>
                <div>
                  <p className='text-xs inline border border-primary px-2 rounded-full'>
                    {item.payment ? 'Online':'Cash'}
                  </p>
                  </div>
                  <p className='max_sm:hidden'>{calculateAge(item.userData.dob)}</p>
                  <p>{slotDateFormat(item.slotDate)},{item.slotTime}</p>
                  <p>{currency}{item.amount}</p>
                  {
                    item.cancelled ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                    :item.isCompleted ? <p className='text-green-500 text-xs font-medium'>Completed</p>
                      :
                  <div className='flex'>
                    <img onClick={()=>cancelAppointment(item._id)} src={assets.cancel_icon} alt="" />
                    <img onClick={()=>completeAppointment(item._id)} src={assets.tick_icon} alt=""/>
                    </div>
                  }
            </div>
          ))}
        </div>
      </div>
  
  )
}

export default DoctorAppointments