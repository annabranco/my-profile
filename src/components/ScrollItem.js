import React from 'react';

class ScrollItem extends React.Component {

  render () {

    return (

      <div className="images" style={{backgroundImage: this.props.bg}}>
        <div className="innertext--between">{this.props.title}</div>
        <div className="innertext">
          <p className="innertext--p">{this.props.top}</p>
        </div>
        <div className="innertext">
          <p className="innertext--p">{this.props.middle}</p>
        </div>
        <div className="innertext">
          <p className="innertext--p">{this.props.bottom}</p>
        </div>
      </div>

    );
  }

}

export default ScrollItem;
