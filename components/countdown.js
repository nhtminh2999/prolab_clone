import { useState, useEffect } from 'react'

const CountDown = ({ className, endDate = Date.now() }) => {
  const [state, setState] = useState({});

  useEffect(() => {
    const intervalID = setInterval(() => {
      const countDownDate = endDate.getTime();
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setState({
        days: days >= 10 ? days : `0${days}`,
        hours: hours >= 10 ? hours : `0${hours}`,
        minutes: minutes >= 10 ? minutes : `0${minutes}`,
        seconds: seconds >= 10 ? seconds : `0${seconds}`,
      })

      if (distance < 0) clearInterval(intervalID)
    }, 1000)

    return () => {
      clearInterval(intervalID);
    }

  }, [endDate])
  return (
    <div className={className}>
      <span className='countdown-box'>
        {state.days || '00'}
        <small>
          Days
        </small>
      </span>
      <span className='countdown-box'>
        {state.hours || '00'}
        <small>
          Hrs
        </small>
      </span>
      <span className='countdown-box'>
        {state.minutes || '00'}
        <small>
          Min
        </small>
      </span>
      <span className='countdown-box'>
        {state.seconds || '00'}
        <small>
          Sec
        </small>
      </span>
    </div>
  )
}

export default CountDown