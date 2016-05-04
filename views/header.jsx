var React = require('react');

module.exports = React.createClass({
    displayName: 'Header',
    render: function () {
        var globalStyle = {
            padding: '14px 14px 14px 0',
            backgroundColor: '#4A90E2',
        };
        var titleStyle = {
            textDecoration : 'none',
            margin: '5px 0 5px 20px',
            color: '#FFFFFF',
            fontSize: '20px'
        };
        return (
            <div style={globalStyle}>
                <a href="http://function-x.org" style={titleStyle}>Function-X</a>
            </div>
        );
    }
})