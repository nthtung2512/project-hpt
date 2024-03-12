import React, { useState } from 'react'
import styles from "./addImport.module.css"
import { NormalPage } from '../../../components'
import { useNavigate } from 'react-router-dom'
const AddImport = () => {
  const [models, setModels] = useState([
    {medicationCode: "M00000001", providerCode: "P00000001", quantity: 2000, price: 1200, importedDate: "12/04/2023"},
    {medicationCode: "M00000001", providerCode: "P00000001", quantity: 2000, price: 1200, importedDate: "12/04/2023"},
    {medicationCode: "M00000001", providerCode: "P00000001", quantity: 2000, price: 1200, importedDate: "12/04/2023"},
    {medicationCode: "M00000001", providerCode: "P00000001", quantity: 2000, price: 1200, importedDate: "12/04/2023"},
    {medicationCode: "M00000001", providerCode: "P00000001", quantity: 2000, price: 1200, importedDate: "12/04/2023"},
    {medicationCode: "M00000001", providerCode: "P00000001", quantity: 2000, price: 1200, importedDate: "12/04/2023"},
    {medicationCode: "M00000001", providerCode: "P00000001", quantity: 2000, price: 1200, importedDate: "12/04/2023"},
  ])
  
  const searchList=["Search by Medication Code", "Search by Provider Code"]

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1); // Navigate back one step in the history stack
  };

  return (
    <div className={styles.import}>
      <div className={styles.header}>
        <img src="/assets/Images/previous.png" alt="" width={45} height={45} className={styles.back} onClick={goBack}/>
        <h1 style={{textAlign: "center"}}>MEDICATION'S IMPORT</h1>
      </div>
      <NormalPage addTitle={"ADD IMPORT"} models={models} setModels={setModels} role={"import"} searchList={searchList}/>
    </div>
    
  )
  
}

export default AddImport