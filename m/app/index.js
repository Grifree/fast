import "./index.less"
import React from 'react'
const App = React.createClass({
    render: function () {
        return (
            <div>
            {
                this.props.data.map(function (item, i) {
                    return <div className="m-app-item" key={i} >{item}</div>
                })
            }
            </div>
        )
    }
})
export default App
