import styles from "./Logo.module.css"

const Logo = () => {
    return ( 
        <div className={styles.logo}>
            <div id={styles.spinner}>Q</div>
        </div>
     );
}
 
export default Logo;