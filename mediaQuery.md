# Media Query
    It is used commonly to apply specific styles as per the device size(Responsivenes).
    Using media queries are a popular technique for delivering a tailored style sheet to desktops, laptops, tablets, and mobile phones

Media queries can be used to check many things, such as:

    1.width and height of the viewport
    2.width and height of the device
    3.orientation (is the tablet/phone in landscape or portrait mode?)
    4.resolution

# Media Query Syntax
A media query consists of a media type and can contain one or more expressions, which resolve to either true or false
    @media not|only mediatype and (expressions) {
      CSS-Code;
    }

    The result of the query is true if the specified media type matches the type of device the document is being displayed on and all expressions in the media query are true. When a media query is true, the corresponding style sheet or style rules are applied


# Media Types
    1.all --	Used for all media type devices
    2.print --	Used for printers
    3.screen --	Used for computer screens, tablets, smart-phones etc.
    4.speech --	Used for screenreaders that "reads" the page out loud


# Example

    <!DOCTYPE html>
    <html>
    <head>
    <style>
    body {
      background-color: pink;
    }
    
    @media screen and (min-width: 480px) {
      body {
        background-color: lightgreen;
      }
    }
    </style>
    </head>
    <body>
    
    <h1>Resize the browser window to see the effect!</h1>
    <p>The media query will only apply if the media type is screen and the viewport is 480px wide or wider.</p>
    
    </body>
    </html>