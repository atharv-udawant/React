import { useState } from "react";
function Crud(){
    const [deptsArray, setDeptsArray] = useState([]);
    const [deptno, setDeptNo] = useState([]);
    const [dname, setDeptName] = useState([]);
    const [job,setjob]=useState([]);
    const [salary,setsalary]=useState([]);
    const [loc, setDeptLoc] = useState([]);
    let resultArray = deptsArray.map(item => {
        return <tr>
            <td>{item.deptno}</td>
            <td>{item.dname}</td>
            <td>{item.job}</td>
            <td>{item.salary}</td>
            <td>{item.loc}</td>
            <td>
                <a href="#" onClick = {() =>selectDept(item.deptno)}>&#xf25a;</a> |
                <a href="#" className="fa fa-trash" onClick={() => deleteDept(item.deptno)}></a>
            </td>
            
        </tr>;
    });

    function clearFeilds(){
        setDeptNo("");
        setDeptName("");
        setjob("");
        setsalary("");
        setDeptLoc("");
    }
    function selectDept(deNo){
        let deptobj =deptsArray.find(item => item.deptno == deNo);
        setDeptNo(deptobj.deptno);
        setDeptName(deptobj.dname);
        setjob(deptobj.job);
        setsalary(deptobj.salary);
        setDeptLoc(deptobj.loc);
    }
    function updateDeptsClick(){
        let tempArray = [...deptsArray];
        let index = tempArray.findIndex(item => item.deptno == deptno);
        
        tempArray[index].dname = dname;
        tempArray[index].job=job;
        tempArray[index].salary=salary;
        
        tempArray[index].loc=loc;

        setDeptsArray(tempArray);

        clearFeilds();
    }
    function deleteDept(deNo){
        
        let tempArray = [...deptsArray];
        let index = deptsArray.findIndex(item => item.deptno == deNo);
        tempArray.splice(index ,1);
        setDeptsArray(tempArray);
    }
    function getDeptsClick() {
        let data = [
            { deptno: 10, dname: "Atharv",job: "Marketing", salary: 40000, loc: 25 },
            { deptno: 20, dname: "Sahil",job: "Finance", salary: 60000, loc: 21 },
            { deptno: 30, dname: "Yash", job: "Risk", salary: 70000,loc: 98 },
            { deptno: 40, dname: "Krishankant", job: "Bussiness", salary: 30000,loc: 76 },
        ];

        setDeptsArray(data);

    }
    function addDeptsClick(){
        
        let deptobj = { };
        deptobj.deptno = deptno;
        deptobj.dname = dname;
        deptobj.job =job;
        deptobj.salary=salary;
        deptobj.loc = loc;

        let tempArray = [...deptsArray];
        tempArray.push(deptobj);
        setDeptsArray(tempArray);
    }

    return (
        <>
            <h3>Perform CRUD Operations on Array of Objects</h3>
            <hr />
            <input type="text" placeholder="Emp ID" value ={deptno}  onChange={(e)=> setDeptNo(e.target.value)}  ></input>
            <input type="text" placeholder="Emp Name" value ={dname}  onChange={(e)=> setDeptName(e.target.value)} ></input>
            <input type="text" placeholder="Job" value ={job}  onChange={(e)=> setjob(e.target.value)} ></input>
            <input type="text" placeholder="Salary" value ={salary}  onChange={(e)=> setsalary(e.target.value)} ></input>
            <input type="text" placeholder="Dept NO" value ={loc}  onChange={(e)=> setDeptLoc(e.target.value)} ></input>
            

            <hr />
            <input type="button" value="Get Depts" onClick={getDeptsClick} />
            <input type="button" value="Add Dept" onClick={addDeptsClick}/>
            <input type="button" value="Update Dept" onClick={updateDeptsClick}/>


            <hr />
            <table border="2" width="800">
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Job</th>
                    <th>Salary</th>
                    <th>Dept No</th>
                    <th></th>
                </tr>

                {resultArray}
            </table>
        </>
    );
}

export default Crud;