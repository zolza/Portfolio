import React from 'react';
import './Content.css';


class Content extends React.Component {

  scrollHandler = this.scrollHandler.bind(this);

  scrollHandler() {
    const {
      animateContainer
    } = this;

    const scrollTopPosition = window.scrollY;
    const animateContainerRect = animateContainer.getBoundingClientRect();
    const animateContainerRectTop = animateContainerRect.top;

    if (animateContainerRectTop < 0) {
      animateContainer.style.backgroundColor = 'green';
    } else {
      animateContainer.style.backgroundColor = 'whitesmoke';
    }
  }

  componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler, false);
    }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollHandler, false);
  }


  render() {
    return (
      <div className="Content">
        <div
          className="Content_animate_container"
          ref={(element:DOMElement) => { this.animateContainer = element; }} >
          <p> I will be animated </p>
        </div>
      </div>
    );
  }
}

export default Content;
