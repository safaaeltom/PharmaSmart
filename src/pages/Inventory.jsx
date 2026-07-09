import SearchMedicine from "../components/SearchMedicine";
import MedicineList from "../components/MedicineList";
import AddMedicineForm from "../components/AddMedicineForm";

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