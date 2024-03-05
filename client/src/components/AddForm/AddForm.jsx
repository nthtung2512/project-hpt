
import styles from "./AddForm.module.css"
import { TextField, Button } from '@mui/material'
import React, { useState, forwardRef, useEffect } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
const EmployeeContent = ({role, setModels, handleClose}) => {
    const [employeeModel, setEmployeeModel] = useState({
        employeeCode: "",
        fullName: "",
        firstName: "",
        lastName: "",
        department: "",
        gender: "",
        birthDate: "",
        address: "",
        phoneNumber: [],
        degree: "",
        dateArchieved: "",
        job: "",
        startDate: "",
        inpatient: [],
        outpatient: role == "doctor" ? [] : null,
    });

    const [isValid, setIsValid] = useState(true)

    const [phoneNumbers, setPhoneNumbers] = useState(['']); // Initial state with one empty phone number field

    const handleArrayChange = (e, index) => {
        const value = e.target.value;
        const isValidPhoneNumber = /^\d{9,10}$/.test(value);
        if (isValidPhoneNumber) {
            setIsValid(true);
            const newPhoneNumbers = [...phoneNumbers];
            newPhoneNumbers[index] = value;
            setPhoneNumbers(newPhoneNumbers);
        }  
        else {
            setIsValid(false);
        }
    };

    const addPhoneNumberField = () => {
        setPhoneNumbers(prevPhoneNumbers => [...prevPhoneNumbers, '']);
    };

    const removePhoneNumberField = (index) => {
        setPhoneNumbers(prevPhoneNumbers => {
            const newPhoneNumbers = [...prevPhoneNumbers];
            newPhoneNumbers.splice(index, 1);
            return newPhoneNumbers;
        });
    };

    const handleInputChange = (e, fieldName) => {
        const { value } = e.target;
        setEmployeeModel(prevState => ({
          ...prevState,
          [fieldName]: value
        }));
      };

      const handleDateChange = (newValue, fieldName) => {
        // Extracting the date and formatting it
        
        const formattedDate = newValue ? newValue.format("DD/MM/YYYY") : '';
        // Updating the specified field in employeeModel
        setEmployeeModel(prevState => ({
            ...prevState,
            [fieldName]: formattedDate
        }));
    };

    
    const handleAddModel = (fullModel) => {
        setModels(prevModels => [...prevModels, fullModel]);
        setEmployeeModel({
          employeeCode: "",
          fullName: "",
          firstName: "",
          lastName: "",
          department: "",
          gender: "",
          birthDate: "",
          address: "",
          phoneNumber: [],
          degree: "",
          dateArchieved: "",
          job: "",
          startDate: "",
          inpatient: [],
          outpatient: role == "doctor" ? [] : null,
        });
    };

    const handleSave = (event) => {
        event.preventDefault();
        const fullName = `${employeeModel.firstName} ${employeeModel.lastName}`;
        const employeeCode = 'E00000009'; 
        const fullModel = {
            ...employeeModel,
            employeeCode,
            fullName,
            phoneNumber: phoneNumbers
        };
    
        handleAddModel(fullModel);
        handleClose()
    }

    return (
        <form onSubmit={handleSave} className={styles.content}>
            <div className={styles.item}>
                    <p>First Name <span style={{color: "red"}}>(*)</span></p>
                    <TextField
                        required
                        id="employee-firstName"
                        size="small"
                        sx={{ '& .MuiInputBase-input': { width: "200px" } }}
                        value={employeeModel.firstName}
                        onChange={(e) => handleInputChange(e, "firstName")}
                    />
                </div>
                <div className={styles.item}>
                    <p>Last Name <span style={{color: "red"}}>(*)</span></p>
                    <TextField
                        required
                        id="employee-lastName"
                        size="small"
                        sx={{ '& .MuiInputBase-input': { width: "200px" } }}
                        value={employeeModel.lastName}
                        onChange={(e) => handleInputChange(e, "lastName")}
                    />
                </div>
                <div className={styles.item}>
                    <p>Department Code <span style={{color: "red"}}>(*)</span></p>
                    <TextField
                        required
                        type="number"
                        id="employee-departmentCode"
                        size="small"
                        sx={{ '& .MuiInputBase-input': { width: "200px" } }}
                        value={employeeModel.department}
                        onChange={(e) => handleInputChange(e, "department")}
                    />
                </div>
                <div className={styles.item}>
                    <p>Degree <span style={{color: "red"}}>(*)</span></p>
                    <TextField
                        required
                        id="employee-degree"
                        size="small"
                        sx={{ '& .MuiInputBase-input': { width: "200px" } }}
                        value={employeeModel.degree}
                        onChange={(e) => handleInputChange(e, "degree")}
                    />
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className={styles.item}>
                        <p>Date Archieved <span style={{ color: "red" }}>(*)</span></p>
                        <DatePicker
                            format="DD/MM/YYYY"
                            onChange={(newValue) => handleDateChange(newValue, "dateArchieved")}
                            sx={{ '& .MuiInputBase-input': { fontSize: '1em', width: "164px" } }}
                            slotProps={{ textField: { size: 'small' }}}
                            disableFuture 
                        />
                    </div>
                </LocalizationProvider>
                <div className={styles.item}>
                    <p>Job <span style={{color: "red"}}>(*)</span></p>
                    <TextField
                        required
                        select
                        id="employee-job"
                        size="small"
                        SelectProps={{
                            native: true,
                        }}
                        value={employeeModel.job}
                        onChange={(e) => handleInputChange(e, "job")}
                        sx={{ '& .MuiInputBase-input': { width: "182px" } }}
                    >
                        <option value="">Select</option>
                        <option value="Nephrologist">Nephrologist</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Dentist">Dentist</option>
                        <option value="ENT">ENT</option>
                        <option value="Gynecologists">Gynecologists</option>
                        <option value="Pediatrician">Pediatrician</option>
                        <option value="Surgeon">Surgeon</option>
                        <option value="Dermatologists">Dermatologists</option>
                        <option value="Orthopedist">Orthopedist</option>
                        <option value="Cardiologists">Cardiologists</option>
                        <option value="Urologists">Urologists</option>
                    </TextField>
                </div>
                <div className={styles.item}>
                    <p>Gender <span style={{color: "red"}}>(*)</span></p>
                    <TextField
                        required
                        select
                        id="employee-gender"
                        size="small"
                        SelectProps={{
                            native: true,
                        }}
                        value={employeeModel.gender}
                        onChange={(e) => handleInputChange(e, "gender")}
                        sx={{ '& .MuiInputBase-input': { width: "182px" } }}
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Not Tell">Not Tell</option>
                    </TextField>
                </div>
                <div className={styles.item}>
                    <p>Birth Date <span style={{color: "red"}}>(*)</span></p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            onChange={(newValue) => handleDateChange(newValue, "birthDate")}
                            format="DD/MM/YYYY"
                            sx={{ '& .MuiInputBase-input': { fontSize: '1em', width: "164px" } }}
                            slotProps={{ textField: { size: 'small' }}}
                            disableFuture
                        />
                    </LocalizationProvider>
                </div>
                <div className={styles.item}>
                    <p>Address <span style={{color: "red"}}>(*)</span></p>
                    <TextField
                        required
                        id="employee-address"
                        size="small"
                        sx={{'& .MuiInputBase-input': { width: "200px"}}}
                        value={employeeModel.address}
                        onChange={(e) => handleInputChange(e, "address")}
                    />
                </div>
                <div className={styles.multiple}>
                    {phoneNumbers.map((phoneNumber, index) => (
                        <div className={styles.multipleItem}>
                            <div key={index} className={styles.multipleItem}>
                                <p style={{marginRight: "20px"}}>Phone Number <span style={{color: "red"}}>(*)</span></p>
                                <TextField
                                    required
                                    id={`employee-phone${index}`}
                                    size="small"
                                    sx={{
                                        '& .MuiInputBase-input': { width: "200px"},
                                        '& .MuiFormHelperText-root': {width: "200px", fontSize:"0.75em"}
                                    }}
                                    onChange={(e) => handleArrayChange(e, index)}
                                    error={!isValid}
                                    helperText={!isValid && "Phone number has 9 or 10 digits."}
                                />
                                
                            </div>
                            {index === phoneNumbers.length - 1 && phoneNumbers[index] != '' && isValid && (
                                <IconButton onClick={addPhoneNumberField}>
                                    <AddCircleIcon />
                                </IconButton>
                            )}
                            {index !== 0 && isValid && (
                                <IconButton onClick={() => removePhoneNumberField(index)}>
                                    <RemoveCircleIcon />
                                </IconButton>
                            )}
                        </div>
                        
                    ))}
                </div>

                <div className={styles.item}>
                    <p>Start Date <span style={{color: "red"}}>(*)</span></p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            format="DD/MM/YYYY"
                            onChange={(newValue) => handleDateChange(newValue, "startDate")}
                            sx={{ '& .MuiInputBase-input': { fontSize: '1em', width: "164px" } }}
                            slotProps={{ textField: { size: 'small' }}}
                            disableFuture
                        />
                    </LocalizationProvider>
                </div>
                <div style={{display: "flex", gap: "20px", marginTop: "20px", justifyContent: "center"}}>
                    <Button type="submit" variant="contained" color="primary" sx={{width: "90px"}} disabled={!isValid}>
                        SAVE
                    </Button>
                    <Button onClick={handleClose} variant="contained" color="error" sx={{width: "90px"}}>
                        CANCEL
                    </Button>
                </div>
        </form>
    )
}

