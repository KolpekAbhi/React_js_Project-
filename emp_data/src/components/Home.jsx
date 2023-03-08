import React, { useEffect, useState } from 'react';
import empService from '../service/emp.service'
import { Link } from 'react-router-dom';

const Home = () => {

const [empList, setEmpList] = useState([]);

const [msg,setMsg] = useState("");

useEffect(()=>{
    init();    
},[]);

const init=()=>{
    empService
    .getempolyee()
    .then((res)=>
    {
    console.log(res.data);
    setEmpList(res.data);
    })
    .catch((error)=>
    {
        console.log(error);
    });
}
    
const deleteById = (id)=>{
    empService.deleteById(id).then((res)=>{
        setMsg("Delete Successfully");
        init();
    }).catch((error)=>{
        console.log(error);
    });
};



  return (
    <div className="container">
    <div className="text-center fs-3 mt-4"><b> EMPOLYEE INFORMATION </b></div>
    {
        msg && <p className='text-center text-success'>{msg}</p>
    }
          <table className="table mt-5">
              <thead className="table table-success table-striped">
                  <tr>
                      <th scope="col">SR NO</th>
                      <th scope="col">ID</th>     
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Salary</th>
                      <th scope="col">Action</th>  
                  </tr>
              </thead >
              <tbody>
                {
                    empList.map((e,num)=>(
                        <tr>
                        <th scope="row">{num+1}</th>
                        <td>{e.id}</td>
                        <td>{e.firstname}</td>
                        <td>{e.lastname}</td>
                        <td>{e.email}</td>
                        <td>{e.salary}</td>
                        <td>
                        <Link to={"editemp/"+e.id} className="btn btn-sm btn-primary"> Edit </Link>
                        <a onClick={()=>deleteById(e.id)} className="btn btn-sm btn-danger ms-3">Delete</a>
                        </td> 
                    </tr>
                    ))}
              </tbody>
          </table>
      </div>
  );
};

export default Home;

