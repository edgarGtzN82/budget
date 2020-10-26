import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';

const ExpensesList  = (props) => {
    const { Column } = Table;
    
    return (
        <Table 
            size='small'
            fixed='left'
            pagination={{ pageSize: 8, position: ["bottomCenter"]}}
            dataSource={props.data}>
            <Column title="Categorìa" dataIndex="category" key="category" />
            <Column title="Sub Categoria" dataIndex="subCategory" key="subCategory" />
            <Column title="Cantidad" dataIndex="qty" key="qty" />
            <Column title="Fecha" dataIndex="date" key="date" />
        </Table>
    );
}


export default ExpensesList;