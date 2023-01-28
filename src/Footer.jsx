import React from 'react'

function Footer(){
    const year = new Date().getFullYear()
    return(
        <>
            <footer>
                <span className="footerText">Made by Khushi © {year}</span>
            </footer>
        </>
    )
}
export default Footer