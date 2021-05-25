/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Table, /* Tag */ /* Space */ } from 'antd';

import axios from 'axios';
import { useEffect, useState} from 'react';




const columns = [
  {
    title: 'STT',  
    dataIndex: 'STT',
    key: 'STT',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Name',  
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Caterogy',
    dataIndex: 'idCategory',
    key: 'idCategory',
    render: text => <a>{text}</a>,

  },
  {
    title: 'CarCompany',
    dataIndex: 'carCompany',
    key: 'carCompany',
    render: text => <a>{text}</a>,

  },
  {
    title: 'Quantity',  
    dataIndex: 'quantity',
    key: 'quantity',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Price',  
    dataIndex: 'price',
    key: 'price',
    render: text => <a>{text}</a>,
  },
];


export default function Dsxe() {
  const [listcar,getlistcar]=useState({
    cars:[],
  })
  useEffect(()=>{
    try {
      axios.get("https://mighty-meadow-74982.herokuapp.com/vehicle")
        .then(res=>{
          console.log(res.data.data)
          getlistcar({
            cars:res.data.data
          })
        })
    } catch (error) {
      console.log(error)
    }
  },[])  
  return (
        <Table columns={columns} dataSource={listcar.cars} />
    )
}
