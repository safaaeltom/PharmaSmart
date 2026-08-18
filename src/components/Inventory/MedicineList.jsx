const MedicineList = ({
    medicines, 
    increaseMedicine, 
    decreaseMedicine,
    deleteMedicine
}) => {

    return ( 
        <div id="medicines-list">
            <h2>Available medicines</h2>

            <ul>
                {medicines.map((medicine)=>(
                    <li key={medicine.id}>
                        <span className="name">{medicine.name}</span>
                        <span className="quantity">{medicine.quantity}</span>
                        <button onClick={()=>increaseMedicine(medicine.id)}>
                            +
                        </button>
                        <button onClick={()=>decreaseMedicine(medicine.id)}>
                            -
                        </button>
                        <button onClick={() => deleteMedicine(medicine.id)}>
                            Delete
                        </button>
                        <span className="edit">Edit</span>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default MedicineList;