import React from "react";

class MemoryCard extends React.Component {
  render() {
    let memoryCardInnerClass = "MemoryCardInner";

    if (this.props.isFlipped) {
      memoryCardInnerClass += " flipped";
    }

    return (
      <>
        <div className="MemoryCard" onClick={this.props.pickCard}>
          <div className={memoryCardInnerClass}>
            <div className="MemoryCardBack">
              <img src="./cardPic.png" alt="cardImage"></img>
            </div>
            <div className="MemoryCardFront">{this.props.symbol}</div>
          </div>
        </div>
      </>
    );
  }
}

export default MemoryCard;
