import { useState } from "react"; 
import SearchMedicine from "../components/Inventory/SearchMedicine";
import MedicineList from "../components/Inventory/MedicineList";
import HideMedicineList from "../components/Inventory/HideMedicineList"
import AddMedicineForm from "../components/Inventory/AddMedicineForm";

const medicines = [
        { id: 1, name: "Paracetamol", quantity: 24 },
        { id: 2, name: "Ibuprofen", quantity: 5 },
        { id: 3, name: "Atenolol", quantity: 17 },
        { id: 4, name: "Amoxicillin", quantity: 37 }
    ];

const Inventory = () => {
    const [hideMedicines, setHideMedicines] = useState(false);

    return ( 
        <div>
            <h1>Inventory</h1>
            <SearchMedicine />

            {!hideMedicines && <MedicineList medicines={medicines}/>}
            
            <HideMedicineList 
                hideMedicines={hideMedicines}
                setHideMedicines={setHideMedicines}
            />
            <AddMedicineForm/>
        </div>
     );
}
 
export default Inventory;