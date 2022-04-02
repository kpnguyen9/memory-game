import React from "react";

class MemoryCard extends React.Component {
  constructor() {
    super();
    this.state = { isFlipped: false };
  }

  clickHandler() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    let memoryCardInnerClass = "MemoryCardInner";

    if (this.state.isFlipped) {
      memoryCardInnerClass += " flipped";
    }

    return (
      <>
        <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
          <div className={memoryCardInnerClass}>
            <div className="MemoryCardBack">
              <img src="./cardPic.png" alt="cardImage"></img>
            </div>
            <div className="MemoryCardFront">∆</div>
          </div>
        </div>
      </>
    );
  }
}

export default MemoryCard;
