import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



export default function DeleteModal({onDelete, showModal, setShowModal, selectedUser, loaders}) {
    return (
        <div>
            <Modal show={showModal.delete} onHide={() => setShowModal({...showModal, delete: false})}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Are you sure you want to delete <span><i><b>{selectedUser?.name}</b></i></span> ?
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal({...showModal, delete: false})}>
                        Close
                    </Button>
                    {(!loaders.deleteUser) && <Button style={{backgroundColor:"brown"}} variant="primary" onClick={() => { onDelete(selectedUser?.id)}}>
                        Confirm
                    </Button>}
                    {(loaders?.deleteUser) && <button class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span class="sr-only">Loading...</span>
                    </button>}
                </Modal.Footer>
            </Modal>
        </div>
    )
}