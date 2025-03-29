const Options = ({ setCount, totalFeedback, updateFeedback}) => {
    return (
        <div className="buttons">
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && (<button onClick={() => setCount({ good: 0, neutral: 0, bad: 0 })}>Reset</button>)}
        </div>
    )
}
export default Options;