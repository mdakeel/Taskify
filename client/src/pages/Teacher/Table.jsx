import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
} from '@chakra-ui/react'

import { AiOutlineLink, AiOutlineNumber } from "react-icons/ai"
import { GoTasklist } from "react-icons/go"
import { SiCodereview } from "react-icons/si"
import { PiStudentFill } from "react-icons/pi"
import { GiTeacher } from "react-icons/gi"
import {HiOutlineExternalLink} from "react-icons/hi"
import { NavLink } from 'react-router-dom'
const TableComponent = ({ taskData }) => {
    return (
        <div>
            <TableContainer bgColor={"white"} minH={"70vh"} style={{padding:"10px"}} border={"2px"} >
                <Table variant='striped'style={{ padding: "10px" }}  colorScheme='telegram' gap={"0px"} textAlign={"left"} alignItems={"left"}>
                    <Thead gap={"0px"} bgColor={"white"} color={"rgb(4,46,94)"}>
                        <Tr gap={"0px"} style={{ padding: "10px" }}>
                            <Th ><Button  bgColor={"rgb(4,46,94)"}  color={"white"} leftIcon={<GoTasklist />} minWidth={"180px"}>TASK TITLE</Button></Th>
                            <Th ><Button  bgColor={"rgb(4,46,94)"}  color={"white"} leftIcon={<PiStudentFill />}>STUDENT NAME</Button></Th>
                            <Th><Button   bgColor={"rgb(4,46,94)"}  color={"white"}  leftIcon={<SiCodereview />}>REVIEW STATUS</Button></Th>
                            <Th><Button   bgColor={"rgb(4,46,94)"}  color={"white"} leftIcon={<GiTeacher />}>REVIEW</Button></Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        {

                            taskData?.map((e) => {
                                return (<Tr>
                                    <Td>{e?.task?.title}</Td>
                                    <Td>{e?.assignedTo?.name}</Td>
                                    <Td>{e.submitStatus ? e.evalStatus ? "Reviewed" : "Not Reviewed Yet" : "Not Submitted"}</Td>
                                    <Td cursor={"pointer"}><NavLink to={`/teacher/task/view/${e?._id}`}><Button rightIcon={<HiOutlineExternalLink/>}>{e.evalStatus ? "Reviewed" : "Click to Review"}</Button></NavLink></Td>
                                </Tr>)
                            })
                        }

                    </Tbody>

                </Table>
            </TableContainer>
        </div>
    )
}

export default TableComponent
