var React = require('react');

module.exports = React.createClass({
    displayName: 'Footer',
    render: function () {
        var globalStyle = {
            textAlign: 'center',
            padding: '20px',
            marginTop: '5px',
            borderTop: 'solid 1px #CCCCCC',
            lineHeight: '14px'
        };
        var linkStyle = {
            textDecoration: 'none',
            color: 'inherit'
        }
        return (
            <div style={globalStyle}>
                <p>Copyright &copy; 2016 Function-X.org, All rights reserved.</p>                
                <p>ICP: <a href="http://www.miitbeian.gov.cn/" style={linkStyle}>Zhejiang 16015171</a></p>
            </div>
        );
    }
})