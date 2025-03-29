import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const SelectedPlayers = ({ selectedPlayers, onRemoveSelectedPlayer }) => {
    return (
        <div>
            <h2>Selected Players</h2>
            {selectedPlayers.length === 0 ? (
                <p>No players selected.</p>
            ) : (
                selectedPlayers.map(player => (
                    <div key={player.id} className="card bg-white shadow-md rounded-md p-4 mb-4">
                        <div className="flex items-center">
                            <img src={player.img} alt={player.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                            <div className="text-gray-600">
                                <h3 className="font-semibold">{player.name}</h3>
                                <p >{player.role || 'Position not specified'}</p>
                            </div>
                            <button
                                onClick={() => onRemoveSelectedPlayer(player.id)}
                                className="ml-auto text-red-500 hover:text-red-700"
                            >
                                <FaTrashAlt />
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default SelectedPlayers;