import { useState } from 'react';
import { useDispatch } from 'react-redux';
import addDetails from '../actions/addDetails';

function Register(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
                dispatch(addDetails({
                name: name,
                email: email,
                password: password,
            })) 
        props.updateState();
    }

    return (
        <div className='div-container'>
            <header className="App-header">Välkommen!</header>
            <h2 className='h2-styling'>Registrera dig för ett konto</h2>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <label className='label'> NAME
                    <input id='input1' className='input' type='name' value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label className='label'> EMAIL
                    <input className='input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label className='label'> PASSWORD
                    <input className='input' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button className='button' type='submit'>Sign me up!</button>
            </form>
        </div>
    )
}

export default Register;