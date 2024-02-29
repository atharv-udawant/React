import { useState } from "react";
 function Login(){
    let avatar = "logo512.png";
    const [PName, SetName] = useState("");
    const [Uprice,SetPrice] = useState("");
    const [Qnt , SetQnt] = useState("");
    const[Total , SetTotal] = useState("");
    const[Final, SetFinal] = useState("");

    function nameChange(event){
        SetName(event.target.value);
    }
    function priceChange(event){
        SetPrice(event.target.value);
    }
    function QuantityChange(event){
        SetQnt(event.target.value);
    }

    function Multiplycation(){
        SetTotal(Uprice*Qnt);
        
    }


    return (
        <>
        Product Name:<input type="text" onChange={nameChange} ></input> <br></br>
        Unit Price: <input type="text" onChange={priceChange}></input> <br></br>
        Quantity: <input type="text" onChange={QuantityChange}></input> <br></br>
        Final: <input type="text" onChange={(e) => {SetFinal(e.target.value)}}/> <br></br>
        <button type="button" onClick={Multiplycation}> Get Total</button>
        
        <h3 style={{color: "Red"}}>{PName} </h3>
        <p>Total amount is : {Total} {Final}</p>

        <img width="50" src={"./" + avatar}></img>
        </>
    );
}
export default Login;