const DepartmentContent = ({setModels, handleClose}) => {
    const [employeeModel, setNewModel] = useState({
        departmentCode: "",
        departmentName: "",
        deanCode: "",
        allDoctorCode: [],
        allNurseCode: [],
    })

    const availableDeanCodes = [
        {code: "E00000003", desc: "E00000003"}, 
        {code: "E00000004", desc: "E00000004"}, 
        {code: "E00000005", desc: "E00000005"}, 
        {code: "E00000006", desc: "E00000006"}
    ]

    const handleInputChange = (e, fieldName) => {
        const { value } = e.target;
        setNewModel(prevState => ({
          ...prevState,
          [fieldName]: value
        }));
    };

    const handleAddModel = (fullModel) => {
        setModels(prevModels => [...prevModels, fullModel]);
        setNewModel({
            departmentCode: "",
            departmentName: "",
        });
    };

    const handleSave = (event) => {
        event.preventDefault();
        const departmentCode = 'D00000003';
        const fullModel = {
            ...employeeModel,
            departmentCode,
        };
    
        handleAddModel(fullModel);
        handleClose()
    }

    return (
        <form onSubmit={handleSave} className={styles.content}>
            <div className={styles.item}>
                <p>Department Name <span style={{color: "red"}}>(*)</span></p>
                <TextField
                    required
                    id="department-departmentName"
                    size="small"
                    sx={{ '&.MuiInputBase-input': { width: "200px" } }}
                    onChange={(event) => handleInputChange(event, "departmentName")}
                />
            </div>
            <div className={styles.item}>
                <p>Dean Code <span style={{color: "red"}}>(*)</span></p>
                <TextField
                    required
                    select
                    id="department-deanCode"
                    size="small"
                    SelectProps={{
                        native: true,
                    }}
                    value={employeeModel.job}
                    onChange={(e) => handleInputChange(e, "deanCode")}
                    sx={{ '& .MuiInputBase-input': { width: "182px" } }}
                >
                    <option value="">Select</option>
                    {availableDeanCodes.map((option) => (
                        <option key={option.code} value={option.code}>
                            {option.desc}
                        </option>
                    ))}
                </TextField>
            </div>
            
            <div style={{display: "flex", gap: "20px", marginTop: "20px", justifyContent: "center"}}>
                <Button type="submit" variant="contained" color="primary" sx={{width: "90px"}}>
                    SAVE
                </Button>
                <Button onClick={handleClose} variant="contained" color="error" sx={{width: "90px"}}>
                    CANCEL
                </Button>
            </div>
        </form>
    )
}

