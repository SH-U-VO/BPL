import './App.css';
import Carts from './Components/Carts/Carts';
import Header from './Components/Header/Header';
import React, { useState } from 'react';

function App() {
    const [balance, setBalance] = useState(0);

    const handleClaimCredit = () => {
        console.log(balance)
        setBalance(balance + 1500000);
    };

    return (
        <>
            <Header balance={balance} handleClaimCredit={handleClaimCredit} />
            <Carts initialBalance={balance} updateBalance={setBalance} />
        </>
    );
}

export default App;
