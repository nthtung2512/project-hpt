import React, { useState } from 'react'
import styles from "./doctor.module.css"
import { Button, Pagination } from '@mui/material'
import { SearchBar, NormalItem, AddForm, RemoveForm, NormalPage} from '../../components'
const Doctor = ({authentication}) => {
  const [models, setModels] = useState([
    {employeeCode: "E00000001", fullName: "Emp A", department: 1, gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"], degree: "Doctor of Osteopathic Medicine (D.O.) ", dateArchieved: "10/10/2013", job: "Cardiologists", startDate:"04/05/2021", inpatient: ["000000001", "000000002"], outpatient: ["000000002", "000000003"]},
    {employeeCode: "E00000002", fullName: "Emp A", department: 1, gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"], degree: "Doctor of Osteopathic Medicine (D.O.) ", dateArchieved: "10/10/2013", job: "Cardiologists", startDate:"04/05/2021", inpatient: ["000000001", "000000002"], outpatient: ["000000002", "000000003"]},
    {employeeCode: "E00000003", fullName: "Emp A", department: 1, gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"], degree: "Doctor of Osteopathic Medicine (D.O.) ", dateArchieved: "10/10/2013", job: "Cardiologists", startDate:"04/05/2021", inpatient: ["000000001", "000000002"], outpatient: ["000000002", "000000003"]},
    {employeeCode: "E00000004", fullName: "Emp A", department: 1, gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"], degree: "Doctor of Osteopathic Medicine (D.O.) ", dateArchieved: "10/10/2013", job: "Cardiologists", startDate:"04/05/2021", inpatient: ["000000001", "000000002"], outpatient: ["000000002", "000000003"]},
    {employeeCode: "E00000005", fullName: "Emp A", department: 1, gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"], degree: "Doctor of Osteopathic Medicine (D.O.) ", dateArchieved: "10/10/2013", job: "Cardiologists", startDate:"04/05/2021", inpatient: ["000000001", "000000002"], outpatient: ["000000002", "000000003"]},
    {employeeCode: "E00000006", fullName: "Emp A", department: 1, gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"], degree: "Doctor of Osteopathic Medicine (D.O.) ", dateArchieved: "10/10/2013", job: "Cardiologists", startDate:"04/05/2021", inpatient: ["000000001", "000000002"], outpatient: ["000000002", "000000003"]},
    {employeeCode: "E00000007", fullName: "Emp A", department: 1, gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"], degree: "Doctor of Osteopathic Medicine (D.O.) ", dateArchieved: "10/10/2013", job: "Cardiologists", startDate:"04/05/2021", inpatient: ["000000001", "000000002"], outpatient: ["000000002", "000000003"]},
    {employeeCode: "E00000008", fullName: "Emp A", department: 1, gender: "Male", birthDate: "1/1/1980", address: "20 Wall Street", phoneNumber: ["0123456789", "1234567890"], degree: "Doctor of Osteopathic Medicine (D.O.) ", dateArchieved: "10/10/2013", job: "Cardiologists", startDate:"04/05/2021", inpatient: ["000000001", "000000002"], outpatient: ["000000002", "000000003"]},
  ])

  const searchList=["Search by Doctor Code", "Search by Department Code", "Search by Doctor Name"]

  return (
    <NormalPage addTitle={"ADD DOCTOR"} models={models} setModels={setModels} role={"doctor"} searchList={searchList} authentication={authentication}/>
  )
}

export default Doctor