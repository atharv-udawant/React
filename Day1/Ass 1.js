function App() {
	  let arraystudent = {ID:"01",sname : "Atharv", course :"Science", age : 21, total : 100 };
return ( <>
    <table border= "02" width= "500">
    <h3>
    Student Details
  </h3>
     <tr>
     <td>
          Student ID
        </td>
        <td>
          {arraystudent.ID}
        </td>
     </tr>

     <tr>
     <td>
          Student Name
        </td>
        <td>
          {arraystudent.sname}
        </td>
     </tr>

     <tr>
     <td>
          Student Course
        </td>
        <td>
          {arraystudent.course}
        </td>
     </tr>

     <tr>
     <td>
          Student Age
        </td>
        <td>
          {arraystudent.age}
        </td>
     </tr>

     <tr>
     <td>
          Student Total
        </td>
        <td>
          {arraystudent.total}
        </td>
     </tr>
      
      
       
        
      
    </table>
    
    </>
    );
}

export default App