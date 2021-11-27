import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './ManageServices.css';


const ManageService = () => {
    const { user } = useAuth();
   




    const [services, setServices] = useState([]);
    //console.log(products);
    useEffect(() => {
        fetch('https://enigmatic-falls-89826.herokuapp.com/addOrder')
            .then(response => response.json())
            .then(data => {
                setServices(data);
                //console.log(data);
            })
    }, [])

    return (
      




        <div className="container p-3 text-center">
            <br />
            <br />


            <h1 className="mt-3 mb-3 text-left">Manage All Services</h1>
            {
                services.length === 0 &&
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden"></span>
                </div>
            }
            <table className="table productTable">
                <thead>
                    <tr className="bg-primary">
                        <th>Drone Model</th>

                        <th>Price</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(pd =>

                        <tr>
                            <td>{pd.name}</td>

                            <td>${pd.price}</td>

                            <td><button className="btn btn-success">Edit</button> <button className="btn btn-danger" >Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>






    );
};

export default ManageService;