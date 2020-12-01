import styles from "../styles/Home.module.scss";
import Head from "next/head";
import { handleAuthSSR } from '../utils/auth'
import React, { Component } from 'react'
import Header from "../components/Header";

export default class Detail extends Component {
    static async getInitialProps(ctx) {
        // Must validate JWT
        // If the JWT is invalid it must redirect back to the main page.
        // You can do that with Router from 'next/router
        // await handleAuthSSR(ctx)
        return {demo: 'test'}
    }

    render() {
        console.log('prop:', this.props);
        return (
            <div className={styles.container}>
                <Head>
                    <title>Hello Admin</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Header />
                <main>
                    <div className="main-wrap"><div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <h4>Hello <strong>Admin</strong></h4>
                                    <p>Welcome to our service</p>

                                    <div style={{
                                        display: "inline-block",
                                        margin: "auto",
                                        marginTop: '30px',
                                        textAlign: 'left'
                                    }}>
                                        <p><strong>Name: </strong>Admin</p>
                                        <p><strong>Emil: </strong>admin@gmail.com</p>
                                        <p><strong>Address: </strong>this address</p>
                                        <p><strong>Phone: </strong>+1 123 456 789</p>
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
}
