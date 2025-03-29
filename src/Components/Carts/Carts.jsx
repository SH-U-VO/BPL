import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import { ToastContainer, toast } from 'react-toastify';


const Carts = ({ initialBalance, updateBalance }) => {
    const [players, setPlayers] = useState([]); // Initialize as an empty array
    const [selectedButton, setSelectedButton] = useState('available');
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(players => {
                console.log("Fetched players:", players); // Inspect the data
                setPlayers(players);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleSelectPlayer = (player) => {
        const notify = () => toast("Wow so easy!");
        console.log(selectedPlayers);
        if (selectedPlayers.find(selected => selected.id === player.id)) {
            alert("This player is already selected!");
            return;
        }

        if (initialBalance < player.price) {
            // alert("Insufficient funds!");
            notify ();
            <ToastContainer />;
            return;
        }

        setSelectedPlayers([...selectedPlayers, player]);
        updateBalance(initialBalance - player.price);
    };

    const handleRemoveSelectedPlayer = (playerId) => {
        const removedPlayer = selectedPlayers.find(player => player.id === playerId);
        if (removedPlayer) {
            updateBalance(initialBalance + removedPlayer.price);
        }
        const updatedPlayers = selectedPlayers.filter(player => player.id !== playerId);
        setSelectedPlayers(updatedPlayers);
    };

    return (
        <div className='md:container mx-auto'>
            <div className="navbar text-black">
                <div className="navbar-start font-bold text-2xl w-1/2">
                    <h1>{selectedButton === 'available' ? 'Available Players' : 'Selected Players'}</h1>
                </div>
                <div className="navbar-end">
                    <button
                        className={`btn text-black border-none w-1/2 ${selectedButton === 'available' ? 'bg-[#E7FE29]' : 'bg-white'}`}
                        onClick={() => handleClick('available')}
                    >
                        Available
                    </button>
                    <button
                        className={`btn text-black border-none w-1/2 ${selectedButton === 'selected' ? 'bg-[#E7FE29]' : 'bg-white'}`}
                        onClick={() => handleClick('selected')}
                    >
                        Selected
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3">
                {selectedButton === 'available' ? (
                    players.map(player => (
                        <Cart
                            key={player.id}
                            player={player}
                            onSelect={handleSelectPlayer}
                        />
                    ))
                ) : (
                    <SelectedPlayers
                        selectedPlayers={selectedPlayers}
                        onRemoveSelectedPlayer={handleRemoveSelectedPlayer}
                    />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Carts;