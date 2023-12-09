// import React,{ useEffect } from 'react'
// import fetchQuote  from '../features/quotes/quoteSlice'
// import { useDispatch, useSelector } from 'react-redux'

// const QuoteView = () => {
//     const quotes = useSelector((state) => state.quotes)
//     const dispatch = useDispatch()
//     useEffect(()=> {
//         dispatch(fetchQuote())
//     },[dispatch])

//     console.log(quotes)
    
//     return (
//         <div>
//       <h1>my quotes</h1>
//       <div>
//       <h1>My quotes</h1>

//       {quotes.loading ? (
//         <p>Loading...</p>
//       ) : quotes.error ? (
//         <p>Error: {quotes.error}</p>
//       ) : (
//         <div>
//           {quotes.map((quote) => (
//             <div key={quote.id}>
//               {/* Assuming each quote has an 'id' property */}
//               <p>{quote.text}</p>
//               <p>- {quote.author}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//     </div>
//   )
// }

// export default QuoteView

import React from 'react';
// import fetchQuote from '../features/quotes/quoteSlice';
// import { useDispatch, useSelector } from 'react-redux';

const QuoteView = () => {
  // const quotes = useSelector((state) => state.quotes);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchQuote());
  // }, [dispatch]); // Dependency array ensures the effect runs only on mount

  // console.log(quotes);

  return (
    <div>
      <h1>My quotes</h1>
    {/* <div>
    {quotes.loading ? (
        <p>Loading...</p>
      ) : quotes.error ? (
        <p>Error: {quotes.error}</p>
      ) : (
        <div>
          {quotes.quote && (
            <div>
              {/* Assuming each quote has an 'id' property *}
              <p>{quotes.quote.text}</p>
              <p>- {quotes.quote.author}</p>
            </div>
          )}
        </div>
      )}
    </div> */}
    </div>
  );
};

export default QuoteView;



