import React from 'react';

const Row = ({toy, index}) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{toy.seller}</td>
            <td>{toy.name}</td>
            <td>{toy.category}</td>
            <td>{toy.price}</td>
            <td>{toy.quantity}</td>

            <td><button className='btn btn-sm btn-warning'>Details</button></td>
        </tr>
    );
};

export default Row;