const Form = ({img,fullname,age,email,gender})=>{
 return(
    <div>
        <img src={img} alt={`${fullname} profile`}/>
        <h4>{fullname}</h4>
        <h4>{age}</h4>
        <h4>{email}</h4>
        <h4>{gender}</h4>
    </div>
 )
}
export default Form;