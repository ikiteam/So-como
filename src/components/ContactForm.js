import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

const errorsMessage = "ce champ est requis";

const FormSchema = Yup.object().shape({
    mail: Yup.string()
        .email('invalid email')
        .required(errorsMessage),
    objet: Yup.string()
        .min(5, 'trop court')
        .max(30, 'trop long')
        .required(errorsMessage),
    message: Yup.string()
        .min(10, "Vous devez saisir 10 caractères minimun.")
        .required(errorsMessage),

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
                <Form method="POST"  className="form">
                    <div>
                        <label htmlFor="mail">Mail</label>
                        <input type="text" id="mail" placeholder="e-mail" name="mail"/>
                        {errors.mail && touched.mail ? <span className="errorsMessage">{errors.mail}</span> : null}
                    </div>

                    <div>
                        <label htmlFor="objet">Objet</label>
                        <input type="text" id="objet" placeholder="Objet" name="Objet"/>
                        {errors.objet && touched.objet ? <span className="errorsMessage">{errors.objet}</span> : null}
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder="Entrez votre message" cols="30" rows="10"/>
                        {errors.message && touched.message ? <span className="errorsMessage">{errors.message}</span> : null}

                    </div>
                    <button type="submit" className="btn submit">Envoyer</button>
                </Form>
            )}

        </Formik>
    )

}
export default ContactForm