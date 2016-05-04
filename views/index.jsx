var React = require('react');
var ReactDOM = require('react-dom');

var Footer = require('./footer.jsx');

var Index = React.createClass({
    render: function(){
        var globalStyle = {
            fontFamily: 'microsoft yahei'
        };
        return (
            <div style={globalStyle}>
                <Footer />
            </div>
        );
    }
});

var app = document.createElement('div');
ReactDOM.render(<Index />, app);
document.body.appendChild(app);
document.title = 'Function-X';
document.body.style.margin = 0;