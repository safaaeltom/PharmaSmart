const HideMedicineList = ({ hideMedicines, setHideMedicines }) => {
    return ( 
        <div id="hide-medicines">
            <input 
                id="hide-list" 
                type="checkbox"
                checked={hideMedicines}
                onChange={(e)=>setHideMedicines(e.target.checked)}
                />
            <label htmlFor="hide-list">Hide medicines list</label>
        </div>
     );
}
 
export default HideMedicineList;