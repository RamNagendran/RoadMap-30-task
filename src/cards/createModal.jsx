import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



export default function CreateModal({loaders, onCreate, newUserDetails, setNewUserDetails, showModal, setShowModal}) {

    return (
        <div>
            <Modal show={showModal.create} onHide={() => setShowModal({...showModal, create: false})}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input placeholder='Enter name' style={inputFields}
                            onChange={(e) => setNewUserDetails({ ...newUserDetails, name: e.target.value })}
                        />
                        <input placeholder='Enter username'  style={inputFields}
                            onChange={(e) => setNewUserDetails({ ...newUserDetails, username: e.target.value })}
                        />
                        <input placeholder='Enter phone'  style={inputFields}
                            onChange={(e) => setNewUserDetails({ ...newUserDetails, phone: e.target.value })}
                        />
                        <input placeholder='Enter email'  style={inputFields}
                            onChange={(e) => setNewUserDetails({ ...newUserDetails, email: e.target.value })}
                        />
                        <input placeholder='Enter website'  style={inputFields}
                            onChange={(e) => setNewUserDetails({ ...newUserDetails, website: e.target.value })}
                        />
                        <div>
                            <label style={{ fontSize: "16px", fontWeight: 800 }} >Address: </label>
                            <input placeholder='Enter street' style={inputFields}
                                onChange={(e) => setNewUserDetails({
                                    ...newUserDetails,
                                    address: [
                                        {
                                            ...newUserDetails?.address[0],
                                            street: e.target.value
                                        },
                                    ]
                                })}
                            />
                            <input placeholder='Enter city' style={inputFields}
                                onChange={(e) => setNewUserDetails({
                                    ...newUserDetails,
                                    address: [
                                        {
                                            ...newUserDetails.address[0],
                                            city: e.target.value
                                        },
                                    ]
                                })}
                            />
                            <input placeholder='Enter zip code'  style={inputFields}
                                onChange={(e) => setNewUserDetails({
                                    ...newUserDetails,
                                    address: [
                                        {
                                            ...newUserDetails.address[0],
                                            zipcode: e.target.value
                                        },
                                    ]
                                })}
                            />
                            <div>
                                <label style={{ fontSize: "16px", fontWeight: 800 }} >Company: </label>
                                <input placeholder='Enter company'  style={inputFields}
                                    onChange={(e) => setNewUserDetails({ ...newUserDetails, company: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal({...showModal, create: false})}>
                        Close
                    </Button>
                    {(!loaders.createUser) && <Button variant="primary" onClick={onCreate}>
                        Add
                    </Button>}
                    {(loaders.createUser) && <button class="btn btn-primary" type="button" disabled>
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