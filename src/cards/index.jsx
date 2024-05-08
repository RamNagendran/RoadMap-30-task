import { useContext, useState } from 'react'
import './index.css'
import { userDataProvider } from '../App'
import EditModal from './editModal';
import DeleteModal from './deleteModal';

export default function Cards() {
    const {loaders, userData, onEdit, onDelete, showModal, setShowModal } = useContext(userDataProvider);
    
    const [selectedUser, setSelectedUser] = useState(null);


    return (
        <div style={{height:"100%", overflow:"auto"}} >
            <div className="row" >
                {(!loaders.fetchUser && userData) ? userData.map((items, index) => {
                    return <div key={index} className="col-sm-12 col-md-4 pb-4" >
                        <div className="card-container card p-2 m-1" style={{ height: "380px" }} >
                            <div className="card-title" >
                                <label className="title-label"  ><b>ID:</b></label>
                                <span className="title-content" >{items?.id}</span>
                            </div>
                            <div className="card-title" >
                                <label className="title-label"  ><b>NAME:</b></label>
                                <span className="title-content" >{items?.name}</span>
                            </div>
                            <div className="card-title" >
                                <label className="title-label"  ><b>USERNAME:</b></label>
                                <span className="title-content">{items?.username}</span>
                            </div>
                            <div className="card-title" >
                                <label className="title-label"  ><b>PHONE:</b></label>
                                <span className="title-content">{items?.phone}</span>
                            </div>
                            <div className="card-title" >
                                <label className="title-label"  ><b>EMAIL:</b></label>
                                <span className="title-content">{items?.email}</span>
                            </div>
                            <div className="card-title" >
                                <label className="title-label"  ><b>WEBSITE:</b></label>
                                <span className="title-content">http://{items?.website}</span>
                            </div>
                            <div style={{ height: "0px", width: "100%", borderBottom: "1px solid lightgrey" }} ></div>
                            <div>
                                <div className="card-text d-flex flex-column" >
                                    <label style={{ fontSize: "16px", fontWeight: 800 }} >Address:</label>
                                    <div>
                                        <label className="title-label"  ><b>STREET:</b></label>
                                        <span className="title-content">{items?.address[0]?.street}</span>
                                    </div>
                                    <div>
                                        <label className="title-label"  ><b>CITY:</b></label>
                                        <span className="title-content">{items?.address[0]?.city}</span>
                                    </div>
                                    <div>
                                        <label className="title-label"  ><b>ZIPCODE:</b></label>
                                        <span className="title-content">{items?.address[0]?.zipcode}</span>
                                    </div>
                                </div>
                                <div className="card-title" >
                                    <label className="title-label"  ><b>COMPANY:</b></label>
                                    <span className="title-content">{items?.company}</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between' >
                                <button className='edit-btn' onClick={() => {setShowModal({...showModal, edit: true}); setSelectedUser(items) }} >EDIT</button>
                                <button className='delete-btn' onClick={() => {setShowModal({...showModal, delete: true}); setSelectedUser(items)}}  >DELETE</button>
                            </div>
                        </div>
                    </div>
                }) :
                    <center>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </center>
                }
            </div>
            <EditModal loaders={loaders} onEdit={onEdit} showModal={showModal} setShowModal={setShowModal} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            <DeleteModal loaders={loaders} onDelete={onDelete} showModal={showModal} setShowModal={setShowModal} selectedUser={selectedUser} />
        </div>
    )
}