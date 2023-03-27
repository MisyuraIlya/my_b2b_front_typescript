import React from 'react';
import './ValidationFom.styles.scss';
import { Input, Button, SubHeading, Heading, Description, InputIcon } from '../../constructor';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    userExId: string,
    phone: string,
  };

const ValidationForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const handleClick = (data: Inputs) => {
        console.log(data)
        // RegistrationRequest()
    }

    return (
        <div className='ValidationForm'>
            <div className='flex-container'>
                <div className='col-lg-4'>
                    <img src='https://lfayou.com/src/img/popup.jpg' />
                </div>
                <div className='col-lg-8'>
                    <div className='contenct'>
                        <div className='head'>
                                <SubHeading title='ValidationForm'/>
                        </div>
                        <form onSubmit={handleSubmit(handleClick)}>
                            <div className='field'>
                                <Input hookForm={{...register("userExId")}} type='text' placeholder='username'/>
                            </div>
                            <div className='field'>
                                <InputIcon hookForm={{...register("phone")}} eye={true} myType='password' placeholder='password' imgLink={'https://lfayou.com/src/img/icons/eye.svg'}/>
                            </div>
                            <div className='button'>
                                <Button>Validate</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValidationForm;