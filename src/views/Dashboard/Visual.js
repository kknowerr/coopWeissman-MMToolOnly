import React, { useState } from 'react'
import UserProfile from 'views/UserProfile/UserProfile'

function Visual() {
    const [interest, setInterest] = useState();
    const [amount, setAmount] = useState();
    const [age, setAge] = useState();
    const [income, setIncome] = useState();
    const [expenses, setExpenses] = useState();
    const [retirement, setRetirement] = useState();
    const [savings, setSavings] = useState();
    const [final, setFinal] = useState();



    return (
        <div >
        <UserProfile interest={interest} setInterest={setInterest} amount={amount} age={age} income={income} expenses={expenses} retirment={retirement} savings={savings} final={final}/>
        </div>
    )
}

export default Visual
