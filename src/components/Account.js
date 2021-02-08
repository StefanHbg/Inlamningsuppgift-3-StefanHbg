import { useSelector } from 'react-redux';
import Change from './Change';
import { useState } from 'react';
import Header from './Header'

function Account() {
    const [makeChange, setMakeChange] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        setMakeChange(false);
    }
    const { name, email, password } = useSelector((state) => state.myDetails);

    return (
        <div>
            { makeChange ? 
            <div>
                <Header />
                <form className='form'>
                    <label className='label'> NAME
                        <input className='input account-input' type='name' value={name} disabled />
                    </label>
                    <label className='label'> EMAIL
                        <input className='input account-input' type='email' value={email} disabled />
                    </label>
                    <label className='label'> PASSWORD
                        <input className='input account-input' type='password' value={password} disabled />
                    </label>
                    <button className='button' type='submit' onClick={handleSubmit}>Ändra</button>
                </form>
            </div>
        : <Change /> }
        </div>
    )
}

export default Account;