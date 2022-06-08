import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Jean from "./Watch.json"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from './Navbar';



export default class Tablenew extends Component  {

    constructor() {
        super()
        this.state = {
            quatity: "",
            qty: "",
            qty1: ""
        }
    }
    render(){
        let bynow = JSON.parse(localStorage.getItem("Shoes"))
        let bynow1 = JSON.parse(localStorage.getItem("Jean1"))
        let bynow2 = JSON.parse(localStorage.getItem("Watch"))

        let set = this.state.quatity
        let set1 = this.state.qty
        let set2 = this.state.qty1
        const darkTheme = createTheme({
            palette: {
              mode: 'dark',
            },
          });
        return (
            <div style={{ marginTop:"80px" }}>
             
              <TableContainer sx={{ '&:last-child td, &:last-child th': { border: 1 } }} component={Paper}>
      <Table sx={{ Width: 550 ,'&:last-child td, &:last-child th': { border: 1 }}} aria-label="simple table">
        <TableHead>
          <TableRow>
              
            <TableCell sx={{ width: "100px"}} variant="h1" >Product Id</TableCell>
            <TableCell sx={{ width: "100px"}} align="center">Name</TableCell>
            <TableCell sx={{ width: "100px"}} align="center">Price</TableCell>
            <TableCell sx={{ width: "100px"}} align="center">Quantity</TableCell>
            <TableCell sx={{ width: "200px"}} align="center">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bynow.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell sx={{ '&:last-child td, &:last-child th': { border: 0 } }} align="right"> <input type="number" style={{border:"none"}}   onChange={(e) => this.setState({ quatity: e.target.value })} />
</TableCell>
              <TableCell align="center">{set * row.price} {localStorage.setItem("set", set * row.price)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>

        {bynow1.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center"> <input type="number" style={{border:"none"}} onChange={(e) => this.setState({ qty: e.target.value })} />
</TableCell>
              <TableCell align="center">{set1 * row.price} {localStorage.setItem("set1", set1 * row.price)}</TableCell>
            </TableRow>
          ))}

        </TableBody>
        <TableBody>
        {bynow2.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center"> <input type="number" style={{border:"none"}} onChange={(e) => this.setState({ qty1: e.target.value })} />
</TableCell>
              <TableCell align="center">{set2 * row.price} {localStorage.setItem("set2", set2 * row.price)}</TableCell>
            </TableRow>
          ))}

        </TableBody>
        <TableBody  >
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell  align="center"  sx={{ '&:last-child td, &:last-child th': { border: 1 } }}    >Total&nbsp;&nbsp;&nbsp; {(JSON.parse(localStorage.getItem("set")) + (JSON.parse(localStorage.getItem("set1")) + (JSON.parse(localStorage.getItem("set2")))))}</TableCell>
        </TableBody>
      </Table>
    </TableContainer>  
            </div>
    
  );
    }

  
}