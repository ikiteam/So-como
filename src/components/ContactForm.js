
const ContactForm = () => {

    return(

        <form action="#" method="POST" className="form">
            
            <div>
                <label htmlFor="mail">Mail</label>
                <input type="text" id="mail" placeholder="Mail" />
            </div>

            <div>
                <label htmlFor="objet">Objet</label>
                <input type="text" id="objet" placeholder="Objet"/>
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder="Entrez votre message"  cols="30" rows="10"/>
            </div>
            <a href="#" className="btn submit">Envoyer</a>
        </form>
    )

}
export default ContactForm