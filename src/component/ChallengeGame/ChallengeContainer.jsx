import ChallengePlayer from './ChallengePlayer'
import TimerChallenge from './TimerChallenge'
import styles from './challenge.module.css'
export default function ChallengeContainer() {
    return (
        <>
            <ChallengePlayer />
            <div className={styles.challenges}>
                <TimerChallenge title='Easy' targetTime='1' />
                <TimerChallenge title='Medium' targetTime='5' />
                <TimerChallenge title='Hard' targetTime='10' />
                <TimerChallenge title='Pro' targetTime='20' />
            </div>

        </>
    )
}