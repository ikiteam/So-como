import React, {useRef} from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import {render} from "react-dom";


/*------------------------------------------------------------------------------*/
/*                             SECURISATION FORM                                */
/*------------------------------------------------------------------------------*/

const ContactForm = () => {
        const errorsMessage = "ce champ est requis";
        const form = useRef();
        const formik = useFormik({
                    initialValues: {
                        email: '',
                        object: '',
                        message: '',
                        recaptcha: '',
                    },
                    validationSchema: Yup.object().shape({
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
                        recaptcha: Yup.string()
                            .required(errorsMessage)
                    }),
                    onSubmit: values => {
                        console.log(values);

                        if (values !== "")
                            emailjs.sendForm('service_krkylsr', 'template_up4361d', form.current, 'user_lQfT3X6zkLYWzW5Fe6GTv')
                                .then((result) => {
                                    console.log(result.text);
                                    alert('message envoyée')
                                }, (error) => {
                                    console.log(error.text);
                                    alert('une erreur est survenue')
                                });
                        else
                            document.getElementById('btnSend').disabled = true;

                    },

                }
            )
        ;
        return (
            <form action="#" method="post" ref={form} onSubmit={formik.handleSubmit} className="form">
                <div>
                    <label htmlFor="email">Mail</label>
                    {formik.touched.email && formik.errors.email ? (
                        <span className="errorsMessage">{formik.errors.email}</span>) : null}
                    <input type="text" id="email" placeholder="e-mail" name="email"
                           {...formik.getFieldProps('email')} />
                </div>

                <div>
                    <label htmlFor="object">Objet</label>
                    {formik.touched.object && formik.errors.object ? (
                        <span className="errorsMessage">{formik.errors.object}</span>) : null}
                    <input type="text" id="object" placeholder="Objet"
                           name="object" {...formik.getFieldProps('object')} />
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    {formik.touched.message && formik.errors.message ? (
                        <span className="errorsMessage">{formik.errors.message}</span>) : null}
                    <textarea name="message" id="message" placeholder="Entrez votre message" cols="30" rows="10"
                              {...formik.getFieldProps('message')} />

                </div>
                <div>
                    <ReCAPTCHA
                        sitekey="6LeyHDAdAAAAAAd_-TqmfDNu6CsPNXQ_u9mb-2rL"
                    />
                    {formik.touched.recaptcha && formik.errors.recaptcha ? (
                    <span className="errorsMessage">{formik.errors.recaptcha}</span>) : null}
                    <button type="submit" disabled={formik.isSubmitting} id="btnSend" className="btn submit">Envoyer
                    </button>
                </div>
            </form>
        );

    }
;


export default ContactForm;