const Display = ({value})=>
{
  return(
   <div className="display">
    <input
     type="text" 
     name="display" 
     id="display" 
     value={value} readOnly
    />
   </div>
   )
}
export default Display;