import React from 'react'
import {Formik, Field} from 'formik'
import Layout from '../components/Layout'
import { InputDefault } from '../commons/formControls/Input/InputDefault'
import { CreateUserComponent } from '../generated/apolloComponents'

export default() => {
    return (
        <Layout title='Register' description='register page'>
            <h2>Register now</h2>
            <CreateUserComponent>
                {signup => (
                    <Formik
                        onSubmit={async data => {
                        const response = await signup({variables: {
                            uusername: data.uusername,
                            uphone: data.uphone,
                            ucellphone: data.ucellphone,
                            uemail: data.uemail,
                            upassword: data.upassword,
                            uavatar: data.uavatar,
                            ufirstname: data.ufirstname,
                            ulastname: data.ulastname,
                            ubirtdate: data.ubirtdate,
                            ugender: data.ugender,
                            ucountry: data.ucountry,
                            ustate: data.ustate,
                            ucity: data.ucity,
                            ustreet: data.ustreet,
                            uzip: data.uzip,
                            ugeolocation: data.ugeolocation,
                            uemailverified: data.uemailverified,
                            uactiveaccount: data.uactiveaccount,
                            ucurrentoccupation: data.ucurrentoccupation,
                            uranking: data.uranking,
                            udateadmission: data.udateadmission,
                            ulastlogin: data.ulastlogin
                            }})
                            console.log(response)
                    }}
                        initialValues={{
                        uusername: 'JarnoLeppala!',
                        uphone: '6181092045',
                        ucellphone: '6181092045',
                        uemail: 'eric@gmail.com',
                        upassword: 'password123',
                        uavatar: 'eric.jpg',
                        ufirstname: 'Eric',
                        ulastname: 'Torres',
                        ubirtdate: '27/04/1992',
                        ugender: 'male',
                        ucountry: 'México',
                        ustate: 'Durango',
                        ucity: 'Durango',
                        ustreet: 'Bayacora',
                        uzip: 34000,
                        ugeolocation: 'pos aqui we XD',
                        uemailverified: 'verified',
                        uactiveaccount: 'active',
                        ucurrentoccupation: 'worker',
                        uranking: 3,
                        udateadmission: '23/03/2017',
                        ulastlogin: '23/03/2017'
                    }}>
                        {({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <Field name='uusername' placeholder='Username' component={InputDefault}/>
                                <Field name='uphone' placeholder='Phone' component={InputDefault}/>
                                <Field name='ucellphone' placeholder='Cellphone' component={InputDefault}/>
                                <Field name='uemail' placeholder='Email' component={InputDefault}/>
                                <Field name='upassword' placeholder='Password' component={InputDefault}/>
                                <Field name='uavatar' placeholder='Avatar' component={InputDefault}/>
                                <Field name='ufirstname' placeholder='Firstname' component={InputDefault}/>
                                <Field name='ulastname' placeholder='Lastname' component={InputDefault}/>
                                <Field name='ubirtdate' placeholder='Birtdate' component={InputDefault}/>
                                <Field name='ugender' placeholder='Gender' component={InputDefault}/>
                                <Field name='ucountry' placeholder='Country' component={InputDefault}/>
                                <Field name='ustate' placeholder='State' component={InputDefault}/>
                                <Field name='ucity' placeholder='City' component={InputDefault}/>
                                <Field name='ustreet' placeholder='Street' component={InputDefault}/>
                                <Field name='uzip' placeholder='Zip' component={InputDefault}/>
                                <Field name='ugeolocation' placeholder='Geolocation' component={InputDefault}/>
                                <Field
                                    name='uemailverified'
                                    placeholder='Emailverified'
                                    component={InputDefault}/>
                                <Field
                                    name='uactiveaccount'
                                    placeholder='Activeaccount'
                                    component={InputDefault}/>
                                <Field
                                    name='ucurrentoccupation'
                                    placeholder='Currentoccupation'
                                    component={InputDefault}/>
                                <Field name='uranking' placeholder='Ranking' component={InputDefault}/>
                                <Field
                                    name='udateadmission'
                                    placeholder='Dateadmission'
                                    component={InputDefault}/>
                                <Field name='ulastlogin' placeholder='Lastlogin' component={InputDefault}/>
                                <button type='submit'>submit</button>
                            </form>
                        )}
                    </Formik>
                )}
            </CreateUserComponent>
        </Layout>
    )
};