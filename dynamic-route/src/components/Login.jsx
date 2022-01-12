export const Login = () => {
    return <>
        <h2>Login</h2>
        <label style={{margin:"29px"}}>Email:</label>
        <input type="text" name="email" placeholder="Enetr your Email" />
        <br />
        <label style={{margin:"15px"}}>Password:</label>
        <input type="password" name="password" placeholder="password your Email" />
        <br />
        <button>Submit</button>
    </>
}