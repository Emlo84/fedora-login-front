import { useState } from "react";

export function useLoginForm() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!values.email.includes('@')) newErrors.email = 'Correo invalido';
        if (values.password.length < 6) newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        return newErrors;
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
        
        if (errors[name]) setErrors(pre => ({ ...pre, [name]: ''}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false)
    }

    return {
        values,
        errors,
        loading,
        rememberMe,
        handleChange,
        handleSubmit,
        setRememberMe
    }    
}