const User = ({ user }) => {
    console.log(user);

    return (
        <>
            <ul>
                <li>
                    name: {user.name}
                </li>
            </ul>
        </>
    );
}

export default User;