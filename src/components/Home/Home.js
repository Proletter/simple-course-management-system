import React from 'react';
import {useState, useEffect} from 'react'
import fire from '../../config/config'

function Home(){
const [courseName, setCourseName] = useState('')
const [courseCode, setCourseCode] = useState('')
const [courseLoaded, setCourseLoaded] = useState(false)
const  [fetchedCourses, setFetchedCourses] = useState({})

const course = {
    "courseName": courseName,
    "courseCode": courseCode
}

const outPutFetchedCourses=(fetchedCourses)=>{
    for(const properties in fetchedCourses){
        console.log(properties.courseCode)
        console.log(properties.courseName)

    }
}



// let courses =  course.map(i=>{
//     return (<ul>
//         <li>course name: {i.courseName}</li>
//         <li>course code:{i.courseCode}</li>
//     </ul>)
// })

    useEffect(() => {
    const fetchData = async () => {

      await fire.database().ref('messages').on('value',(snapshot)=>{
          setFetchedCourses(snapshot.val())
        outPutFetchedCourses(fetchedCourses)

        console.log(snapshot.val())
        }
            , (error)=>{
                console.log('read failed' + error)
            }
        );
        
        
    };
    fetchData();
  }, []);

  const uploadCourses = () => {
      console.log('uploading course...')
    fire.database().ref('messages').push(course);
  };



// const fetchCourses=(e)=>{

// }
   

return(
    <>
    <h2 className="text-center lead">Register your Course</h2>

<div className="text-center mt-4">
  <div className="col-sm-12 col-md-12 text-center">
    <form className="form-inline">
      <div className="mr-4 form-group">
        <label htmlFor="exampleInputName2">Course Code:</label>
        <input type="text" onChange={(e)=>setCourseCode(e.target.value)} className="form-control" id="exampleInputName2" placeholder="e.g GST 101" />
      </div>
      <div className="mr-4 form-group">
        <label htmlFor="exampleInputEmail2">Course Title:</label>
        <input type="text" onChange={(e)=>setCourseName(e.target.value)} className="form-control" id="exampleInputEmail2" placeholder="e.g Use of English" />
      </div>

      <button onClick={(e)=>{
          e.preventDefault()
          uploadCourses()
          setCourseLoaded(true)
      }} className="btn btn-success">Send</button>
    </form>
  </div>
</div>

{courseLoaded? course: <h3 className="mt-8">list of courses</h3>}



</>

)




} 

export default Home