import React from 'react'
import styles from "./patientDetail.module.css"
import { Link, useParams } from 'react-router-dom';
import { NormalItem } from '../../../components'
import { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
const DropdownInpatient = ({title, model}) => {
  const [isVisitOpen, setIsVisitOpen] = useState(false)
  const [rotateArrow, setRotateArrow] = useState(false)
  const toggleVisitDropdown = () => {
    setRotateArrow((prev) => !prev)
    setIsVisitOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownBtn} onClick={toggleVisitDropdown}>
        <h2 className={styles.dropdownTitle}>{title}</h2>
        <KeyboardArrowRightIcon color='disabled' sx={{
          transform: rotateArrow ? 'rotate(90deg)' : '',
          transition: 'transform 0.3s ease-in-out'
        }} />
      </div>

      <div className={`${styles.dropdownContent} ${isVisitOpen ? styles.open : styles.closed}`}>
        <div className={styles.dropdownItem}>
          <p>Discharge Date: {model.dischargeDate}</p>
          <p>Diagnosis: {model.diagnosis}</p>
          <p>Sickroom: {model.sickroom}</p>
          <p>Nurse: {model.nurse}</p>
          <p>Nurse Fee: ${model.nurseFee}</p>
          <p>Total Fee: ${model.totalFee}</p>
        </div>
        <div className={styles.dropdownTreatments}>
          {model.treatments.map((treatment, index) => {
            const [isTreatmentOpen, setIsTreatmentOpen] = useState(false)
            const [innerRotateArrow, setInnerRotateArrow] = useState(false)
            const toggleTreatmentDropdown = () => {
              setInnerRotateArrow((prev) => !prev)
              setIsTreatmentOpen((prev) => !prev);
            };
            return (
              <div key={treatment.doctorCode}>
                <div className={styles.dropdownBtn} onClick={toggleTreatmentDropdown}>
                  <h2 className={styles.dropdownTitle}>Treatment {index + 1}</h2>
                  <KeyboardArrowRightIcon color='disabled' sx={{
                    transform: innerRotateArrow ? 'rotate(90deg)' : '',
                    transition: 'transform 0.3s ease-in-out'
                  }}/>
                </div>
                <div className={`${styles.dropdownContent} ${isTreatmentOpen ? styles.open : styles.closed}`}>
                  <div className={styles.dropdownItem}>
                    <p>Doctor: {treatment.doctorCode}</p>
                    <p>Start time: {treatment.startTime}</p>
                    <p>End time: {treatment.endTime}</p>
                    <p>Result: {treatment.result}</p>
                    <p>Doctor Fee: ${treatment.doctorFee}</p>
                  </div>
                  
                  <div className={styles.dropdownItem}>
                    {(treatment.med).map((medication, medIndex) => (
                      <p key={medIndex}>Medication {medIndex + 1}: {medication} pills</p>
                    ))}
                  </div>
                  <p className={styles.dropdownItem}>Medication Fee: ${treatment.medicationFee}</p>
                </div>
                
              </div>
            )
          })}
        </div>
      </div>
      
    </div>
  )
}

const DropdownOutpatient = ({title, model}) => {
  const [isVisitOpen, setIsVisitOpen] = useState(false)
  const [rotateArrow, setRotateArrow] = useState(false)
  const toggleVisitDropdown = () => {
    setRotateArrow((prev) => !prev)
    setIsVisitOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownBtn} onClick={toggleVisitDropdown}>
        <h2 className={styles.dropdownTitle}>{title}</h2>
        <KeyboardArrowRightIcon color='disabled' sx={{
          transform: rotateArrow ? 'rotate(90deg)' : '',
          transition: 'transform 0.3s ease-in-out'
        }} />
      </div>

      <div className={`${styles.dropdownContent} ${isVisitOpen ? styles.open : styles.closed}`}>
        <div className={styles.dropdownTreatments}>
          {model.examines.map((examine, index) => {
            const [isTreatmentOpen, setIsTreatmentOpen] = useState(false)
            const [innerRotateArrow, setInnerRotateArrow] = useState(false)
            const toggleTreatmentDropdown = () => {
              setInnerRotateArrow((prev) => !prev)
              setIsTreatmentOpen((prev) => !prev);
            };
            return (
              <div key={examine.doctorCode}>
                <div className={styles.dropdownBtn} onClick={toggleTreatmentDropdown}>
                  <h2 className={styles.dropdownTitle}>Examine {index + 1}</h2>
                  <KeyboardArrowRightIcon color='disabled' sx={{
                    transform: innerRotateArrow ? 'rotate(90deg)' : '',
                    transition: 'transform 0.3s ease-in-out'
                  }}/>
                </div>
                <div className={`${styles.dropdownContent} ${isTreatmentOpen ? styles.open : styles.closed}`}>
                  <div className={styles.dropdownItem}>
                    <p>Doctor: {examine.doctorCode}</p>
                    <p>Exam time: {examine.examTime}</p>
                    <p>Next time: {examine.nextTime}</p>
                    <p>Diagnosis: {examine.diagnosis}</p>
                    <p>Doctor Fee: ${examine.doctorFee}</p>
                  </div>
                  
                  <div className={styles.dropdownItem}>
                    {examine.med.map((item) => (
                      <div key={item}>
                        {Object.entries(item).map(([medication, pill]) => (
                          <p key={medication}>{medication}: {pill} pills</p>
                        ))}
                      </div>
                      
                    ))}
                  </div>
                  <p className={styles.dropdownItem}>Medication Fee: ${examine.medicationFee}</p>
                  <p className={styles.dropdownItem}>Total Fee: ${examine.totalFee}</p>
                </div>
                
              </div>
            )
          })}
        </div>
      </div>
      
    </div>
  )
}


