import { useLoginForm } from "../../hooks/useLoginForm"
import styles from "./LoginForm.module.css"

export default function LoginForm() {
   // Logica
   const {
    values,
    errors,
    loading,
    rememberMe,
    handleChange,
    handleSubmit,
    setRememberMe
   } = useLoginForm();
   //UI
   return (
        <div>
            <h1>Fedora</h1>
            <p>El lugar perfecto para ti</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="email">Correo</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className={styles.input__error}>{errors.email}</p>}
                </div>
                <div className="">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className={styles.input__error}>{errors.password}</p>}
                </div>
                <button className={styles.button} type="submit" disabled={loading}>
                    {loading ? 'Cargando...' : 'Iniciar Sesion'}
                </button>
            </form>
        </div>

   )
}