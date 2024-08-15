import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faUser } from '@fortawesome/free-solid-svg-icons';

export default function AppHeader({ icon, title }) {

    const getIcon = (icon) => {
        switch (icon) {
            case 'home':
                return <FontAwesomeIcon icon={faHome} />;
            case 'info':
                return <FontAwesomeIcon icon={faInfo} />;
            case 'user':
                return <FontAwesomeIcon icon={faUser} />;
            default:
                return null;
        }
    };

    return (
        <header className="header">
            <div className="px-3 py-2 border-bottom mb-3">
                <div className="container d-flex flex-wrap">
                    <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="d-flex justify-content-start ">
                        <button type="button" className="btn btn-light text-dark me-2">Login</button>
                        <button type="button" className="btn btn-primary">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
