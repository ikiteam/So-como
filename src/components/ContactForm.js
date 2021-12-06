import React, {useRef} from 'react';
import * as Yup from 'yup';
import {Formik, Form, Field} from 'formik';
import emailjs from 'emailjs-com';
import Recaptcha from 'react-google-invisible-recaptcha';


/*------------------------------------------------------------------------------*/
/*                             SECURISATION FORM                                */
/*------------------------------------------------------------------------------*/

const ContactForm = () => {
    const errorsMessage = "ce champ est requis";
    const form = useRef();
    const refCaptcha = React.useRef(null)

    const validation = Yup.object().shape({
        email: Yup.string()
            .email('l\'email est invalide.')
            .required(errorsMessage),
        object: Yup.string()
            .min(5, 'l\'objet doit faire 5 caractères minimun.')
            .max(30, 'l\'objet doit faire moins de 30 caractères.')
            .required(errorsMessage),
        message: Yup.string()
            .min(10, "Vous devez saisir 10 caractères minimun.")
            .required(errorsMessage),

    });
    return (
        <Formik
            initialValues={{
                email: "",
                object: "",
                message: "",
            }}
            validationSchema={validation}
            onSubmit={values => {
                console.log(values);

                if (values !== "") {
                    emailjs.sendForm('service_krkylsr', 'template_up4361d',
                        form.current, 'user_lQfT3X6zkLYWzW5Fe6GTv')
                        .then((result) => {
                            console.log(result.text);
                            alert('message envoyée')
                        }, (error) => {
                            console.log(error.text);
                            alert('une erreur est survenue')
                        });
                } else {
                    document.getElementById('btnSend').disabled = true;
                }
            }
            }

        >
            {({
                  values, errors, touched,
                  handleSubmit, setFieldValue
              }) => (
                <Form className="form" id="form" ref={form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">email</label>
                        <Field name="email" placeholder="e-mail"/>
                        {errors.email && touched.email ? (
                            <div className="errorsMessage">{errors.email}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="object">objet</label>
                        <Field name="object" placeholder="objet"/>
                        {errors.object && touched.object ? (
                            <div className="errorsMessage">{errors.object}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="message">message</label>
                        <Field name="message" as="textarea"/>
                        {errors.message && touched.message ? (
                            <div className="errorsMessage">{errors.message}</div>
                        ) : null}
                    </div>
                    <div>
                        <Recaptcha
                            ref={refCaptcha}
                            sitekey={ "6LdvF34dAAAAAHUarY_Mce8EYcYjut1sD6hewxf2" }
                                onResolved={ () => console.log( 'Human detected.' ) } />
                        <button type="submit" id="btnSend" className="btn submit"
                        >Envoyer</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;