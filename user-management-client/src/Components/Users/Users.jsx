import React, { use } from 'react';

const Users = ({ usersPromise }) => {

    const datas = use(usersPromise);

    const [users, setUsers] = React.useState(datas);

    const handleAddUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };

        // Send the user data to the server
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                console.log('User added:', data);
                // Optionally, you can refresh the user list or update the state here
                const updatedUsers = [...users, data];
                setUsers(updatedUsers);
            })
            .catch(error => {
                console.error('Error adding user:', error);
            });
    }

    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder="Name" /><br />
                <input type="email" name='email' placeholder="Email" /><br />
                <button type="submit">Add User</button>
            </form>



            <div>
                {
                    users.map((user) => {
                        return (
                            <div key={user.id}>
                                <p>{user.name}: {user.email}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Users;