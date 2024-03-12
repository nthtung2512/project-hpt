import React from 'react'
import styles from "./RemoveForm.module.css"
import { Button } from '@mui/material'
const RemoveForm = ({handleCloseRemove}) => {
    const handleConfirm = () => {
        handleCloseRemove()
    }
    return (
        <>
            <div className={styles.overlay}/>
            <div className={styles.removeForm}>
                <h1 className={styles.title}>CONFIRM</h1>
                <p style={{fontSize: "1.2em", fontWeight: "bold"}}>Are you sure to remove this item?</p>
                <div style={{display: "flex", gap: "20px"}}>
                    <Button onClick={handleConfirm} variant="contained" color="primary" sx={{width: "90px"}}>
                        CONFIRM
                    </Button>
                    <Button onClick={handleCloseRemove} variant="contained" color="error" sx={{width: "90px"}}>
                        CANCEL
                    </Button>
                </div>
            </div>
        </>
    )
}

export default RemoveForm