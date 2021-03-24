import React from 'react';

export default class ImageCard extends React.Component {

  constructor(){
    super();
    this.imageRef = React.createRef();
    this.state = {spans: 0};
  }

  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height/10);
    this.setState({spans});
  }

  render(){
    const {description, urls} = this.props.image;
    return(
      <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} src={urls.regular} alt={description}/>
      </div>
    );
  }
}
