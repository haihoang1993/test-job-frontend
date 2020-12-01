import styles from "../styles/Home.module.scss";
import regStyles from "../styles/register.module.scss";
import Head from "next/head";
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Header from "../components/Header";
import ApiHelpers from '../helpers/api.helpers';

function Register() {
    const router = useRouter()
    const passRef = React.createRef();
    const rpPassRef = React.createRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rp_pass, setRpPass] = useState('');
    const [reg, setReg] = useState(false);

    function validatePassword() {
        if (pass !== rp_pass) {
            rpPassRef.current.setCustomValidity("Passwords Don't Match");
        } else {
            rpPassRef.current.setCustomValidity('');
        }
    }

    function handleSubmit(event) {
        console.log(passRef.current.value !== rpPassRef.current.value, passRef.current.value, rpPassRef.current.value, name, email, pass, rp_pass)
        validatePassword();
        if (pass === rp_pass) {
            
        }
        setReg(true)
        setTimeout(function () {
            setReg(false)
            alert('Register success! Goto login now..')
            router.push('/login')
        }, 2000)
        event.preventDefault();
    }

    function onChangeInput(event) {
        console.log(event.target.name, event.target.value)
        switch (event.target.name) {
            case 'name':
                setName(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'pass':
                setPass(event.target.value);
                validatePassword();
                break;
            case 'rp_pass':
                setRpPass(event.target.value);
                validatePassword();
                break;
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="main-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="register-wrap">
                                    <div className="text-center">
                                        <h4>Register</h4>
                                        <form method="post" onSubmit={handleSubmit}>
                                            <input type="text" required value={name} name="name" onChange={onChangeInput} placeholder="Your name" />
                                            <input type="email" required value={email} name="email" onChange={onChangeInput} placeholder="Your email" />
                                            <input type="password" required ref={passRef} value={pass} name="pass" onChange={onChangeInput} placeholder="Your password" />
                                            <input type="password" required ref={rpPassRef} value={rp_pass} name="rp_pass" onKeyUp={validatePassword} onChange={onChangeInput} placeholder="Confirm password" />
                                            <input type="submit" disabled={reg} value="Register" />
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

export default Register
