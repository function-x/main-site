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
        return (
            <div style={globalStyle}>
                <p>Copyright &copy; 2016 Function-X.org 版权所有</p>                
                <p>ICP证：<a href="http://www.miitbeian.gov.cn/">浙ICP备16015171号</a></p>
            </div>
        );
    }
})