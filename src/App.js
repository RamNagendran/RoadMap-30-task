import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from "react"
import axios from "axios";
import Cards from './cards';
import { userApis } from './apis';
import CreateModal from './cards/createModal';

const modalInitials = {
  edit: false,
  delete: false,
  create: false,
}

const loadersInitials = {
  fetchUser: false,
  editUser: false,
  deleteUser: false,
  createUser: false,
}

const userInitials = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  company: "",
  id: "",
  address: [
    {
      street: "",
      city: "",
      zipcode: "",
      id: "",
      userDetailId: ""
    }
  ]
}



// create new context provider to send data from component to component easily...
export const userDataProvider = createContext();

function App() {
  const [userData, setUserData] = useState(null);
  const [newUserDetails, setNewUserDetails] = useState(userInitials);
  const [showModal, setShowModal] = useState(modalInitials);
  const [loaders, setLoaders] = useState(loadersInitials);

  const fetchUserData = () => {
    try {
      setLoaders({
        ...loaders,
        fetchUser: true
      })
      axios.get(userApis.getUser).then((res) => {
        if (res.data) {
          setUserData(res.data)
          setLoaders({
            ...loaders,
            fetchUser: false
          })
        }
      })
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchUserData()
    // eslint-disable-next-line
  }, [])

  const onEdit = (editedUser) => {
    try {
      setLoaders({
        ...loaders,
        editUser: true
      })
      axios.put(userApis.editUser.replace(":id", editedUser.id), editedUser).then((res) => {
        if (res.data) {
          setUserData(
            userData.map((items) => {
              if (items.id === res.data.id) {
                return res.data
              } else {
                return items
              }
            })
          )
          setLoaders({
            ...loaders,
            editUser: false
          })
          setShowModal({
            ...showModal,
            edit: false
          });
          window.alert("User edited successfully!!")
        }
      })
    } catch (err) {
      console.error(err)
    }
  }

  function onDelete(selectedId) {
    try {
      setLoaders({
        ...loaders,
        deleteUser: true,
      })
      axios.delete(userApis.deleteUser.replace(":id", selectedId)).then((res) => {
        setLoaders({
          ...loaders,
          deleteUser: false
        });
        setShowModal({
          ...showModal,
          delete: false
        });
        window.alert("User deleted successfully!!");
        fetchUserData();
      })
    } catch (err) {
      console.error(err)
    }
  }

  function onCreate() {
    try {
      setLoaders({
        ...loaders,
        createUser: true
      })
      axios.post(userApis.addNewUser, newUserDetails).then((res) => {
        if (res.data) {
          setLoaders({
            ...loaders,
            createUser: false
          })
          setShowModal({
            ...showModal,
            create: false
          });
          window.alert("User added successfully!!")
          fetchUserData()

        }
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <userDataProvider.Provider value={{ userData, onEdit, onDelete, setShowModal, showModal, loaders }} >
      <div className='p-4' style={{ position: "relative", width: "100%", height: "100vh", backgroundColor: "#f6f6f6" }} >
        <Cards />
        <div onClick={() => { setShowModal({ ...showModal, create: true }) }} style={plusIconStyle} >✚</div>
      </div>
      <CreateModal loaders={loaders} showModal={showModal} setShowModal={setShowModal} newUserDetails={newUserDetails} setNewUserDetails={setNewUserDetails} onCreate={onCreate} />
    </userDataProvider.Provider>
  );
}

export default App;

const plusIconStyle = {
  position: "absolute", bottom: 20, right: 20,
  height: "50px", width: "50px",
  border: "none", borderRadius: "50px",
  backgroundColor: "orange",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "35px", color: "#fff",
  cursor: "pointer"
}
