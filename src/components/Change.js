import { useState } from 'react';
import { useDispatch } from 'react-redux';
import addDetails from '../actions/addDetails';
import Account from './Account';
import { useSelector } from 'react-redux';
import Header from './Header';

function Change() {

    const [changed, setChanged] = useState(true); 

    const { name, email, password } = useSelector((state) => state.myDetails);

    const [localName, setLocalName] = useState(name);
    const [localEmail, setLocalEmail] = useState(email);
    const [localPassword, setLocalPassword] = useState(password);
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addDetails({
            name: localName,
            email: localEmail,
            password: localPassword,
        })) 
        setChanged(false);
    }

    return (
        <div>
            { changed ? 
            <div>
                <Header />
                <form className='form' onSubmit={(e) => handleSubmit(e)}>
                    <label className='label'> NAME
                        <input className='input' type='name' defaultValue={name} onChange={(e) => setLocalName(e.target.value)} required />
                    </label>
                    <label className='label'> EMAIL
                        <input className='input' type='email' defaultValue={email} onChange={(e) => setLocalEmail(e.target.value)} required />
                    </label>
                    <label className='label'> PASSWORD
                        <input className='input' type='password' defaultValue={password} onChange={(e) => setLocalPassword(e.target.value)} required />
                    </label>
                    <button className='button' type='submit'>Spara</button>
                </form>
            </div>
        : <Account /> }
        </div>    
    )
}
export default Change;