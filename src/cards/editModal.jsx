import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



export default function EditModal({loaders, onEdit, showModal, setShowModal, selectedUser, setSelectedUser }) {

    return (
        <div>
            <Modal show={showModal.edit} onHide={() => setShowModal({...showModal, edit: false})}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input placeholder='Enter name' value={selectedUser?.name} style={inputFields}
                            onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                        />
                        <input placeholder='Enter username' value={selectedUser?.username} style={inputFields}
                            onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })}
                        />
                        <input placeholder='Enter phone' value={selectedUser?.phone} style={inputFields}
                            onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })}
                        />
                        <input placeholder='Enter email' value={selectedUser?.email} style={inputFields}
                            onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                        />
                        <input placeholder='Enter website' value={selectedUser?.website} style={inputFields}
                            onChange={(e) => setSelectedUser({ ...selectedUser, website: e.target.value })}
                        />
                        <div>
                            <label style={{ fontSize: "16px", fontWeight: 800 }} >Address: </label>
                            <input placeholder='Enter street' value={selectedUser?.address[0].street} style={inputFields}
                                onChange={(e) => setSelectedUser({
                                    ...selectedUser,
                                    address: [
                                        {
                                            ...selectedUser.address[0],
                                            street: e.target.value
                                        },
                                    ]
                                })}
                            />
                            <input placeholder='Enter city' value={selectedUser?.address[0].city} style={inputFields}
                                onChange={(e) => setSelectedUser({
                                    ...selectedUser,
                                    address: [
                                        {
                                            ...selectedUser.address[0],
                                            city: e.target.value
                                        },
                                    ]
                                })}
                            />
                            <input placeholder='Enter zip code' value={selectedUser?.address[0].zipcode} style={inputFields}
                                onChange={(e) => setSelectedUser({
                                    ...selectedUser,
                                    address: [
                                        {
                                            ...selectedUser.address[0],
                                            zipcode: e.target.value
                                        },
                                    ]
                                })}
                            />
                            <div>
                                <label style={{ fontSize: "16px", fontWeight: 800 }} >Company: </label>
                                <input placeholder='Enter company' value={selectedUser?.company} style={inputFields}
                                    onChange={(e) => setSelectedUser({ ...selectedUser, company: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal({...showModal, edit: false})}>
                        Close
                    </Button>
                    {(!loaders.editUser) && <Button variant="primary" onClick={() => { onEdit(selectedUser) }}>
                        Confirm
                    </Button>}
                    {(loaders.editUser) && <button class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span class="sr-only">Loading...</span>
                    </button>}
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const inputFields = {
    marginBottom: "10px",
    border: "1px solid lightgrey",
    borderRadius: "8px",
    height: "35px",
    outline: "none",
    padding: "5px",
    width: "100%"
}