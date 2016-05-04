var React = require('react');

module.exports = React.createClass({
    render: function(){
        var globalStyle = {
            textAlign: 'center',
            padding: '100px',
            backgroundColor: '#4A90E2',
            color: '#FFFFFF',
            fontSize: '22px'
        }
        var linkStyle = {
            textDecoration : 'none',
            color: 'inherit'
        }
        return (
            <div style={globalStyle}>
                <p>我们也不知道Function-X究竟是做什么的（调皮）</p>
                <a href="https://github.com/function-x" style={linkStyle}>&gt; View GitHub</a>
            </div>
        );
    }
});