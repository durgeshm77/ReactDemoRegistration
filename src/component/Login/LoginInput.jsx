import styles from '../../assests/css/Login.module.css'
import { styled } from 'styled-components'
import { useState } from 'react'
const StyledButton = styled.button`
padding: 1rem 2rem;
font-weight: 600;
text-transform: uppercase;
border-radius: 0.25rem;
color: #1f2937;
background-color: #f0b322;
border-radius: 6px;
border: none;
`
export default function LoginInput() {

    const [loginUser, setLoginUser] = useState({
        userName: '',
        password: ''
    });
    const [submitted, isSubmitted] = useState(false);

    function setUserObject(e) {
        setLoginUser((x) => {
            return {
                ...x,
                [e.target.name]: e.target.value
            }

        });
    }
    const emailNotValid = submitted && loginUser.userName === '';
    const passwordNotValid = submitted && loginUser.password === '';

    function IsAuthenticated() {
        isSubmitted(true);
    }

    return (
        <div className={styles['auth-inputs']}>
            <div className={styles.controls}>
                <p>
                    <label>Username</label>
                    <input type="text" name='userName' value={loginUser.userName}
                        className={emailNotValid ? styles.invalid : undefined}
                        onChange={(e) => setUserObject(e)} />
                    {emailNotValid && <span>Username cannot be blank</span>}
                </p>
                <p>
                    <label>Password</label>
                    <input type="password" name='password' value={loginUser.password}
                        className={passwordNotValid ? styles.invalid : undefined}
                        onChange={(e) => setUserObject(e)} />
                    {passwordNotValid && <span>Password cannot be blank</span>}
                </p>
            </div>
            <div className={styles.actions}>
                <StyledButton type="button" className={styles["text-button"]} >
                    Clear
                </StyledButton>
                <StyledButton type="submit" className={styles["text-button"]} onClick={IsAuthenticated}>
                    Sign In
                </StyledButton>

            </div>

        </div>
    )
}