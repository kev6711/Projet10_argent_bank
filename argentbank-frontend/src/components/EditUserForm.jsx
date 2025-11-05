import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { usernamePut } from "../actions/usernamePut.action"

function EditUserForm({ onSubmit, onCancel }) {
    const userName = useSelector((state) => state.userGetReducer.userName)
    const firstName = useSelector((state) => state.userGetReducer.firstName)
    const lastName = useSelector((state) => state.userGetReducer.lastName)
    const token = useSelector((state) => state.logInPostReducer?.body?.token)
    const [editUserName, setEditUsername] = useState({ userName })
    const dispatch = useDispatch()

    const handleEditUserForm = (e) => {
        e.preventDefault()
        const postUsername = {
            userName: editUserName,
        }
        dispatch(usernamePut(token, postUsername))
        onSubmit()
    }

    return (
        <form className="edit-user-form" onSubmit={(e) => handleEditUserForm(e)}>
            <div className="input-wrapper-user-form">
                <label htmlFor="username">User name:</label>
                <input
                    type="text"
                    id="username"
                    autoFocus={true}
                    defaultValue={userName}
                    onChange={(e) => setEditUsername(e.target.value)}
                />
            </div>
            <div className="input-wrapper-user-form">
                <label htmlFor="firstname">First name:</label>
                <input type="text" id="firstname" defaultValue={firstName} disabled />
            </div>
            <div className="input-wrapper-user-form">
                <label htmlFor="lastname">Last name:</label>
                <input type="text" id="lastname" defaultValue={lastName} disabled />
            </div>
            <div className="button-wrapper-user-form">
                <button type="submit" className="save-button">
                    Save
                </button>
                <button type="button" className="cancel-button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default EditUserForm
