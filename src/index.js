import React from 'react';
import ReactDOM from 'react-dom';

export default function SimpleComponent() {
    return <div> Hello Component</div>;
}

ReactDOM.render(<SimpleComponent/>, document.getElementById('root'));