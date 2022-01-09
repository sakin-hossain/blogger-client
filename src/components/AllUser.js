import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../hooks/useAuth';
import Header from './Header';


const AllUser = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [displayUsers, setDisplayUsers] = useState([]);
    const [size, setSize] = useState(3);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [isChange, setIsChange] = useState(1);
    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://serene-garden-66797.herokuapp.com/users?page=${page}&&size=${size}`)
        .then(res=> res.json())
        .then(data => {
            setUsers(data.result)
            setDisplayUsers(data.result)
            const count = parseInt(data.count);
            const pageNumber = Math.ceil(count/parseInt(size));
            setPageCount(pageNumber);
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [user, page, size, isChange]);
    const handleSearchChange = (e) => {
        const search = e.target.value;

        const matchUser = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()));
        setDisplayUsers(matchUser);
    }
    const handleNameDesOrder = () => {
        const DesOrder = users.sort((a, b) =>{
            let na = a.name.toLowerCase()
            let nb = b.name.toLowerCase()

            if(na > nb){
                return -1
            }
            if(na < nb){
                return 1
            }
            return 0;
        })
        setDisplayUsers(DesOrder);
        setIsChange(2)
        console.log(displayUsers);
    }
    const handleNameAesOrder = () =>{
        const AesOrder = users.sort((a, b) =>{
            let na = a.name.toLowerCase()
            let nb = b.name.toLowerCase()

            if(na < nb){
                return -1
            }
            if(na > nb){
                return 1
            }
            return 0;
        })
        setDisplayUsers(AesOrder);
        setIsChange(3);
        console.log(displayUsers);
    }
    const handleEmailAesOrder = () =>{
        const AesOrder = users.sort((a, b) =>{
            let ea = a.email.toLowerCase()
            let eb = b.email.toLowerCase()

            if(ea < eb){
                return -1
            }
            if(ea > eb){
                return 1
            }
            return 0;
        })
        setDisplayUsers(AesOrder);
        setIsChange(4);
        console.log(displayUsers);
    }
    const handleEmailDesOrder = () =>{
        const DesOrder = users.sort((a, b) =>{
            let ea = a.email.toLowerCase()
            let eb = b.email.toLowerCase()

            if(ea > eb){
                return -1
            }
            if(ea < eb){
                return 1
            }
            return 0;
        })
        setDisplayUsers(DesOrder);
        setIsChange(5);
        console.log(displayUsers);
    }
    return (
        <div>
            <Header/>
            <Content>
                <input type="text" onChange={handleSearchChange} placeholder='Search by Name, Email'  />
                <button onClick={handleNameAesOrder}>Sort Name in ASC order</button>
                <button onClick={handleNameDesOrder}>Sort Name in DSC order</button>
                <button onClick={handleEmailAesOrder}>Sort Email in ASC order</button>
                <button onClick={handleEmailDesOrder}>Sort Email in DSC order</button>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }}>
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Websites</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                isLoading &&
                                <TableRow>
                                    <TableCell>
                                        <Box sx={{ display: 'flex' }}>
                                            <CircularProgress />
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            }
                        {displayUsers.map((row) => (
                            <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>
                                <Link to={`/users/${row._id}`}>View Profile</Link>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <input type="number" onChange={(e) => setSize(e.target.value)} placeholder='User per page'/>
                <div>
                        {
                            [...Array(pageCount).keys()].map(number => 
                                <button
                                key={number}
                                onClick={()=>setPage(number)}
                                >{number}</button>
                                )
                        }
                </div>
            </Content>
        </div>
    );
};
const Content = styled.div`
    position: relative;
    top: 70px;
    text-align: center;
    input, button{
        padding: 10px 24px;
        border-radius: 4px;
        border: 1.5px solid rgba(0,0,0,0.5);
        margin: 10px;
        font-weight: 600;
    }
    a{
        text-decoration: none;
        color: black;
        font-weight: 700;
    }
`;

export default AllUser;