const PatientDetail = () => {
  const { patientCode } = useParams();
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1); // Navigate back one step in the history stack
  };
  const treatments = [
    {doctorCode: "E00000001", startTime: "09:20:00 09/12/2020", endTime: "11:40:00 23/01/2021", result: "Recovered", doctorFee: 400, med: [80,60,30], medicationFee: 100},
    {doctorCode: "E00000002", startTime: "09:20:00 09/12/2020", endTime: "11:40:00 23/01/2021", result: "Recovered", doctorFee: 400, med: [80,60,30], medicationFee: 100}
  ]
  const inpatientModels = [
    {ipCode: "000000001", ipVisit: 1, dischargeDate: "16/09/2021", diagnosis: "Heart rate abnormal", sickroom: 1, nurse: "E00000002", nurseFee: 200, totalFee: 800, treatments: treatments},
    {ipCode: "000000001", ipVisit: 2, dischargeDate: "16/09/2021", diagnosis: "Heart rate abnormal", sickroom: 2, nurse: "E00000002", nurseFee: 200, totalFee: 800, treatments: treatments}
  ]

  const examines = [
    {doctorCode: "E00000003", examTime: "09:20:00 09/12/2020", nextTime: "None", diagnosis: "Small wrist injury", doctorFee: "100", med: [{"Med A": 80}, {"Med B": 60}, {"Med C": 30}], medicationFee: 100, totalFee: 300},
    {doctorCode: "E00000004", examTime: "09:20:00 09/12/2020", nextTime: "None", diagnosis: "Small wrist injury", doctorFee: "100", med: [{"Med 1": 80}, {"Med 2": 60}, {"Med 3": 30}], medicationFee: 100, totalFee: 300}
  ]

  const outpatientModels = [
    {opCode: "000000002", opVisit: 1, examines: examines}
  ]
  return (
    <div className={styles.patientDetail}>
      <div className={styles.header}>
      <img src="/assets/Images/previous.png" alt="" width={45} height={45} className={styles.back} onClick={goBack}/>
        
        <h1 style={{textAlign: "center"}}>PATIENT DETAIL</h1>
      </div>

      <div className={styles.patientInfo}>
        <p>Patient Code: {patientCode}</p>
        <p>Full name: Patient A</p>
        <p>Gender: Female</p>
        <p>Birthdate: 23/12/1990</p>
        <p>Phone number: 1023535115</p>
        <p>Address: 42 Seven Street</p>
      </div>
      <div className={styles.dropdownIO}>
        <div className={styles.dropdownContainer}>
          {inpatientModels.map((model) => {
            return (
              <DropdownInpatient key={`${model.ipCode}_${model.ipVisit}`}  title={`Inpatient Visit ${model.ipVisit}`} model={model}/>
            )
          })}
        </div>
        <div className={styles.dropdownContainer}>
        {outpatientModels.map((model) => {
          return (
            <DropdownOutpatient key={`${model.opCode}_${model.opVisit}`}  title={`Outpatient Visit ${model.opVisit}`} model={model}/>
          )
        })}
      </div>
      </div>
      
      

        
    </div>
  )
}

export default PatientDetail