import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';


const FormSchema = Yup.object().shape({
    mail: Yup.string().email('invalid email').required('required'),
    objet: Yup.string()
        .min(5, 'trop court')
        .max(30, 'trop long')
        .required('required'),

})


const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                mail: '',
                objet: '',
            }}
            validationSchema={FormSchema}
            onSubmit={values => {
                console.log(values);
            }}>

            {({errors, touched}) => (
                <Form method="POST" className="form">
                    <div>
                        <label htmlFor="mail">Mail</label>
                        <input type="text" id="mail" placeholder="e-mail" name="mail"/>
                        {errors.mail && touched.mail ? <span>{errors.mail}</span> : null}
                    </div>

                    <div>
                        <label htmlFor="objet">Objet</label>
                        <input type="text" id="objet" placeholder="Objet" name="Objet"/>
                        {errors.objet && touched.objet ? <span>{errors.objet}</span> : null}
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder="Entrez votre message" cols="30" rows="10"/>
                    </div>
                    <button type="submit" className="btn submit">Envoyer</button>
                </Form>
            )}

        </Formik>
    )

}
export default ContactForm