const MedicationContent = ({setModels, handleClose}) => {
    const [medicationModel, setNewModel] = useState({
        medicationCode: "",
        medicationName: "",
        soldPrice: "",
        expiredDate: "",
        effects: [],
    })

    const [isFloat, setIsFloat] = useState(true)

    const handleInputChange = (e, fieldName) => {
        const { value } = e.target;
        setNewModel(prevState => ({
          ...prevState,
          [fieldName]: value
        }));
    };

    const handleFloatChange = (e, fieldName) => {
        const inputValue = e.target.value;
    
        const isValidFloat = /^-?\d*(\.\d*)?$/.test(inputValue);
        const isGreaterThanZero = parseFloat(inputValue) > 0;

        if (isValidFloat && isGreaterThanZero) {
            setIsFloat(true)
            setNewModel(prevState => ({
                ...prevState,
                [fieldName]: inputValue
            }));
        } 
        else {
            setIsFloat(false);
          }
      };

    const handleDateChange = (newValue, fieldName) => {
        // Extracting the date and formatting it
        
        const formattedDate = newValue ? newValue.format("DD/MM/YYYY") : '';
        // Updating the specified field in employeeModel
        setNewModel(prevState => ({
            ...prevState,
            [fieldName]: formattedDate
        }));
    };

    const [effects, setEffects] = useState(['']); // Initial state with one empty phone number field

    const handleArrayChange = (e, index) => {
        const { value } = e.target;
        const newEffects = [...effects];
        newEffects[index] = value;
        setEffects(newEffects);
    };

    const addEffectField = () => {
        setEffects(prevEffects => [...prevEffects, '']);
    };

    const removeEffectField = (index) => {
        setEffects(prevEffects => {
            const newEffects = [...prevEffects];
            newEffects.splice(index, 1);
            return newEffects;
        });
    };

    const handleAddModel = (fullModel) => {
        setModels(prevModels => [...prevModels, fullModel]);
        setNewModel({
            medicationCode: "",
            medicationName: "",
            soldPrice: "",
            expiredDate: "",
            effects: [],
        });
    };

    const handleSave = (event) => {
        event.preventDefault();
        const medicationCode = 'M00000003';
        // Create fullModel by spreading employeeModel and adding employeeCode and fullName
        const fullModel = {
            ...medicationModel,
            medicationCode,
            effects: effects,
        };
    
        handleAddModel(fullModel);
        handleClose()
    }

    return (
        <form onSubmit={handleSave} className={styles.content}>
            <div className={styles.item}>
                <p>Medication Name <span style={{color: "red"}}>(*)</span></p>
                <TextField
                    required
                    id="medication-medicationName"
                    size="small"
                    sx={{ '&.MuiInputBase-input': { width: "200px" } }}
                    onChange={(event) => handleInputChange(event, "medicationName")}
                />
            </div>
            <div className={styles.item}>
                <p>Sold Price <span style={{color: "red"}}>(*)</span></p>
                <TextField
                    required
                    error={!isFloat}
                    type="text"
                    helperText={!isFloat && "Only positive float"}
                    id="medication-soldPrice"
                    size="small"
                    sx={{ '& .MuiInputBase-input': { width: "200px" } }}
                    onChange={(e) => handleFloatChange(e, "soldPrice")}
                />

            </div>
            <div className={styles.item}>
                <p>Expired Date <span style={{color: "red"}}>(*)</span></p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        format="DD/MM/YYYY"
                        onChange={(newValue) => handleDateChange(newValue, "expiredDate")}
                        sx={{ '& .MuiInputBase-input': { fontSize: '1em', width: "164px" } }}
                        slotProps={{ textField: { size: 'small' }}}
                        disableFuture
                    />
                </LocalizationProvider>
            </div>
            <div className={styles.multiple}>
                {effects.map((effect, index) => (
                    <div className={styles.multipleItem}>
                        <div key={index} className={styles.multipleItem}>
                            <p style={{marginRight: "20px"}}>Effect <span style={{color: "red"}}>(*)</span></p>
                            <TextField
                                required
                                id={`medication-effect-${index}`}
                                size="small"
                                sx={{'& .MuiInputBase-input': { width: "200px"}}}
                                value={effect}
                                onChange={(e) => handleArrayChange(e, index)}
                            />
                            
                        </div>
                        {index === effects.length - 1 && (
                            <IconButton onClick={addEffectField}>
                                <AddCircleIcon />
                            </IconButton>
                        )}
                        {index !== 0 && (
                            <IconButton onClick={() => removeEffectField(index)}>
                                <RemoveCircleIcon />
                            </IconButton>
                        )}
                    </div>
                    
                ))}
            </div>
            <div style={{display: "flex", gap: "20px", marginTop: "20px", justifyContent: "center"}}>
                <Button type="submit" variant="contained" color="primary" sx={{width: "90px"}} disabled={!isFloat}>
                    SAVE
                </Button>
                <Button onClick={handleClose} variant="contained" color="error" sx={{width: "90px"}}>
                    CANCEL
                </Button>
            </div>
        </form>
    )
}

