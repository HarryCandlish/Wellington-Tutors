import React from 'react'

import Home from './Home'

const Profile = () => {
    return (
        <div>
            <div>
                <h1>Profile</h1>
            </div>
            <div>
                <form>
                    <input type = "text" placeholder = "Add Book"/>  
                    <button>Submit</button>
                </form>
            </div>
            <div>
                 <p><a href='./#'>Home</a></p>  
            </div>
        </div>
    )
}

export default Profile 