import { useSelector } from "react-redux"
import { useState } from "react"
import "../assets/css/main.min.css"
import EditUserForm from "../components/EditUserForm"
import UserAccount from "../components/UserAccounts"

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
                <div className="accounts">
                    <h2 className="sr-only">Accounts</h2>
                    <UserAccount
                        title="Argent Bank Checking (x8349)"
                        amount="$2,082.79"
                        description="Available Balance"></UserAccount>
                    <UserAccount
                        title="Argent Bank Savings (x6712)"
                        amount="$10,928.42"
                        description="Available Balance"></UserAccount>
                    <UserAccount
                        title="Argent Bank Credit Card (x8349)"
                        amount="$184.30"
                        description="Current Balance"></UserAccount>
                </div>
            </main>
        </div>
    )
}

export default User
