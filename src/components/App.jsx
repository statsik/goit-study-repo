import React, { useState, useEffect } from 'react';
import './App.css'
import Description from './description/Description'
import Options from './options/Options'
import Feedback from './feedback/Feedback'
import Notification from './notification/Notification'

const App = () => {
  const [count, setCount] = useState(() => {
    const saved = window.localStorage.getItem('feedback');
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  })

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(count));
  }, [count]);

  const updateFeedback = feedbackType => {
        setCount({
        ...count,
        [feedbackType]: count[feedbackType] + 1,
        });
    }

  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = totalFeedback === 0 ? 0 : Math.round((count.good / totalFeedback) * 100);

  return (
    <div>
      <Description></Description>
      <Options
         setCount={setCount} totalFeedback={totalFeedback} updateFeedback={updateFeedback}
      ></Options>
      {totalFeedback === 0 ? (<Notification message = "No feedback yet"></Notification>) :
        (<Feedback
          good={count.good}
          neutral={count.neutral}
          bad={count.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        >
        </Feedback>)}
    </div>
  )
}

export default App;