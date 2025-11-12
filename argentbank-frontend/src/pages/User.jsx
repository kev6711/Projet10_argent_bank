import { useSelector } from "react-redux"
import { useState } from "react"
import "../assets/css/main.min.css"
import EditUserForm from "../components/EditUserForm"
import UserAccounts from "../components/UserAccounts"

function User() {
    const firstName = useSelector((state) => state.userGetReducer.firstName)
    const lastName = useSelector((state) => state.userGetReducer.lastName)
    const [isEditing, setIsEditing] = useState(false)

    return (
        <div>
            <main className="main bg-dark">
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        {firstName} {lastName} !
                    </h1>
                    {isEditing ? (
                        <EditUserForm onCancel={() => setIsEditing(false)} onSubmit={() => setIsEditing(false)} />
                    ) : (
                        <button className="edit-button" onClick={() => setIsEditing(true)}>
                            Edit Name
                        </button>
                    )}
                </div>
                <UserAccounts />
            </main>
        </div>
    )
}

export default User
