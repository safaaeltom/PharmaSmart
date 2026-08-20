const MedicineList = ({
    medicines, 
    increaseMedicine, 
    decreaseMedicine,
    deleteMedicine,
    editMedicine,
    editingMedicineId,
    setEditingMedicineId,
    input,
    setInput
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
                    <button onClick={()=>{
                        setEditingMedicineId(medicine.id);
                        setInput(medicine.name);
                    }}>
                        Edit
                    </button>
                    {medicine.id === editingMedicineId && 
                    (<input
                    value= {input}
                    type= "text"
                    onChange={(e)=>setInput(e.target.value)}
                    />)}                      
                </li>
                ))}
            </ul>
        </div>
     );
}
 
export default MedicineList;