import React from "react";
//import Slider from '@material-ui/core/Slider';

export default function Datatable({data}){
    
    const columns = data[0] && Object.keys(data[0]);
    return <table className="tabledata">
        <thead>
            <tr>{data[0]&& columns.map(heading => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
            {data.map(row => <tr>
                { 
                    columns.map(column => <td>{row[column]}</td>)
                }
            </tr>)}
        </tbody>
    </table>
}