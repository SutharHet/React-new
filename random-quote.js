import React from 'react';
import './random-quote.css';
const quotes = [
  {
    quote: 'Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.',
    author: 'Jesus'
  },
  {
    quote: 'Life is 10% what happens to me and 90% of how I react to it.',
    author: 'Charles Swindoll'
  },
  {
    quote: 'Build your own dreams, or someone else will hire you to build theirs.',
    author: 'Farrah Gray'
  },
  {
    quote: 'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
    author: 'Oprah Winfrey'
  },
  {
    quote: 'Life isn’t about getting and having, it’s about giving and being.',
    author: 'Kevin Kruse'
  },
  {
    quote: 'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.',
    author: 'Aristotle'
  }
]

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quotes: quotes,
      num: '0'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let num = this.randomNum();
    if(num !== this.state.num){
      this.setState({
        num: num
      })
    }else{
      this.handleClick()
    }
  }

  randomNum(){
    let len = this.state.quotes.length-1
    return Math.round(Math.random()*len)
  }
  render(){
    return(
      <div className="container">
        <div id='quote-box'>
          <div className="quote-text">
            <p id='text'>"{this.state.quotes[this.state.num].quote}"</p>
          </div>
          <p id='author'>- {this.state.quotes[this.state.num].author}</p>
          <div className="controls">
            <a id='tweet-quote' href="twitter.com/intent/tweet" target="_blank"><i className="fa fa-twitter"></i></a>
            <button id='new-quote' onClick={this.handleClick}>Next Quote</button>
          </div>
        </div>
      </div>
    )
  }
}

