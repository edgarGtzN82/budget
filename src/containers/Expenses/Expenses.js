import React, { useState, useEffect, useContext } from 'react';
import firebase from '../../data/firebase'; 
import 'antd/dist/antd.css';
import { AuthContext } from '../../Auth';
import classes from './Expenses.module.css'
import Title from '../../components/UI/Title/Title'
import ExpensesList from '../../components/ExpensesList/ExpensesList';
import { Button, message } from 'antd';
import {
    PlusOutlined
} from '@ant-design/icons';

import ExpenseCreationForm from '../../components/ExpenseCreateForm/ExpenseCreationForm';
//import MultiSeriesAreaChart from '../../components/CanvasJSChart/CanvasJSChart';

const Expenses = () => {

    const {currentUser} = useContext(AuthContext);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [options, setOptions] = useState([]);
    const [expenseList, setExpenseList] = useState([]);

     useEffect(() => {
        const unsubscribe = firebase.firestore().collection('/users/' + currentUser.uid + '/expenses').orderBy('date').where('date', '>=', '2020-10-01').onSnapshot(snap => {
            const data = snap.docs.map(doc => {
                return (
                    {...doc.data(), key:doc.id}
                )}
                )
            setExpenseList(data)
            console.log(data);
        });
        return () => unsubscribe()
    }, []) 

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('/users/' + currentUser.uid +'/categories').onSnapshot(snap => {
            const data = snap.docs.map(doc => doc.data())
            setCategories(data)
        });
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        setOptions(categories.map(cat => ({
            value: cat.name,
            label: cat.name,
            children: cat.subCats.map(sC => ({ value: sC, label: sC }))
        })));
    }, [categories]);

    const onCreate = (values) => {
        setLoading(true);
        console.log(currentUser.uid);
        const expense = {
        category: values.category[0],
        subCategory: values.category[1],
        date: values.date.format("YYYY/MM/DD"),
        qty: values.qty
        }
        firebase.firestore().collection('/users/' + currentUser.uid +'/expenses').add(expense)
            .then(function (docRef) {
                setLoading(false)
                console.log("Document written with ID: ", docRef.id);
                message.success({
                    content: '¡Gasto Almacenado con éxito!',
                    style: {
                        marginTop: '20vh'
                    },
                });
                setLoading(false);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        console.log('Received values of form: ', values);
        setVisible(false);
    };

    return (
        <>
        <Title text='Gastos' />
        <ExpensesList data={expenseList} />
        <div className={classes.buttonAdd}>
            {/* <input type="date" id="start" name="trip-start"
                value="2020-07-22"
                min="2020-01-01"></input> */}
            {/* <MultiSeriesAreaChart data={expenseList} /> */}
            
            <Button
                shape='circle'
                size='large'
                icon={<PlusOutlined />}
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
            </Button>
            <ExpenseCreationForm
                options={options}
                visible={visible}
                loading={loading}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
        </>
    );
};

export default Expenses;