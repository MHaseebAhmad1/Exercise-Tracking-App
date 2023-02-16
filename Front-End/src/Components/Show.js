import React, { useContext } from 'react';
import { Global } from '../App';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

function Show() {
    const { myApi, handleDelete, handleEdit, data1, myFunc, myChange } = useContext(Global);

    return (
        <div>
            <Header />
            <div id='sec1'>
                <h2 className='text-center p-5' style={{ fontWeight: "bold", fontSize: "30px", textShadow: "2px 2px yellow" }}>Show User Data</h2>
                <div className="container">
                    <div className="row">
                        {myApi.map((item, i) => {

                            const base64String = btoa(new Uint8Array(item.img.data.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));

                            return (
                                <div className="col-md-4 overflow-auto mb-5" style={{ height: "513px" }} key={i}>
                                    <div className="card">
                                        <img src={`data:image/png;base64,${base64String}`} alt="imag" style={{ height: "300px" }} className="img-fluid img-responsive" />
                                        <div className="card-body bg-dark text-white">
                                            <h6>Name : {item.name}</h6>
                                            <h6>Description : {item.email}</h6>
                                            <h6>Exercise : {item.exercise}</h6>
                                            <h6>Date : {item.date}</h6>
                                            <h6>Duration : {item.duration}</h6>
                                            <h6>Update :
                                                <button className='btn btn-primary' onClick={() => { handleDelete(item._id) }}>Del</button>
                                                <button className='btn btn-success' onClick={() => { handleEdit(i, item._id) }} data-toggle="modal" data-target="#exampleModal">Edit</button></h6>
                                        </div>
                                        <div>
                                            <div>
                                                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">Enter User Data</h5>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
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
                                                                        <input type="submit" className='btn btn-success' />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Show