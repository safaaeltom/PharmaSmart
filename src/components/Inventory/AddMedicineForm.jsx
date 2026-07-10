const AddMedicineForm = () => {
    return ( 
         <form id="add-medicine">
            <label htmlFor="medicine-name">Medicine Name</label>
            <input id="medicine-name" type="text" placeholder="Enter medicine name"/>
            <label htmlFor="medicine-quantity">Quantity</label>
            <input id="medicine-quantity" type="number" placeholder="Enter quantity"/>
            <button type="submit">Add Medicine</button>
        </form>
     );
}
 
export default AddMedicineForm;