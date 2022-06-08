import { TableContainer } from '@mui/material'
import React, { Component } from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Jean from "./Watch.json"

export default class Table extends Component {
    constructor() {
        super()
        this.state = {
            quatity: "",
            qty: "",
            qty1: ""
        }
    }




    render() {
        let bynow = JSON.parse(localStorage.getItem("Shoes"))
        let bynow1 = JSON.parse(localStorage.getItem("Jean1"))
        let bynow2 = JSON.parse(localStorage.getItem("Watch"))

        let set = this.state.quatity
        let set1 = this.state.qty
        let set2 = this.state.qty1
        return (
            <div >

                <h1>
                    Table Billing App
                </h1>
               
                <tbody >
                    <table  >

                       
                        <thead style={{ border: "2px solid" }}>
                            <tr>

                                <th scope="col" style={{ border: "2px solid" }}>Product Id</th>

                                <th scope="col" style={{ border: "2px solid" }}> Name</th>

                                <th scope="col" style={{ border: "2px solid" }}>Price</th>

                                <th scope="col" style={{ border: "2px solid" }}>Quantity</th>

                                <th scope="col" style={{ border: "2px solid" }}>{ }SubTotal</th>
                            </tr>



                        </thead>

                        <tbody >

                            {

                                bynow.map((x) => (

                                    <div>
                                        <table class="table">
                                            <tbody>
                                                <tr>

                                                    <td style={{ border: "2px solid" }}> {x.id}</td>
                                                    <td style={{ border: "2px solid" }}> {x.title}</td>
                                                    <td style={{ border: "2px solid" }}   >{x.price}

                                                    </td>
                                                    <td style={{ border: "2px solid" }} >
                                                        <input type="number" onChange={(e) => this.setState({ quatity: e.target.value })} />
                                                    </td>
                                                    <td style={{ border: "2px solid" }} > {set * x.price} {localStorage.setItem("set", set * x.price)}

                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>


                                    </div>
                                )
                                )}
                        </tbody>


                  







                    <tbody>
                        {
                            bynow1.map((x) => {
                                return (
                                    <div>
                                        <table class="table">



                                            <tbody>
                                                <tr>

                                                    <td style={{ border: "2px solid" }}> {x.id}</td>
                                                    <td style={{ border: "2px solid" }}> {x.title}</td>
                                                    <td style={{ border: "2px solid" }}   >{x.price}

                                                    </td>
                                                    <td style={{ border: "2px solid" }} >
                                                        <input type="number" onChange={(e) => this.setState({ qty: e.target.value })} />
                                                    </td>
                                                    <td style={{ border: "2px solid" }} > {set1 * x.price} {localStorage.setItem("set1", set1 * x.price)}

                                                    </td>

                                                </tr>

                                            </tbody>
                                           

                                        </table>
                                    </div>
                                )
                            })
                        }
                        <tbody>
                            {
                                bynow2.map((x) => {
                                    return (
                                        <div>
                                          

                                                <tr>

                                                    <td style={{ border: "2px solid" }}> {x.id}</td>
                                                    <td style={{ border: "2px solid" }}> {x.title}</td>
                                                    <td style={{ border: "2px solid" }}   >{x.price}

                                                    </td>
                                                    <td style={{ border: "2px solid" }} >
                                                        <input type="number" onChange={(e) => this.setState({ qty1: e.target.value })} />
                                                    </td>
                                                    <td style={{ border: "2px solid" }} > {set2 * x.price}  {localStorage.setItem("set2", set2 * x.price)}

                                                    </td>

                                                </tr>




                                       
                                        </div>
                                    )
                                })
                            }
                        </tbody>

                  
                        <tr>
                            <td style={{ border: "2px solid" }} > Total {(JSON.parse(localStorage.getItem("set")) + (JSON.parse(localStorage.getItem("set1")) + (JSON.parse(localStorage.getItem("set2")))))}

                            </td>

                        </tr>
                    </tbody>
                    </table>

                    

                </tbody>






            </div >
        )
    }
}
