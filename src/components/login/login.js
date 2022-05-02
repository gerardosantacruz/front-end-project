import './login.css';

function Login(props){
    function handleSubmit(){

        const options= {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonData)
        }

        fetch('https://jsonplaceholder.typicode.com/users/2', options)
        .then(response => response.json())
        .then(json => {
           console.log(json); 
        });
    }

    return(
        <div className="login">
            <div className="login-header">
                <div className="login-header-logo">
                    <div>
                        <label>Username</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"></input>
                    </div>
                    <div>
                        <button onClick={console.log('Llamada a donde...')}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;