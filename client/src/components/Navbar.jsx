import React from 'react';

const Navbar = () => {
    return (
        <div className='pb-5'>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-gradient px-4 bg-opacity-100 bg-black border-bottom border-2 border-primary">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">asdf</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Features</a>
                    <a className="nav-item nav-link" href="#">Pricing</a>
                    <a className="nav-item nav-link disabled" href="#">Disabled</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
