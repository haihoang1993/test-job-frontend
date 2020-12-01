import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.scss'
import Header from "../components/Header";
import React from "react";

function Home({ }) {
    return (
        <div className="site-wrap">
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main>
                <div className="main-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12"> <h2>Project Test Front-end</h2> </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

Home.getInitialProps = async ({ }) => {
    return {
        test: 'demo'
    }
}

export default Home;