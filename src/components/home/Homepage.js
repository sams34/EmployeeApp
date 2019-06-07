    import React from 'react';
    import { Link } from 'react-router-dom';

    const Homepage = () => (
            <div className="jumbotron">
                <h1>Employee Administrator</h1>
                <p> Employee Administration </p>
                <Link to="about" className="btn btn-primary btn-lg">Learn about Page</Link>
            </div>
        );

    export default Homepage;