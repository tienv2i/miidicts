import React from 'react';

const Html = (props) => {
    return (
      <html lang='en'>
        <head>
          <title>App</title>
        </head>
        <body>
          <div id="app-root">{props.children}</div>
          <script src={props.bundles['main.js']}></script>
        </body>
      </html>
    );
};

export default Html;