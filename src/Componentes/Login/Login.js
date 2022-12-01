import react from "react";
import "./Login.css";

function Login() {
    return (

        <form className="form">
            <div className="todoForm">

                <h1>LOGIN</h1>

                <div className="username">
                    <label htmlFor="email">E-mail<label>
                    <input type="email" placeholder="@mail.com" name="email" id="email"></input>
                </div>

                <div className="password">
                    <label htmlFor="password">Password<label>
                    <input type="password" placeholder="passaword" name="password" id="password"></input>
                </div>

                <div className="Lembrar">
                    <div>
                        <input type="checkbox">
                        </input>
                        <p>Lembrar-me</p>
                    </div>
                    <a href="#">Esqueceu a Senha?</a>
                </div>

                <div className="botao">
                    <button>Entrar</button>
                </div>

                <div className="inscreverSe">
                    <p>Não tem uma conta?</p>
                    <a href="#">Inscrever-se</a>
                </div>

                <div className="logarCom">
                    <div><h2>Logar Com</h2></div>
                    <div className="iconesLogarCom">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png"></img>
                        <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png"></img>
                        <img src="https://cdn-icons-png.flaticon.com/512/80/80720.png"></img>
                    </div>
                </div>
            </div>
        </form>

    );
}

export default Login;
