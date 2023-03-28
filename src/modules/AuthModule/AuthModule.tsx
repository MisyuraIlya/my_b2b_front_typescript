import React, {useState} from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import RegistrationLayout from './components/RegistrationLayout/AuthLayout';
import ValidationForm from './components/ValidationForm/ValidationForm';
import LoginForm from './components/LoginForm/LoginForm';
import { SubHeading } from './constructor';
import { APP_CONFIG } from './constructor';
import { AuthProvider } from './context/AuthProvider';
const AuthModule = () => {

    const [active, setActive] = useState('Login')

    return (
        <AuthProvider>
            <RegistrationLayout>
                <div className='head'>
                    <div className={`userType ${active === 'Login' ? 'active' : ''}`} onClick={() => setActive('Login')}>
                        <SubHeading title='Login'/>
                    </div>
                    <div className={`userType ${active === 'Registration' ? 'active' : ''}`} onClick={() => setActive('Registration')}>
                        <SubHeading title='Registration'/>
                    </div>
                </div>
                {active == 'Registration' && <RegistrationForm/>}
                {active == 'Login' && <LoginForm/>}
            </RegistrationLayout>
        </AuthProvider>
    );
};

export default AuthModule;