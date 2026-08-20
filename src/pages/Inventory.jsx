import { useState } from "react"; 
import SearchMedicine from "../components/Inventory/SearchMedicine";
import MedicineList from "../components/Inventory/MedicineList";
import HideMedicineList from "../components/Inventory/HideMedicineList"
import AddMedicineForm from "../components/Inventory/AddMedicineForm";

const Inventory = () => {
    const [medicines, setMedicines] = useState([
        { id: 1, name: "Paracetamol", quantity: 24 },
        { id: 2, name: "Ibuprofen", quantity: 5 },
        { id: 3, name: "Atenolol", quantity: 17 },
        { id: 4, name: "Amoxicillin", quantity: 37 }
    ]);

    const increaseMedicine = (id) =>{
        setMedicines(
            medicines.map((medicine)=>{
            if(medicine.id === id){
              return{
                ...medicine, 
                quantity:medicine.quantity + 1
                };
            }

            return medicine;
            })
        );
    };

    const decreaseMedicine = (id) =>{
        setMedicines(
            medicines.map((medicine)=>{
                if(medicine.id===id && medicine.quantity>0){
                    return{
                    ...medicine, 
                    quantity:medicine.quantity - 1
                    };
                }
                return medicine;
            })
        );
    };
    
    const deleteMedicine = (id) =>{
        setMedicines(
            medicines.filter((medicine)=>medicine.id !== id)
        );
    };

    const editMedicine = (id, newName) =>{
        setMedicines(
            medicines.map((medicine)=>{
                if(medicine.id===id){
                    return {...medicine, name:newName};
                }
                return medicine
            })

        );
    };

    const [hideMedicines, setHideMedicines] = useState(false);

    return ( 
        <div>
            <h1>Inventory</h1>
            <SearchMedicine />

            {!hideMedicines && <MedicineList 
                medicines={medicines}
                increaseMedicine={increaseMedicine} 
                decreaseMedicine={decreaseMedicine}
                deleteMedicine={deleteMedicine}
                editMedicine={editMedicine} />
                }   
            <HideMedicineList 
                hideMedicines={hideMedicines}
                setHideMedicines={setHideMedicines}
            />
            <AddMedicineForm/>
        </div>
     );
};
 
export default Inventory;