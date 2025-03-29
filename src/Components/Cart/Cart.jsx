import React from 'react';
import { GrUserManager } from "react-icons/gr";
import { RiFlag2Fill } from "react-icons/ri";

const Cart = ({ player, onSelect }) => {
    if (!player) {
        return <div>Error: No player data available.</div>; // Or a more graceful fallback
    }

    const { name, country, role, batting_hand, bowling_hand, price, rating, img } = player;

    return (
        <div className="my-15">
            {/* cart section */}
            <div className="card w-96 bg-white shadow-xl text-black mx-auto">
                <figure className="px-5 pt-5">
                    <img src={img} alt={name} className="rounded-xl w-full h-56 overflow-hidden object-cover" />
                </figure>
                <div className="card-body">
                    <div className="flex items-center space-x-2 mb-2">
                        <GrUserManager />
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        <RiFlag2Fill />
                        <p>{country}</p>
                        <div className="badge badge-outline">{role}</div>
                    </div>
                    <div className="py-4">
                        <h3 className="font-semibold">Rating : {rating}</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <div>{batting_hand}</div>
                            <div className="text-right">{bowling_hand}</div>
                        </div>
                    </div>
                    <div className="card-actions justify-between items-center mt-4">
                        <div className="font-semibold">Price : $ {price}</div>
                        <button className="btn bg-white text-black font-bold" onClick={() => onSelect(player)}>
                            Choose Player
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;