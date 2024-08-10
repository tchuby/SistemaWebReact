import React from "react";
import Header from './Header'

export default function AppMain
        ({icon, title, subtitle, children}){
    return(
        <React.Fragment>
            <Header icon={ icon } title={ title } subtitle={ subtitle }>

            </Header>
            <main className="maincontent"> 
                { children }
            </main>
        </React.Fragment>
    )
}