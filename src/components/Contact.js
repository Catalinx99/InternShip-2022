import "./contactst.css";

const Contact = () => {
  return (
    <div className='contact'>
     <form className='form'>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    Surname:
    <input type="text" name="surname" />
  </label>
  <label>
    Phone number:
    <input type="number" name="number" />
  </label>
  <label>
    Email:
    <input type="email" name="email" />
  </label>
  
  <input type="submit" value="Submit" className="buton" />
</form>
    </div>
  )
}

export default Contact
