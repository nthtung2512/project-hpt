import React, { useState } from 'react'
import styles from "./medProvider.module.css"
import {NormalPage} from '../../components'
const MedProvider = ({authentication}) => {
  const [models, setModels] = useState([
    {providerCode: "P00000001", providerName: "Company A", address: "19 Welsey Street", phoneNumber: "0981234134"},
    {providerCode: "P00000002", providerName: "Company A", address: "19 Welsey Street", phoneNumber: "0981234134"},
    {providerCode: "P00000003", providerName: "Company A", address: "19 Welsey Street", phoneNumber: "0981234134"},
    {providerCode: "P00000004", providerName: "Company A", address: "19 Welsey Street", phoneNumber: "0981234134"},
    {providerCode: "P00000005", providerName: "Company A", address: "19 Welsey Street", phoneNumber: "0981234134"},
    {providerCode: "P00000006", providerName: "Company A", address: "19 Welsey Street", phoneNumber: "0981234134"},
    {providerCode: "P00000007", providerName: "Company A", address: "19 Welsey Street", phoneNumber: "0981234134"},
  ])
  
  const searchList=["Search by Provider Code", "Search by Provider Name"]

  return (
    <NormalPage addTitle={"ADD PROVIDER"} models={models} setModels={setModels} role={"provider"} searchList={searchList} authentication={authentication}/>
  )
}

export default MedProvider