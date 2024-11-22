// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isShowAnswer: false}

  onToggleButton = () => {
    this.setState(prevState => ({
      isShowAnswer: !prevState.isShowAnswer,
    }))
  }

  render() {
    const {isShowAnswer} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const imgUrl = isShowAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isShowAnswer ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="toggle-button"
            onClick={this.onToggleButton}
          >
            <img className="toggle-img" src={imgUrl} alt={altText} />
          </button>
        </div>
        {isShowAnswer && (
          <div className="answer-container">
            <hr className="line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
