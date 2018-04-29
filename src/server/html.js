import React from 'react';
const Html = (props) => {
  return (
    <html>
      <head></head>
      <body>
        <div id='app-root'>{props.children}</div>
        <script src={props.bundles['main.js']}></script>
      </body>
    </html>
  );
}
export default Html;