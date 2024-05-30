function Footer() {
    return (
        <>
            <div className="main-content" id="footer">
                <div className="container-fluid">

                    <footer className="footer">
                        <div className="row align-items-center justify-content-lg-between">
                            <div className="col-lg-6">
                                <div className="copyright text-center  text-lg-left  text-muted">
                                    &copy; {new Date().getFullYear()} <a href="www.linkedin.com/in/larissarafanny" className="font-weight-bold text-primary ml-1" target="_blank">Larissa Martins </a>
                                     - Todos os direitos reservados.
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                    <li className="nav-item">
                                        <a href="https://www.instagram.com/larissarafanny/" className="nav-link" target="_blank" rel="noreferrer">Instagram</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="www.linkedin.com/in/larissarafanny" className="nav-link" target="_blank" rel="noreferrer">LinkedIn</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://github.com/LarissaRafanny" className="nav-link" target="_blank" rel="noreferrer">GitHub</a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer;