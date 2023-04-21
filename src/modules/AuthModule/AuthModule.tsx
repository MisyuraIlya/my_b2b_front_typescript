import React, {useState} from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import RegistrationLayout from './components/RegistrationLayout/AuthLayout';
import ValidationForm from './components/ValidationForm/ValidationForm';
import LoginForm from './components/LoginForm/LoginForm';
import { Button, Heading, IEmailPassword, Input, SubHeading } from './constructor';
import { APP_CONFIG } from './constructor';
import { AuthProvider } from './provider/AuthProvider';
import { useAuth,useActions } from './constructor';
import { SubmitHandler, useForm } from 'react-hook-form';
import { validEmail } from './helpers/valid-email';
const AuthModule = () => {

    // const [active, setActive] = useState('Login')
    const {isLoading} = useAuth()
    const {login, register} = useActions()
    const [type, setType] = useState<'login' | 'register'>('login')
    const {register: formRegister, handleSubmit, formState : { errors }, reset} = useForm<IEmailPassword>({mode: "onChange"})

    const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
        if (type === 'login') login(data)
        else register(data)
        reset()
    }
    return (
        <AuthProvider>
            {/* <RegistrationLayout> */}
                {/* <div className='head'> */}
                <section className='flex h-screen'>
                    <form onSubmit={handleSubmit(onSubmit)} className='rounded-lg bg-white shadow-sm p-8 m-auto'>
                        <Heading className='capitalize text-center mb-4'>{type}</Heading>

                        <Input {...formRegister('email',{
                            required:'Emil is required',
                            pattern: {
                                value: validEmail,
                                message: 'please enter a valid email address'
                            }
                            })}
                            placeholder='email'
                            error={errors.email?.message}
                        />
                        <Input {...formRegister('password',{
                            required:'password is required',
                            minLength: {
                                value:6,
                                message:'Min legth should more 6 symbols'
                            }
                            })}
                            type='password'
                            placeholder='password'
                            error={errors.password?.message}
                        />
                        <Button variant='light'>Let go</Button>
                    </form>
                </section>
                    {/* <div className={`userType ${active === 'Login' ? 'active' : ''}`} onClick={() => setActive('Login')}>
                        <SubHeading title='Login'/>
                    </div>
                    <div className={`userType ${active === 'Registration' ? 'active' : ''}`} onClick={() => setActive('Registration')}>
                        <SubHeading title='Registration'/>
                    </div>
                </div>
                {active == 'Registration' && <RegistrationForm/>}
                {active == 'Login' && <LoginForm/>} */}
            {/* </RegistrationLayout> */}
        </AuthProvider>
    );
};

export default AuthModule;