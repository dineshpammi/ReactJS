import React, { useEffect, useState } from 'react'
import './Dashboard.css';
import { getRequest, deleteRequest } from '../../services/axios';
import { urls } from '../../services/urls';
import { TableContainer, Table, TableRow, TableCell, Paper, TableBody, TableHead, Button } from '@mui/material';

export default function Dashboard() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => { getCustomers() }, []) //onInit

    const getCustomers = async () => {
        try {
            let response = await getRequest(urls.dashboard.customers)
            setCustomers(response);
        }
        catch (err) {
            console.log(err);
            alert(err.response?.message);
        }
    }

    const deleteCustomer = async (id) => {
        try {
            let response = await deleteRequest(`${urls.dashboard.customers}/${id}`)
            alert('Customer deleted')
            getCustomers();
        }
        catch (err) {
            console.log(err);
            alert(err.response?.message);
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className="table-header">
                    <TableRow>
                        <TableCell>User Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map((row: any) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.username}
                            </TableCell>
                            <TableCell>{row.phone}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.company?.name}</TableCell>
                            <TableCell>{row.address?.city}</TableCell>
                            <TableCell><Button variant="contained" onClick={() => deleteCustomer(row._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

