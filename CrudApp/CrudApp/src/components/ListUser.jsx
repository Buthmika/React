import React from 'react'

function ListUser() {
  return (
    <div>
     <h1>List User</h1>
     <form action="">
      <table>
        <tbody>
          <tr>
            <th>
            <label htmlFor="">Name</label>
            
            </th>
            <td>
            <input type="text" name="name" id="" /><br />
            </td>
          </tr>
          <tr>
            <th>
            <label htmlFor="">Email</label>
            
            </th>
            <td>
            <input type="email" name="email" id="" /><br />
              
            </td>
          </tr>
          <tr>
            <th>
            <label htmlFor="">Mobile</label>
            </th>
            <td>
            <input type="text" name="mobile" id="" /><br />
            </td>
          </tr>
          <tr>
            <th>

            </th>
            <td>
            <button>Save</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <label htmlFor="">Name</label>
      <input type="text" name="name" id="" /><br />
      <label htmlFor="">Email</label>
      <input type="email" name="email" id="" /><br />
      <label htmlFor="">Mobile</label>
      <input type="text" name="mobile" id="" /><br />
      <button>Save</button> */}

      
     </form>
    </div>
  )
}

export default ListUser
