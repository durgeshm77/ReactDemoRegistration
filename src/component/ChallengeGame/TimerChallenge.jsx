import ResultModal from './ResultModal.jsx';
import styles from './challenge.module.css'
import { useState, useRef } from 'react'
export default function TimerChallenge({ title, targetTime }) {
    let timer = useRef();
    let openDialog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        openDialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 10);
        }, 10);
    }

    function handleStop() {
        openDialog.current.open();
        clearInterval(timer.current);
    }


    return (
        <>
            <ResultModal ref={openDialog}
                targetTime={targetTime}
                remainingTime={timeRemaining} 
                onReset={handleReset}/>
            <section className={styles.challenge}>
                <h2>{title}</h2>

                <p className={styles['challenge-time']}>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className=''>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive.'}
                </p>
            </section>
        </>
    )
}