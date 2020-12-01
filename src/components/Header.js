import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from "react";

function Header() {
    const router = useRouter()

    const [show, setShow] = useState(false);
    console.log(router.pathname)
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">LOGO</a>
                <button onClick={()=>{
                    setShow(!show)
                }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className={"collapse navbar-collapse justify-content-end "+ (show?' show ':'')} id="navbarSupportedContent">
                  <ul className="navbar-nav justify-content-center">
                    <li className={"nav-item"}>
                      <Link href="/">
                        <a className={'nav-link ' + (router.pathname === '/' ? 'active' : '')}>Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/register">
                        <a className={'nav-link ' + (router.pathname === '/register' ? 'active' : '')}>Register</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/login">
                        <a className={'nav-link ' + (router.pathname === '/login' ? 'active' : '')}>Login</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/detail">
                        <a className={'nav-link ' + (router.pathname === '/detail' ? 'active' : '')}>Detail</a>
                      </Link>
                    </li>
                  </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