const ProviderContent = ({setModels, handleClose}) => {
    const [providerModel, setNewModel] = useState({
        providerName: "",
        address: "",
        phoneNumber: "",
    })

    const [isValid, setIsValid] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleInputChange = (e, fieldName) => {
        const { value } = e.target;
        setNewModel(prevState => ({
          ...prevState,
          [fieldName]: value
        }));
    };

    const handleAddModel = (fullModel) => {
        setModels(prevModels => [...prevModels, fullModel]);
        setNewModel({
            address: "",
            providerName: "",
            phoneNumber: "",
        });
    };

    const handleSave = (event) => {
        event.preventDefault();
        const providerCode = 'P00000010';
        const fullModel = {
            
            ...providerModel,
            providerCode: providerCode,
            phoneNumber: phoneNumber
        };
    
        handleAddModel(fullModel);
        handleClose()
    }
    

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        const isValidPhoneNumber = /^\d{9,10}$/.test(value);
        if (isValidPhoneNumber) {
            setIsValid(true);
            setPhoneNumber(value);
        }
        else {
            setIsValid(false);
            setPhoneNumber('');
        }
    };
    

    return (
        <form onSubmit={handleSave} className={styles.content}>
            <div className={styles.item}>
                <p>Provider Name <span style={{color: "red"}}>(*)</span></p>
                <TextField
                    required
                    type="text"
                    id="provider-providerName"
                    size="small"
                    sx={{ '&.MuiInputBase-input': { width: "200px" } }}
                    onChange={(event) => handleInputChange(event, "providerName")}
                />
            </div>
            <div className={styles.item}>
                <p>Address <span style={{color: "red"}}>(*)</span></p>
                <TextField
                    required
                    type="text"
                    id="provider-address"
                    size="small"
                    sx={{ '& .MuiInputBase-input': { width: "200px" } }}
                    onChange={(e) => handleInputChange(e, "address")}
                />

            </div>
            <div className={styles.item}>
                <p>Phone Number <span style={{color: "red"}}>(*)</span></p>
                <TextField
                    required
                    error={!isValid}
                    helperText={!isValid && "Phone number contains 9 or 10 digits."}
                    type="text"
                    id="provider-phone"
                    size="small"
                    sx={{ 
                        '& .MuiInputBase-input': { width: "220px" },
                        '& .MuiFormHelperText-root': { width: "220px", fontSize: "0.75em"}
                    }}
                    onChange={(e) => handlePhoneChange(e)}
                />
            </div>
            <div style={{display: "flex", gap: "20px", marginTop: "20px", justifyContent: "center"}}>
                <Button type="submit" variant="contained" color="primary" sx={{width: "90px"}} disabled={!isValid}>
                    SAVE
                </Button>
                <Button onClick={handleClose} variant="contained" color="error" sx={{width: "90px"}}>
                    CANCEL
                </Button>
            </div>
        </form>
    )
    
}

