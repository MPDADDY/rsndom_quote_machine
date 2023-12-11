import React, {useEffect} from 'react'
import {useDispatch ,useSelector } from 'react-redux';
import { fetchQuote } from '../features/quotes/quoteSlice';
import twitter from './twitter.svg'
import './QuoteViewStyles.css';



const QuoteView = () => {
const quote = useSelector((state)=> state.quote.quote[0])
const dispatch = useDispatch()

useEffect(()=> {
  dispatch(fetchQuote())
},[dispatch])

console.log(quote)

if (!quote || quote.length === 0) {
  return <div>Loading...</div>;
}
return (
  <div>
    {quote.loading && <p>Loading...</p>}
    {!quote.loading && quote.error ? <div>error: {quote.error}</div>: null}
    {!quote.loading && quote.quote ?
    (
      <div className='quotebox' id="quote-box">
        <h2 className='quote' id="text"><span>&quot;</span>{quote.quote}</h2>
        <p className='author' id="author"><i>-{quote.author}</i></p>
        <div className='quote-footer'>
          <div>
            <a title='twitt this quote' className='twittlink' id="tweet-quote" href="https://twitter.com/intent/tweet">
              <img src={twitter} alt="twitter image" />
            </a>
          </div>
          <div>
            <button className='newQuote_button' id="new-quote">New Quote</button>
          </div>
        </div>
      </div>
    )
    : null}
  </div>
)
}

export default QuoteView




