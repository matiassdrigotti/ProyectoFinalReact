import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        
        if( email !== emailConfirm) {
            alert('CHEQUEAR MAIL')
        }
        else {
            const userData = {
                name, phone, email
            }
            onConfirm(userData)
        }
    }

    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                        <p>Nombre</p> 
                    <input
                    className='Input'
                    type='text'
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    required
                    />
                </label>
                <label className='Label'>
                       <p>Telefono</p> 
                    <input
                    className='Input'
                    type='text'
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                    required
                    />
                </label>
                <label className='Label'>
                       <p>Email</p> 
                    <input
                    className='Input'
                    type='email'
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    required
                    />
                </label>
                <label className='Label'>
                       <p>Confirm Email</p> 
                    <input
                    className='Input'
                    type='email'
                    value={emailConfirm}
                    onChange={({ target }) => setEmailConfirm(target.value)}
                    required
                    />
                </label>
                <div className='Label'>
                    <button type='submit' className='Button'>Crear orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;