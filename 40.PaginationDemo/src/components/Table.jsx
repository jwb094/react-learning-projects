


function Table(props) {
    //  console.log(props);
    return <>
        <table className="table text-center">
            <thead>
                <tr>
                    <th className="p-3">id</th>
                    <th className="p-3">First Name</th>
                    <th className="p-3">Last Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Sign Up</th>
                    <th className="p-3">D.O.B</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.sign_up}</td>
                        <td>{user.dob}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}


export default Table;