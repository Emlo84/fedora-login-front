
import LoginForm from "../../components/LoginForm/LoginForm";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import styles from "./LoginPage.module.css"

export default function LoginPage() {
    return (
        <main className={styles.layout}>
                <section  className={styles.layout__form}>
                    <LoginForm />
                </section>
                <section className={styles.layout__banner}>
                    <BannerSlider />
                </section>
        </main>
    )
}