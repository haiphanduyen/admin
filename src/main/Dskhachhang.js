import React from 'react'
import { Table } from 'antd';

import axios from 'axios';
import { useEffect, useState} from 'react';



const columns = [
  {
    title: 'STT',  
    dataIndex: 'STT',
    key: 'STT',
  },
  {
    title: 'Full Name',  
    dataIndex: 'fullname',
    key: 'name',
  },
  {
    title: 'license',
    dataIndex: 'license',
    key: 'license',

  },
  {
    title: 'mail',
    dataIndex: 'mail',
    key: 'mail',

  },
  {
    title: 'phoneNum',  
    dataIndex: 'phoneNum',
    key: 'phoneNum',
  },
  {
    title: 'birth',  
    dataIndex: 'birth',
    key: 'birth',
  },
  {
    title: 'cmnd',  
    dataIndex: 'cmnd',
    key: 'cmnd',
  },

  {
    title: 'password',  
    dataIndex: 'password',
    key: 'password',
  },
];


export default function Dskhachhang() {
  const [listuser,getuser]=useState({
    users:[],
  })
  useEffect(()=>{
    try {
      axios.get("https://mighty-meadow-74982.herokuapp.com/customer")
        .then(res=>{
          console.log(res.data.data)
          getuser({
            cars:res.data.data
          })
        })
    } catch (error) {
      console.log(error)
    }
  },[])  
  return (
        <Table columns={columns} dataSource={listuser.users} />
    )
}
