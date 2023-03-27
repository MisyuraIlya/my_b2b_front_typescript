/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
// import { constructor }  from '../../';
import { Input, Button, SubHeading, Heading, Description, InputIcon } from '../../constructor';
import { useForm, SubmitHandler } from "react-hook-form";
import './RegistrationForm.styles.scss';
import { RegistrationRequest } from '../../api/registrationRequest';
type Inputs = {
    mail: string,
    password: string,
    secondPassword: string,
  };

const RegistrationForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    const handleClick = (data: Inputs) => {
        RegistrationRequest()
    }
    const [active, setActive] = useState('user')
    return (
        <div className='RegistrationForm'>
            <div className='flex-container'>
                <div className='col-lg-4'>
                    <img src='https://lfayou.com/src/img/popup.jpg' />
                </div>
                <div className='col-lg-8'>
                    <div className='contenct'>
                        <div className='head'>
                            <div className={`userType ${active === 'admin' ? 'active' : ''}`} onClick={() => setActive('admin')}>
                                <SubHeading title='Admin'/>
                            </div>
                            <div className={`userType ${active === 'user' ? 'active' : ''}`} onClick={() => setActive('user')}>
                                <SubHeading title='User'/>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(handleClick)}>
                            <div className='field'>
                                <Input hookForm={{...register("mail")}} type='text' placeholder='username'/>
                            </div>
                            <div className='field'>
                                <InputIcon hookForm={{...register("password")}} eye={true} myType='password' placeholder='password' imgLink={'https://lfayou.com/src/img/icons/eye.svg'}/>
                            </div>
                            <div className='field'>
                                <InputIcon hookForm={{...register("secondPassword")}} eye={true} myType='password' placeholder='second password' imgLink={'https://lfayou.com/src/img/icons/eye.svg'}/>
                            </div>
                            <div className='button'>
                                <Button>Registration</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;