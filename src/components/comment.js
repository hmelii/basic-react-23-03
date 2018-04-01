import React, { PureComponent } from 'react'

class Comment extends PureComponent {
    render() {
        const { comment} = this.props
        console.log('---', 'rendering comment')
        return (
            <div>
                <div>{comment.user}:</div>
                <div>{comment.text}</div>
            </div>
        )
    }
}

export default Comment