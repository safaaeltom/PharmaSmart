import SearchMedicine from "../components/Inventory/SearchMedicine";
import MedicineList from "../components/Inventory/MedicineList";
import AddMedicineForm from "../components/Inventory/AddMedicineForm";

const medicines = [
        { id: 1, name: "Paracetamol", quantity: 24 },
        { id: 2, name: "Ibuprofen", quantity: 5 },
        { id: 3, name: "Atenolol", quantity: 17 },
        { id: 4, name: "Amoxicillin", quantity: 37 }
    ];

const Inventory = () => {
    return ( 
        <div>
            <h1>Inventory</h1>
            <SearchMedicine />
            <MedicineList medicines={medicines}/> 
            <AddMedicineForm/>
            <p>Manage medicines here</p>
        </div>
     );
}
 
export default Inventory;