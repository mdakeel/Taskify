import { Button, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Table from './Table'
import TableComponent from './Table'
import { getAssignedTask } from '../../api/manager/teacher.api'

const TaskPage = () => {
    const [taskCreatedByTeacher, setTask] = useState([])
    const getData = async () => {
      const data = await getAssignedTask()
      if (data && data.data) {
        setTask(data.data)
        console.log(data)
      } else {
        console.log("There was definetyly some error")
      }
  
    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <section id="content" style={{backgroundColor:"rgb(4,46,94)",minHeight:"100vh",paddingTop:"10px"}} >
        <div className="head-title">
          <div className="left">
            <ul className="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>
                <a className="active" href="#">
                  Teacher
                </a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>
                <a className="active" href="#">
                  Task
                </a>
              </li>
            </ul>
          </div>
        </div>

        <section class="section about-section" id="about">
                <Stack>
                    <TableComponent taskData={taskCreatedByTeacher}/>
                </Stack>

        </section>
    </section>
  )
}

export default TaskPage
