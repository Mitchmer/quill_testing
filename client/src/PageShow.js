import React from 'react'

class PageShow extends React.Component {
  state = {}
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.value}}>

      </div>
    )
  }
}

export default PageShow