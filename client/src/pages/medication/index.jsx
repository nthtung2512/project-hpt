import React, { useState } from 'react'
import styles from "./medication.module.css"
import { NormalPage} from '../../components'
const Medication = ({authentication}) => {
  const [models, setModels] = useState([
    {medicationCode: "M00000001", medicationName: "Med A", soldPrice: 1, expiredDate: "20/12/2025", effects: "Heart relieved, Pain Reliever"},
    {medicationCode: "M00000002", medicationName: "Med A", soldPrice: 1, expiredDate: "20/12/2025", effects: "Heart relieved, Pain Reliever"},
    {medicationCode: "M00000003", medicationName: "Med A", soldPrice: 1, expiredDate: "20/12/2025", effects: "Heart relieved, Pain Reliever"},
    {medicationCode: "M00000004", medicationName: "Med A", soldPrice: 1, expiredDate: "20/12/2025", effects: "Heart relieved, Pain Reliever"},
    {medicationCode: "M00000005", medicationName: "Med A", soldPrice: 1, expiredDate: "20/12/2025", effects: "Heart relieved, Pain Reliever"},
    {medicationCode: "M00000006", medicationName: "Med A", soldPrice: 1, expiredDate: "20/12/2025", effects: "Heart relieved, Pain Reliever"},
    {medicationCode: "M00000007", medicationName: "Med A", soldPrice: 1, expiredDate: "20/12/2025", effects: "Heart relieved, Pain Reliever"},
    {medicationCode: "M00000008", medicationName: "Med A", soldPrice: 1, expiredDate: "20/12/2025", effects: "Heart relieved, Pain Reliever"},
    {medicationCode: "M00000009", medicationName: "Med A", soldPrice: 1, expiredDate: "20/12/2025", effects: "Heart relieved, Pain Reliever"},

  ])

  const searchList=["Search by Medication Code", "Search by Medication Name"]

  return (
    <NormalPage addTitle={"ADD MEDICATION"} models={models} setModels={setModels} role={"medication"} searchList={searchList} authentication={authentication}/>
  )
  
}

export default Medication