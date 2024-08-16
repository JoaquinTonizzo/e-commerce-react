import './CheckoutForm.css';
import { useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const validateName = (name) => {
        return name.length > 2; // Nombre debe tener al menos 3 caracteres
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/; // Validación simple para un número de 10 dígitos
        return phoneRegex.test(phone);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validación simple de formato de email
        return emailRegex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateName(name)) {
            Swal.fire({
                title: 'Nombre inválido',
                text: 'El nombre debe tener al menos 3 caracteres.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        if (!validatePhone(phone)) {
            Swal.fire({
                title: 'Teléfono inválido',
                text: 'El número de teléfono debe tener 10 dígitos.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        if (!validateEmail(email)) {
            Swal.fire({
                title: 'Email inválido',
                text: 'Por favor, ingresa un email válido.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        const userData = {
            name,
            phone,
            email
        };

        onConfirm(userData);
    };

    return (
        <div className="Container">
            <form onSubmit={handleSubmit} className="Form">
                <label className="Label">
                    Nombre
                    <input
                        className="Input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className="Label">
                    Teléfono
                    <input
                        className="Input"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <label className="Label">
                    Email
                    <input
                        className="Input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <div className="Label">
                    <button type="submit" className="Button ButtonCreate">Crear Orden</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
