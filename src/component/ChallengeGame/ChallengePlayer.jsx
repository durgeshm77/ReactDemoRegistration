import styles from './challenge.module.css'
import { useState, useRef } from 'react'

export default function ChallengePlayer() {
    const refPlayerName = useRef();
    const [playerName, setPalyerName] = useState(null);

    function onSubmit() {
        setPalyerName(refPlayerName.current.value);
    }

    return (
        <section className={styles.player}>
            <h2>Welcome {playerName || playerName !== '' ? playerName : 'unknown entity'}</h2>
            <p>
                <input ref={refPlayerName} type="text" />
                <button onClick={onSubmit}>Set Name</button>
            </p>
        </section>
    )
}