const MedicineList = ({medicines}) => {

    return ( 
        <div id="medicines-list">
            <h2>Available medicines</h2>

            <ul>
                {medicines.map((medicine)=>(
                    <li key={medicine.id}>
                        <span className="name">{medicine.name}</span>
                        <span className="quantity">{medicine.quantity}</span>
                        <span className="delete">Delete</span>
                        <span className="edit">Edit</span>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default MedicineList;