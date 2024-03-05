import React from 'react'
import styles from "./department.module.css"
import { Button } from '@mui/material'
import { SearchBar, NormalItem, AddForm, RemoveForm, NormalPage} from '../../components'
import { useState, useEffect } from 'react'
const Department = ({authentication}) => {
    const [models, setModels] = useState([
        {departmentCode: 1, departmentName: 'Dept A', deanCode: "E00000001", allDoctorCode: ["E00000001", "E00000003", "E00000004"], allNurseCode: ["E00000002", "E00000004", "E00000005"]},
        {departmentCode: 2, departmentName: 'Dept A', deanCode: "E00000004", allDoctorCode: ["E00000001", "E00000003", "E00000004"], allNurseCode: ["E00000002", "E00000004", "E00000005"]},
        {departmentCode: 3, departmentName: 'Dept A', deanCode: "E00000005", allDoctorCode: ["E00000001", "E00000003", "E00000004"], allNurseCode: ["E00000002", "E00000004", "E00000005"]},
        {departmentCode: 4, departmentName: 'Dept A', deanCode: "E00000006", allDoctorCode: ["E00000001", "E00000003", "E00000004"], allNurseCode: ["E00000002", "E00000004", "E00000005"]}
    ])

    const [searchList, setSearchList] = useState([])

    const makeSearchList = () => {
        if (authentication == "ADMINISTRATOR")
            setSearchList(["Search by Department Code", "Search by Department Name"])       
    }

    useEffect(() => {
        makeSearchList()
    }, [])


    return (
        <div className={styles.department}>
            {authentication == "DOCTOR" && <h1>YOUR DEPARTMENT</h1>}
            <NormalPage addTitle={"ADD DEPARTMENT"} editTile={"EDIT DEPARTMENT"} models={models} setModels={setModels} role={"department"} searchList={searchList} authentication={authentication}/>
        </div>
        
    )
}

export default Department