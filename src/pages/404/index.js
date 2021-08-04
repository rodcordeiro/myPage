import React from 'react';

import './style.css';

export default function ErrorPage({ location }){
    return (
        <div className="mainContent">
            <h1>
                Error Loading Page
            </h1>
            <code><pre>
                &lt;<br/>
                path: {location.pathname},<br/>
                error: NotFound<br/>
                &gt;
            </pre></code>
	    </div>
    );
}
