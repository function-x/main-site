var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./header.jsx');
var Feather = require('./feather.jsx');
var Footer = require('./footer.jsx');

var Index = React.createClass({
    render: function(){
        var globalStyle = {
            fontFamily: 'microsoft yahei'
        };
        return (
            <div style={globalStyle}>
                <Header></Header>
                <Feather></Feather>
                <Footer></Footer>
            </div>
        );
    }
});

var app = document.createElement('div');
ReactDOM.render(<Index />, app);
document.body.appendChild(app);
document.title = 'Function-X';
document.body.style.margin = 0;