import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Question Answer</h2>
            <hr />
            <div>
                <h1>What is The Purpose of React Router?</h1>
                <h2>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application,<br></br> allows changing the browser URL, and keeps the UI in sync with the URL</h2>
            </div><br></br>
            <div>
                 <h1>How Does Context Api Work?</h1>
                <h2>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative<br></br> to "prop drilling" or moving props from grandparent to child to parent, and so on.</h2>
            </div>
        </div>
        
    );
};

export default Blog;