import React from 'react';
import { useState, useEffect } from 'react';
import Innerdata from './Innerdata';
import { Table } from 'react-bootstrap';

// const getDatafromLS=()=>{



// }

function Form() {
  const [video, setVideo] = useState({fname:'', lname:''});
  const [Arr, setArr] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(video).length && video.fname != '') {
      Arr.push(video);
      localStorage.setItem('Data', JSON.stringify(Arr));
      getFromDb();
      setVideo({fname:'', lname:''});
    }
  }



  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setVideo({
      ...video,
      [e.target.name]: e.target.value
    })
  }


  //saving data to local storage
  function getFromDb() {
    const demo = localStorage.getItem('Data');
    if (demo != '' && demo != undefined && demo != ' ') {
      setArr(JSON.parse(demo));
    }
  }
 

  useEffect(() => {
    // localStorage.setItem('Data', '');
    getFromDb();
  }, [])


  return (
    <div>


      <div className='submitF'>
        <form>
          First Name: <input type='text' name="fname" value={video.fname} onChange={handleChange} placeholder='enter firstname' />
          Last Name:<input type='text' name="lname" value={video.lname} onChange={handleChange} placeholder='enter lastname' />
          <button className='button1' onClick={handleSubmit}>submit</button>
        </form>


      </div>
      <Table className='tablecss'>
        <thead>
          <th>first name</th>
          <th>last name</th>
        </thead>
        <tbody>
          {
            Arr.length ? Arr.map((rec) => (

              <tr>
                <td>{rec.fname}</td>
                <td>{rec.lname}</td>
              </tr>
            )) : ''
          }
        </tbody>
      </Table>



    </div>
  )
}
export default Form;
