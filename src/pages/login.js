import styles from "../styles/Home.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from 'react';
import { login } from '../utils/auth'
import axios from 'axios'
import ApiHelpers from '../helpers/api.helpers';
import Header from "../components/Header";
import { useToasts } from 'react-toast-notifications'

function Login() {
    const router = useRouter()

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [lg, setLg] = useState(false);

    async function handleSubmit(event) {
        setLg(true);
        event.preventDefault();
        try {
            const [err, token] = ApiHelpers.login(email, pass);
            if (err !== null) {
                await login({ token })
            }
        } catch (error) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            )
        } finally {
            setLg(false);
        }
    }

    function onChangeInput(event) {
        console.log(event.target.name, event.target.value)
        switch (event.target.name) {
            case 'email':
                setEmail(event.target.value);
                break;
            case 'pass':
                setPass(event.target.value);
                break;
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main>
                <div className="main-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="login-wrap">
                                    <div className="text-center">
                                        <h4>Login</h4>
                                        <form method="post" onSubmit={handleSubmit}>
                                            <input type="email" required value={email} name="email" onChange={onChangeInput} placeholder="Your email" />
                                            <input type="password" required value={pass} name="pass" onChange={onChangeInput} placeholder="Your password" />
                                            <input type="submit" disabled={lg} value="Login" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login
