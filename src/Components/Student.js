import React from 'react'
import { Link } from 'react-router-dom'

export default function Student() {
  let btn ={
    width : "300px",
    height: "50px",
    fontSize: "30px",
    border: "2px solid black",
    borderRadius: "25px"
    
  }
  return (
    <div className='page'>
      <div className='header'>
        <h1 style={{fontSize:"50px"}}>Students Details</h1>
        <button style={btn}>Add new student</button>
      </div>
      <div>
        <table className='table'>
          <thead>
            <tr>
            <th style={{width:"40%",textAlign:"left",padding:"10px"}}>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{width:"40%",textAlign:"left",padding:"5px"}}>John</td>
              <td>26</td>
              <td>MERN</td>
              <td>October</td>
              <td><Link>Edit</Link> </td>
            </tr>
            <tr>
              <td style={{width:"40%",textAlign:"left",padding:"5px"}}>Doe</td>
              <td>25</td>
              <td>MERN</td>
              <td>November</td>
              <td><Link>Edit</Link> </td>
            </tr>
            <tr>
              <td style={{width:"40%",textAlign:"left",padding:"5px"}}>Biden</td>
              <td>26</td>
              <td>MERN</td>
              <td>October</td>
              <td><Link>Edit</Link> </td>
            </tr>
            <tr>
              <td style={{width:"40%",textAlign:"left",padding:"5px"}}>Barar</td>
              <td>22</td>
              <td>MERN</td>
              <td>November</td>
              <td><Link>Edit</Link> </td>
            </tr>
            <tr>
              <td style={{width:"40%",textAlign:"left",padding:"5px"}}>Christ</td>
              <td>25</td>
              <td>MERN</td>
              <td>November</td>
              <td><Link>Edit</Link> </td>
            </tr>
            <tr>
              <td style={{width:"40%",textAlign:"left",padding:"5px"}}>Elent</td>
              <td>23</td>
              <td>MERN</td>
              <td>October</td>
              <td><Link>Edit</Link> </td>
            </tr>
            <tr>
              <td style={{width:"40%",textAlign:"left",padding:"5px"}}>Suman</td>
              <td>24</td>
              <td>MERN</td>
              <td>November</td>
              <td><Link>Edit</Link> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
