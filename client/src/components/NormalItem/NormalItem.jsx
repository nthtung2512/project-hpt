import React from 'react'
import styles from "./NormalItem.module.css"
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { AddForm } from '../';
const NormalItem = ({model, handleRemove, handleEdit, role, authentication}) => {
    console.log(authentication)
    const [displayItem, setDisplayItem] = useState(() => {
        if (role == "doctor" || role == "nurse") {
            return {
                employeeCode: role == "doctor" ? 'Doctor Code: ' : "Nurse Code: ",
                fullName: 'Full Name: ',
                department: 'Department: ',
                gender: 'Gender: ',
                birthDate: 'Birth Date: ',
                address: 'Address: ',
                phoneNumber: 'Phone Number: ',
                degree: 'Degree: ',
                dateArchieved: 'Date Archived: ',
                job: "Job: ",
                startDate: 'Start Date: ',
                inpatient: "Inpatient in-charge: ",
                outpatient: role == "doctor" ? "Outpatient in-charge: " : ""
            };
        } else if (role == "department") {
            return {
                departmentCode: 'Department Code: ',
                departmentName: 'Department Name: ',
                deanCode: 'Dean Code: ',
                allDoctorCode: 'All Doctor Code: ',
                allNurseCode: 'All Nurse Code: '
            };
        } else if (role == "patient") {
            return {
                patientCode: 'Patient Code: ',
                fullName: 'Full Name: ',
                gender: 'Gender: ',
                birthDate: 'Birth Date: ',
                address: 'Address: ',
                phoneNumber: 'Phone Number: ',
            };
        } else if (role == "medication") {
            return {
                medicationCode: "Medication Code: ",
                medicationName: 'Medication Name: ',
                soldPrice: 'Sold Price: $',
                expiredDate: 'Expired Date: ',
                effects: 'Effect: ',
            }
        } else if (role == "provider") {
            return {
                providerCode: 'Provider Code: ',
                providerName: 'Provider Name: ',
                phoneNumber: 'Phone Number: ',
                address: 'Address: ',
            }
        } else if (role == "import") {
            return {
                medicationCode: "Medication Code: ", 
                providerCode: "Provider Code: ", 
                quantity: "Quantity: ", 
                price: "Price: $", 
                importedDate: "Imported Date: "
            }
        }
        else {
            return null
        }
    });

    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)
    const [patientModel, setPatientModel] = useState(null)
    const [title, setTitle] = useState("")
    const [patientType, setPatientType] = useState("")
    
    const formatArrayValue = (value) => {
        return Array.isArray(value) ? value.join(', ') : value;
    };

    const handleDetail = () => {
        navigate(`/patient/patientDetail/${model.patientCode}`);
    }

    const handleAddImport = () => {
        navigate(`/medProvider/addImport/${model.providerCode}`);
    }

    const handleTreat = () => {
        setTitle("PATIENT EXAMINATION")
        setPatientModel({
            patientCode: model.patientCode, 
            fullName: model.fullName,
            gender: model.gender,
            birthDate: model.birthDate,
            examDatetime: "09:20:00 09/12/2023",
            nextDatetime: "None",
            diagnosis: "Small wrist injury",
            medications: [],
        })
        setOpenModal((prev) => !prev)
        
    }

    const handleExamine = () => {
        setTitle("PATIENT TREATMENT")
        setPatientModel({
            patientCode: model.patientCode, 
            fullName: model.fullName,
            gender: model.gender,
            birthDate: model.birthDate,
            startDatetime: "09:20:00 09/12/2023",
            endDatetime: "12:00:00 10/01/2024",
            result: "",
            medications: [],
        })
        setOpenModal(true)
        
    }

    const handleClose = () => {
        setOpenModal(false)
        setPatientModel(null)
    }
    
    return (
        <div className={styles.normalItem}>
            <div className={styles.content}>
                {Object.keys(displayItem).map((key) => (
                    <p className={styles.element} key={key}>
                        {displayItem[key]}{formatArrayValue(model[key])}
                    </p>
                ))}
                
            </div>
            {openModal && <AddForm models={patientModel} setModels={setPatientModel} role={role} title={title} handleClose={handleClose}/>}
            <div className={styles.btnPart}>
                <Button onClick={handleEdit} color='primary' variant="contained" sx={{width: "90px", height: "30px", display: (role == "department" && authentication == "ADMINISTRATOR") ? "flex" : "none"}}>
                    EDIT
                </Button>
                <Button onClick={handleDetail} color='primary' variant="contained" sx={{width: "90px", height: "30px", display: (role == "patient" && (authentication == "ADMINISTRATOR" || authentication == "NURSE")) ? "flex" : "none"}}>
                    DETAIL
                </Button>
                <Button onClick={handleAddImport} color='primary' variant="contained" sx={{width: "90px", height: "30px", display: (role == "provider") ? "flex" : "none"}}>
                    IMPORT
                </Button>
                <Button onClick={handleTreat} color='primary' variant="contained" sx={{width: "90px", height: "30px", display: (authentication == "DOCTOR" && role == "patient") ? "flex" : "none"}}>
                    TREAT
                </Button>
                <Button onClick={handleExamine} color='primary' variant="contained" sx={{width: "90px", height: "30px", display: (authentication == "DOCTOR" && role == "patient") ? "flex" : "none"}}>
                    EXAMINE
                </Button>
                <Button onClick={handleRemove} color='error' variant="contained" sx={{width: "90px", height: "30px", display : (authentication == "ADMINISTRATOR") ? "flex" : "none"}}>
                    REMOVE
                </Button>
            </div>
            
        </div>
        

    )
}

export default NormalItem