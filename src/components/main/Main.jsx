import styles from "./Main.module.css"
import Questions from "../../db/Quiz_Data"

const Main = () => {

    return ( 
    <div className={styles.main}>
        <div className={styles.wrapper}>
            <div className={styles.welcome}>
                <h1>Welcome to Quizzy!</h1>
                    <h2>How To Play:</h2>
                        <ul>
                            <li>You will have 2 minutes to complete the quiz.</li>
                            <li>A countdown timer (top-right) will help you keep track.</li>
                            <li>You will earn 10 points for every question you answer correctly.</li>
                            <li>You will earn 0 points for every question you get wrong.</li>
                            <li>You will lose 10 seconds for every question you get wrong.</li>
                        </ul>
                    <p>Are you up to the challenge?!</p>
                <h2>Click the "Ready" button below to begin... Good luck!</h2>
            </div>
            <div className={`${styles.container} ${styles.questionContainer}`}>
                <div id={styles.questionContainer} className={styles.hide}>
                    <div id={styles.question}>Question</div>
                    <div id={styles.answerBtns} className={`${styles.btnGrid} ${styles.butt}`}>
                        <button className={styles.btn}>Answer 1</button>
                        <button className={styles.btn}>Answer 2</button>
                        <button className={styles.btn}>Answer 3</button>
                        <button className={styles.btn}>Answer 4</button>
                    </div>
                </div>
                <div className="controls">
                    <button className={styles.startBtn, styles.btn}>Ready!</button>
                    <button id={styles.nextBtn} className={`${styles.nextBtn} ${styles.btn} ${styles.btnPrimary} ${styles.hide}`}>Next</button>
                    <button id={styles.resultsBtn} className={`${styles.resultsBtn} ${styles.btn} ${styles.btnPrimary} ${styles.hide}`}>Submit Your Results!</button>
                </div>
                <div id="scoreboard" className="hide"></div>
            </div>
        </div>
    </div> 
    );
}
 
export default Main;