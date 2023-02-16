import React, { useContext } from 'react';
import { Global } from '../App';
import Header from './Header';
import Footer from './Footer';

function Add() {
    const { data1, myFunc, myChange } = useContext(Global);

    return (
        <>
            <Header />
            <div className='bg-dark'>
                <center>
                    <div className="col-md-12 text-white p-4" style={{ width: "50%" }}>
                        <h2>Enter User Data</h2>
                        <form onSubmit={e => {
                            e.preventDefault();
                            myFunc(data1);
                            e.target.reset();
                        }}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name='name' className='form-control' onInput={myChange} />
                                <label>Description</label>
                                <input type="text" name='email' className='form-control' onInput={myChange} />
                                <label>Exercise type</label>
                                <select className='form-control' name="exercise" id="1" onInput={myChange}>
                                    <option value="">___Select___</option>
                                    <option value="Playing Football">Playing Football</option>
                                    <option value="Yoga">Yoga</option>
                                    <option value="Weight Lifting">Weight Lifting</option>
                                    <option value="Running">Running</option>
                                    <option value="Swimming">Swimming</option>
                                    <option value="Hiking">Hiking</option>
                                </select>
                                <label>Date</label>
                                <input type="date" name='date' className='form-control' onInput={myChange} />
                                <label>Duration</label>
                                <input type="text" name='duration' className='form-control' onInput={myChange} />
                                <label className='p-4'>Upload Image</label>
                                <input type="file" name='testImage' onInput={myChange} />
                            </div>
                            <input type="submit" className='btn btn-success' />
                        </form>
                    </div>
                </center>
            </div>
            <Footer />
        </>
    )
}

export default Add