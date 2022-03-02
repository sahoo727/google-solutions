import React from 'react'
import Table from './provider/Table'
import Form from './provider/Todav'
import './provider/Styles_Provider.css'
import './provider/Table_Pro.css'
export default function provider() {
  return (
    <div>
        <Table/>
        <Form/>
    </div>
  )
}
