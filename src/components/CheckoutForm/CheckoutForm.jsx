import './CheckoutForm.css';
import { useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !phone || !email) {
            Swal.fire({
                title: 'Existen campos incompletos',
                text: 'Todos los campos deben ser completados con los datos correspondientes para realizar su pedido con exito.',
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

        Swal.fire({
            title: 'Compra realizada con éxito',
            text: 'A continuación verá el id de su orden. Nuestro staff se comunicará con usted a la brevedad.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

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