const ImportContent = ({setModels, handleClose}) => {
    const {providerCode} = useParams()
    const [importModel, setNewModel] = useState({
        quantity: "",
        price: "",
        importedDate: "",
    })

    const handleInputChange = (e, fieldName) => {
        const { value } = e.target;
        setNewModel(prevState => ({
          ...prevState,
          [fieldName]: value
        }));
    };

    const handleDateChange = (newValue, fieldName) => {
        // Extracting the date and formatting it
        
        const formattedDate = newValue ? newValue.format("DD/MM/YYYY") : '';

        setNewModel(prevState => ({
            ...prevState,
            [fieldName]: formattedDate
        }));
    };

    const handleAddModel = (fullModel) => {
        setModels(prevModels => [...prevModels, fullModel]);
        setNewModel({
            quantity: "",
            price: "",
            importedDate: "",
        });
    };

    const handleSave = (event) => {
        event.preventDefault();
        const medicationCode = "M00000001"
        const fullModel = {
            medicationCode, 
            providerCode: providerCode,
            ...importModel,
        };
    
        handleAddModel(fullModel);
        handleClose()
    }

    return (
        <form onSubmit={handleSave} className={styles.content}>
            <div className={styles.item}>
                <p>Quantity <span style={{color: "red"}}>(*)</span></p>
                <TextField
                    required
                    type="number"
                    id="import-quantity"
                    size="small"
                    inputProps={{
                        min: 1
                    }}
                    sx={{ 
                        '& .MuiInputBase-input': { width: "200px" }
                    }}
                    onChange={(e) => handleInputChange(e, "quantity")}
                />
            </div>
            <div className={styles.item}>
                <p>Price <span style={{color: "red"}}>(*)</span></p>
                <TextField
                    required
                    type="number"
                    id="import-price"
                    size="small"
                    inputProps={{
                        min: 1
                    }}
                    sx={{ 
                        '& .MuiInputBase-input': { width: "200px" }
                    }}
                    onChange={(e) => handleInputChange(e, "price")}
                />
            </div>
            <div className={styles.item}>
                <p>Imported Date <span style={{color: "red"}}>(*)</span></p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        format="DD/MM/YYYY"
                        onChange={(newValue) => handleDateChange(newValue, "importedDate")}
                        sx={{ '& .MuiInputBase-input': { fontSize: '1em', width: "164px" } }}
                        slotProps={{ textField: { size: 'small' }}}
                        disableFuture
                    />
                </LocalizationProvider>
            </div>
            <div style={{display: "flex", gap: "20px", marginTop: "20px", justifyContent: "center"}}>
                <Button type="submit" variant="contained" color="primary" sx={{width: "90px"}}>
                    SAVE
                </Button>
                <Button onClick={handleClose} variant="contained" color="error" sx={{width: "90px"}}>
                    CANCEL
                </Button>
            </div>
        </form>
    )
    
}

