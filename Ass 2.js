function App() {
let arraystudent = {ID:"01",sname : "Atharv", course :"Science", age : 21, total : 100 };
  let arrayobj = [{ID:"01",dname : "Atharv", designation :"Science", experience : 21, contact : 100234 },
  {ID:"02",dname : "sahil", designation :"Science", experience : 21, contact : 100234 }];

  let array4 = arrayobj.map((item => {
    return ( <tr>
    <td>
        {item.ID}
    </td>
    <td>
        {item.dname}
    </td>
    <td>
        {item.designation}
    </td>
    <td>
        {item.experience}
    </td>
    <td>
        {item.contact}
    </td>
  </tr>)
  }))
  return (
<>
 <h1>
      Doctor Details
    </h1>
<table border ="2" width="500">
    <tr>
      <th>
        Doctor Id
      </th>
      <th>
        Doctor Name
      </th>
      <th>
        Doctor designation
      </th>
      <th>
        Doctor experience
      </th>
      <th>
        Doctor contact
      </th>

    </tr>
    {array4}
     
  </table>

</>
    );
}

export default App;