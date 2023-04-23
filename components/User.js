const User = ({ user }) => {
    console.log(user);

    return (
        <>
            <ul>
                <li>
                    firstname:{user.name}
                </li>
            </ul>
        </>
    );
}

export default User;