const PatientContent = ({setModels, handleClose}) => {
    const [patientModel, setNewModel] = useState({
        patientCode: "",
        fullName: "",
        firstName: "",
        lastName: "",
        gender: "",
        birthDate: "",
        address: "",
        phoneNumber: [],
    });

    const [isValid, setIsValid] = useState(true)

    const [phoneNumbers, setPhoneNumbers] = useState(['']); // Initial state with one empty phone number field

    const handleArrayChange = (e, index) => {
        const value = e.target.value;
        const isValidPhoneNumber = /^\d{9,10}$/.test(value);
        if (isValidPhoneNumber) {
            setIsValid(true);
            const newPhoneNumbers = [...phoneNumbers];
            newPhoneNumbers[index] = value;
            setPhoneNumbers(newPhoneNumbers);
        }  
        else {
            setIsValid(false);
        }
    };

    const addPhoneNumberField = () => {
        setPhoneNumbers(prevPhoneNumbers => [...prevPhoneNumbers, '']);
    };

    const removePhoneNumberField = (index) => {
        setPhoneNumbers(prevPhoneNumbers => {
            const newPhoneNumbers = [...prevPhoneNumbers];
            newPhoneNumbers.splice(index, 1);
            return newPhoneNumbers;
        });
    };

    const handleInputChange = (e, fieldName) => {
        const { value } = e.target;
        setNewModel(prevState => ({
          ...prevState,
          [fieldName]: value
        }));
      };

      const handleDateChange = (newValue, fieldName) => {
        // Extracting the date and formatting it
        
        const formattedDate = newValue ? newValue.format("DD/MM/YYYY") : '';
        setNewModel(prevState => ({
            ...prevState,
            [fieldName]: formattedDate
        }));
    };

    
    const handleAddModel = (fullModel) => {
        setModels(prevModels => [...prevModels, fullModel]);
        setNewModel({
            patientCode: "",
            fullName: "",
            firstName: "",
            lastName: "",
            gender: "",
            birthDate: "",
            address: "",
            phoneNumber: [],
        });
    };

    const handleSave = (event) => {
        event.preventDefault();
        const fullName = `${patientModel.firstName} ${patientModel.lastName}`;
        const patientCode = '000000009'; 
        const fullModel = {
            ...patientModel,
            patientCode,
            fullName,
            phoneNumber: phoneNumbers
        };
    
        handleAddModel(fullModel);
        handleClose()
    }

    return (
        <form onSubmit={handleSave} className={styles.content}>
            <div className={styles.item}>
                    <p>First Name <span style={{color: "red"}}>(*)</span></p>
                    <TextField
                        required
                        id="patient-firstName"
                        size="small"
                        sx={{ '& .MuiInputBase-input': { width: "200px" } }}
                        value={patientModel.firstName}
                        onChange={(e) => handleInputChange(e, "firstName")}
                    />
                </div>
                <div className={styles.item}>
                    <p>Last Name <span style={{color: "red"}}>(*)</span></p>
                    <TextField
                        required
                        id="patient-lastName"
                        size="small"
                        sx={{ '& .MuiInputBase-input': { width: "200px" } }}
                        value={patientModel.lastName}
                        onChange={(e) => handleInputChange(e, "lastName")}
                    />
                </div>
                <div className={styles.item}>
                    <p>Gender <span style={{color: "red"}}>(*)</span></p>
                    <TextField
                        required
                        select
                        id="patient-gender"
                        size="small"
                        SelectProps={{
                            native: true,
                        }}
                        value={patientModel.gender}
                        onChange={(e) => handleInputChange(e, "gender")}
                        sx={{ '& .MuiInputBase-input': { width: "182px" } }}
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Not Tell">Not Tell</option>
                    </TextField>
                </div>
                <div className={styles.item}>
                    <p>Birth Date <span style={{color: "red"}}>(*)</span></p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            onChange={(newValue) => handleDateChange(newValue, "birthDate")}
                            format="DD/MM/YYYY"
                            sx={{ '& .MuiInputBase-input': { fontSize: '1em', width: "164px" } }}
                            slotProps={{ textField: { size: 'small' }}}
                            disableFuture
                        />
                    </LocalizationProvider>
                </div>
                <div className={styles.item}>
                    <p>Address <span style={{color: "red"}}>(*)</span></p>
                    <TextField
                        required
                        id="patient-address"
                        size="small"
                        sx={{'& .MuiInputBase-input': { width: "200px"}}}
                        value={patientModel.address}
                        onChange={(e) => handleInputChange(e, "address")}
                    />
                </div>
                <div className={styles.multiple}>
                    {phoneNumbers.map((phoneNumber, index) => (
                        <div className={styles.multipleItem}>
                            <div key={index} className={styles.multipleItem}>
                                <p style={{marginRight: "20px"}}>Phone Number <span style={{color: "red"}}>(*)</span></p>
                                <TextField
                                    required
                                    id={`employee-phone${index}`}
                                    size="small"
                                    sx={{
                                        '& .MuiInputBase-input': { width: "200px"},
                                        '& .MuiFormHelperText-root': {width: "200px", fontSize:"0.75em"}
                                    }}
                                    onChange={(e) => handleArrayChange(e, index)}
                                    error={!isValid}
                                    helperText={!isValid && "Phone number has 9 or 10 digits."}
                                />
                                
                            </div>
                            {index === phoneNumbers.length - 1 && phoneNumbers[index] != '' && isValid && (
                                <IconButton onClick={addPhoneNumberField}>
                                    <AddCircleIcon />
                                </IconButton>
                            )}
                            {index !== 0 && isValid && (
                                <IconButton onClick={() => removePhoneNumberField(index)}>
                                    <RemoveCircleIcon />
                                </IconButton>
                            )}
                        </div>
                        
                    ))}
                </div>

                <div style={{display: "flex", gap: "20px", marginTop: "20px", justifyContent: "center"}}>
                    <Button type="submit" variant="contained" color="primary" sx={{width: "90px"}} disabled={!isValid}>
                        SAVE
                    </Button>
                    <Button onClick={handleClose} variant="contained" color="error" sx={{width: "90px"}}>
                        CANCEL
                    </Button>
                </div>
        </form>
    )
}

const AddForm = ({models, setModels, title, handleClose, role}) => {
    return (
        <>
            <div className={styles.overlay} />
            <div className={styles.addForm}>
                <h1 className={styles.title}>{title} FORM</h1>
                {(role == "doctor" || role == "nurse") && <EmployeeContent setModels={setModels} handleClose={handleClose} />}
                {role == "department" && <DepartmentContent setModels={setModels} handleClose={handleClose}/>}
                {role == "medication" && <MedicationContent setModels={setModels} handleClose={handleClose} />}
                {role == "provider" && <ProviderContent setModels={setModels} handleClose={handleClose} />}
                {role == "import" && <ImportContent setModels={setModels} handleClose={handleClose} />}
                {role == "patient" && <PatientContent setModels={setModels} handleClose={handleClose} />}
            </div>
        </>
        
    )
}

export default AddForm