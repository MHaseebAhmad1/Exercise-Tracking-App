import React, { useContext } from 'react';
import { Global } from '../App';

function Page() {
    const { myApi, data1, name, id, email, phone, duration, myFunc, myChange, handleDelete, handleEdit } = useContext(Global);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Enter User Data</h2>
                        <form onSubmit={e => {
                            e.preventDefault();
                            myFunc(data1);
                            e.target.reset();
                        }}>
                            <div className="form-group">
                                <label>Id</label>
                                <input ref={id} type="text" name='id' className='form-control' onInput={myChange} />
                                <label>Name</label>
                                <input ref={name} type="text" name='name' className='form-control' onInput={myChange} />
                                <label>Email</label>
                                <input ref={email} type="text" name='email' className='form-control' onInput={myChange} />
                                <label>Phone</label>
                                <input ref={phone} type="text" name='phone' className='form-control' onInput={myChange} />
                                <label>Exercise type</label>
                                <select className='form-control' name="exercise" id="1" onInput={myChange}>
                                    <option value="">___</option>
                                    <option value="Run">Run</option>
                                    <option value="Walk">Walk</option>
                                </select>
                                <label>Date</label>
                                <input type="date" name='date' className='form-control' onInput={myChange} />
                                <label>Duration</label>
                                <input ref={duration} type="text" name='duration' className='form-control' onInput={myChange} />
                                <label>Upload Image</label>
                                <input type="file" name='testImage' onInput={myChange} />
                            </div>
                            <input type="submit" className='btn btn-success' />
                        </form>
                    </div>
                    <div className="col-md-8">
                        <h2>Show User Data</h2>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th colSpan={3}>Exercise</th>
                                    <th>Image</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myApi.map((item, i) => {

                                    const base64String = btoa(new Uint8Array(item.img.data.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));

                                    return (
                                        <tr key={i}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.exercise}</td><td>{item.date}</td><td>{item.duration}</td>
                                            <td><img src={`data:image/png;base64,${base64String}`} alt="imag" style={{ width: "100px", height: "100px" }} /></td>
                                            <td><button className='btn btn-primary' onClick={() => { handleDelete(i, item._id) }}>Del</button><button className='btn btn-success' onClick={() => { handleEdit(i, item._id) }}>Edit</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Exercise type</th>
                                    <th>Date</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myApi.map((item, i) => {
                                    if (item.exercise === "Run") {
                                        return (
                                            <tr key={i}>
                                                <td>{item.exercise}</td><td>{item.date}</td><td>{item.duration}</td>
                                            </tr>
                                        )
                                    }
                                    else{
                                        return(
                                            console.log(item.exercise)
                                        )
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;