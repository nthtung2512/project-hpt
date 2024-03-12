import React, { useState } from 'react'
import styles from "./NormalPage.module.css"
import { Button, Pagination } from '@mui/material'
import { SearchBar, NormalItem, AddForm, RemoveForm} from '../'
const NormalPage = ({addTitle, editTitle, models, setModels, role, searchList, authentication}) => {
  const modelsPerPage = 5; // Number of models to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * modelsPerPage;
  const endIndex = startIndex + modelsPerPage;
  const modelsOnPage = models.slice(startIndex, endIndex);
  const [openModal, setOpenModal] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false)
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  }

  const handleAdd = () => {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  const handleRemove = () => {
    setOpenRemoveModal(true)
  }

  const handleCloseRemove = () => {
    setOpenRemoveModal(false)
  }

  const handleCloseEdit = () => {
    setOpenEdit(false)
}

  return (
    <div className={styles.normalPage}>
      {(authentication == "ADMINISTRATOR" && role != "patient" || authentication == "RECEPTIONIST") && <Button variant='contained' color='primary' onClick={handleAdd} sx={{
        backgroundColor: "var(--btn)",
        mb: "25px",
        "&:hover": {
          backgroundColor: "var(--btn_soft)", 
          transition: "background-color 0.5s ease",
        },
        
      }}>
        {addTitle}
      </Button>}
      {openModal && <AddForm models={models} setModels={setModels} role={role} title={addTitle} handleClose={handleClose}/>}
      {role == 'department' && openEdit && <AddForm title={editTitle} handleClose={handleCloseEdit} role={role} />}
      {openRemoveModal && <RemoveForm handleCloseRemove={handleCloseRemove}/>}
      <div className={styles.searchBar}>
        {searchList.map((search) => (
            <SearchBar width={350} placeholder={search} key={search}/>
        ))}
      </div>
      <div className={styles.content}>
        {modelsOnPage.map((model, index) => 
          (<NormalItem model={model} key={index} handleRemove={handleRemove} role={role} handleEdit={() => setOpenEdit(true)} authentication={authentication}/>)
        )}
      </div>
      <Pagination
        count={Math.ceil(models.length / modelsPerPage)} // Total number of pages
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        sx={{ display: "flex", justifyContent: "center", mt: "25px" }}
      />
      
      
      
    </div>
  )
}

export default NormalPage