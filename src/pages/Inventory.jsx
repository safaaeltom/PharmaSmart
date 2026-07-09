import SearchMedicine from "../components/Inventory/SearchMedicine";
import MedicineList from "../components/Inventory/MedicineList";
import AddMedicineForm from "../components/Inventory/AddMedicineForm";

const Inventory = () => {
    return ( 
        <div>
            <h1>Inventory</h1>
            <SearchMedicine />
            <MedicineList/>
            <AddMedicineForm/>
            <p>Manage medicines here</p>
        </div>
     );
}
 
export default Inventory;