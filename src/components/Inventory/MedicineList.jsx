const MedicineList = () => {
    const medicines = [
        { id: 1, name: "Paracetamol", quantity: 24 },
        { id: 2, name: "Ibuprofen", quantity: 5 },
        { id: 3, name: "Atenolol", quantity: 17 },
        { id: 4, name: "Amoxicillin", quantity: 37 }
    ];

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