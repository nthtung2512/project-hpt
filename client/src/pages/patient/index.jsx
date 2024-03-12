import React, { useState } from 'react'
import styles from "./patient.module.css"
import { NormalPage } from '../../components'

const Patient = ({authentication}) => {
  const [models, setModels] = useState([
    {patientCode: "000000001", fullName: "Patient A", gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"]},
    {patientCode: "000000002", fullName: "Patient A", gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"]},
    {patientCode: "000000003", fullName: "Patient A", gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"]},
    {patientCode: "000000004", fullName: "Patient A", gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"]},
    {patientCode: "000000005", fullName: "Patient A", gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"]},
    {patientCode: "000000006", fullName: "Patient A", gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"]},
    {patientCode: "000000007", fullName: "Patient A", gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"]},
    {patientCode: "000000008", fullName: "Patient A", gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"]},
  ])
  const searchList = ["Search by Patient Code", "Search by Department Code", "Search by Patient Name"]

  return (
      <NormalPage addTitle={"ADD PATIENT"} models={models} setModels={setModels} role="patient" searchList={searchList} authentication={authentication}/>
  )
}

export default Patient