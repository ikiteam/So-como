import Navbar from "../../components/navbar";
import Video from "../../components/video";
import "../../assets/home.scss";
import Logo from "../../components/Logo";
import Phone from "../../assets/img/telephone.png"
import Google from "../../assets/img/google-play.png"
import Apple from "../../assets/img/apple-store.png"
import ContactForm from "../../components/ContactForm";
const Home = () => {
    return (
        <div className="Home">
            <Navbar/>
            <header>
                <div className="logo-container">
                    <div className="logo">
                        <Logo/>
                        <h1>Socomo</h1>
                    </div>

                    <p>L'appli pour des bons plans près de chez vous !</p>
                    <p>(bientôt disponible en téléchargement)</p>
                </div>
                <div className="phone">
                    <img src={ Phone } alt=""/>
                </div>

            </header>
            <div className="container">
                <div className="info">
                    <h2>Socomo, qu'est-ce c'est?</h2>
                    <div className="infoSocomo">
                        <div>
                            <svg width="92" height="109" viewBox="0 0 60 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M47.6471 42C40.9412 42 35.2941 47.635 35.2941 54.25C35.2941 63.385 47.6471 77
                                47.6471 77C47.6471 77 60 63.385 60 54.25C60 47.635 54.3529 42 47.6471 42ZM47.6471
                                58.835C45.1765 58.835 43.4118 56.735 43.4118 54.635C43.4118 52.185 45.5294 50.435
                                47.6471 50.435C49.7647 50.435 51.8824 52.5 51.8824 54.635C52.2353 56.735 50.1176
                                58.835 47.6471 58.835ZM38.5059 77H7.05882C5.18671 77 3.39127 76.2625 2.06748
                                74.9497C0.743695 73.637 0 71.8565 0 70V7C0 3.115 3.14118 0 7.05882 0H42.3529C44.2251 0
                                46.0205 0.737498 47.3443 2.05025C48.6681 3.36301 49.4118 5.14348 49.4118
                                7V35.105C48.8471 35 48.2471 35 47.6471 35C45.8824 35 44.1176 35.28 42.3529
                                35.77V14H7.05882V63H30.1412C32.2588 68.25 35.7176 73.395 38.5059 77Z"
                                    fill="#10201F"/>
                            </svg>
                            <p><span>Une application</span> simple d'utilisation</p>
                        </div>
                        <div>
                            <svg width="109" height="109" viewBox="0 0 109 109" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M90.8333 27.25H18.1667V18.1666H90.8333V27.25ZM59.0417 70.3958C59.0417 75.5733
                                60.9946 81.1141 63.5833 86.2916V90.8333H18.1667V63.5833H13.625V54.5L18.1667
                                31.7916H90.8333L94.0125 47.6875C90.8333 46.2341 87.5633 45.4166 84.0208 45.4166C70.3958
                                45.4166 59.0417 56.7708 59.0417 70.3958ZM54.5 63.5833H27.25V81.75H54.5V63.5833ZM99.9167
                                 70.3958C99.9167 82.2041 84.0208 99.9166 84.0208 99.9166C84.0208 99.9166 68.125 82.2041
                                  68.125 70.3958C68.125 61.7666 75.3917 54.5 84.0208 54.5C92.65 54.5 99.9167 61.7666
                                  99.9167 70.3958ZM89.4708 70.85C89.4708 68.125 86.7458 65.4 84.0208 65.4C81.2958 65.4
                                  78.5708 67.6708 78.5708 70.85C78.5708 73.575 80.8417 76.3 84.0208 76.3C87.2 76.3
                                  89.925 73.575 89.4708 70.85Z"
                                    fill="#10201F"/>
                            </svg>
                            <p><span>Des bons plans</span> près de chez vous</p>
                        </div>
                        <div>
                            <svg width="109" height="110" viewBox="0 0 146 147" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100.316 86.3044C103.833 86.3044 107.207 87.7106 109.694 90.2138C112.182 92.717
                                113.579 96.1121 113.579 99.6522C113.579 103.192 112.182 106.587 109.694 109.09C107.207
                                 111.594 103.833 113 100.316 113C97.5703 113.008 94.8905 112.155 92.6484 110.561C90.4064
                                  108.966 88.7133 106.709 87.8042 104.101H82.6316V95.2029H87.8042C89.6169 89.9972
                                  94.5242 86.3044 100.316 86.3044ZM100.316 95.2029C99.1433 95.2029 98.0187 95.6716
                                  97.1896 96.506C96.3605 97.3404 95.8947 98.4721 95.8947 99.6522C95.8947 100.832 96.3605
                                   101.964 97.1896 102.798C98.0187 103.633 99.1433 104.101 100.316 104.101C101.488
                                   104.101 102.613 103.633 103.442 102.798C104.271 101.964 104.737 100.832 104.737
                                   99.6522C104.737 98.4721 104.271 97.3404 103.442 96.506C102.613 95.6716 101.488
                                   95.2029 100.316 95.2029ZM100.316 55.1595C101.993 55.1595 103.601 54.4892 104.786
                                   53.296C105.972 52.1028 106.638 50.4845 106.638 48.7971C106.638 47.1096 105.972
                                   45.4913 104.786 44.2981C103.601 43.1049 101.993 42.4346 100.316 42.4346C98.6391
                                   42.4346 97.031 43.1049 95.8454 44.2981C94.6598 45.4913 93.9937 47.1096 93.9937
                                   48.7971C93.9937 50.4845 94.6598 52.1028 95.8454 53.296C97.031 54.4892 98.6391
                                   55.1595 100.316 55.1595ZM100.316 31C105.006 31 109.504 32.875 112.82 36.2126C116.137
                                    39.5502 118 44.077 118 48.7971C118 62.1004 100.316 81.8551 100.316 81.8551C100.316
                                     81.8551 82.6316 62.1004 82.6316 48.7971C82.6316 44.077 84.4948 39.5502 87.8112
                                     36.2126C91.1276 32.875 95.6257 31 100.316 31ZM59.7748
                                     95.2029H64.9474V104.101H59.7748C58.8657 106.709 57.1727 108.966 54.9306
                                     110.561C52.6885 112.155 50.0087 113.008 47.2632 113C43.7456 113 40.3721 111.594
                                     37.8847 109.09C35.3974 106.587 34.0001 103.192 34.0001 99.6522C34.0001 93.8236
                                     37.6695 88.8849 42.8422 87.0607V81.8551H51.6843V87.0607C55.4421 88.3955 58.4485
                                     91.421 59.7748 95.2029ZM47.2632 95.2029C46.0907 95.2029 44.9662 95.6716 44.1371
                                     96.506C43.3079 97.3404 42.8422 98.4721 42.8422 99.6522C42.8422 100.832 43.3079
                                     101.964 44.1371 102.798C44.9662 103.633 46.0907 104.101 47.2632 104.101C48.4357
                                     104.101 49.5602 103.633 50.3894 102.798C51.2185 101.964 51.6843 100.832 51.6843
                                     99.6522C51.6843 98.4721 51.2185 97.3404 50.3894 96.506C49.5602 95.6716 48.4357
                                     95.2029 47.2632 95.2029ZM47.2632 32.9132C50.7808 32.9132 54.1543 34.3195 56.6417
                                     36.8227C59.129 39.3259 60.5264 42.7209 60.5264 46.261C60.5264 52.0895 56.8569
                                     57.0282 51.6843 58.8524V64.058H42.8422V58.8524C40.2515 57.9376 38.0082 56.2337
                                     36.4237 53.9773C34.8392 51.7209 33.9921 49.024 34.0001 46.261C34.0001 42.7209
                                     35.3974 39.3259 37.8847 36.8227C40.3721 34.3195 43.7456 32.9132 47.2632
                                     32.9132ZM47.2632 41.8117C46.0907 41.8117 44.9662 42.2805 44.1371 43.1149C43.3079
                                     43.9493 42.8422 45.081 42.8422 46.261C42.8422 47.441 43.3079 48.5727 44.1371
                                     49.4071C44.9662 50.2415 46.0907 50.7102 47.2632 50.7102C48.4357 50.7102 49.5602
                                     50.2415 50.3894 49.4071C51.2185 48.5727 51.6843 47.441 51.6843 46.261C51.6843
                                     45.081 51.2185 43.9493 50.3894 43.1149C49.5602 42.2805 48.4357 41.8117 47.2632
                                     41.8117ZM69.3685 104.101V95.2029H78.2106V104.101H69.3685ZM51.6843
                                     77.4058H42.8422V68.5073H51.6843V77.4058Z"
                                    fill="#10201F"/>
                            </svg>
                            <p><span>L'itinéraire</span> si vous ne savez pas où le commerce se situe</p>
                        </div>
                    </div>
                </div>
                <Video/>
                <div className="arrive_bientot">
                    <p>Application bientôt disponible sur </p>
                    <div className="logo_download">
                        <img src={Google} alt=""/>
                        <img src={Apple} alt=""/>
                    </div>
                </div>
                <div className="contact">
                    <h2>Contactez-nous</h2>
                    <div className="contact-container">
                        <div className="contact-RS">
                            <p>Pour plus d'informations sur l'application</p>
                        </div>
                        <div className="contact-form">
                            <ContactForm/>
                        </div>

                    </div>
                </div>
            </div>
            <footer>
                <div className="logo">
                    <Logo/>
                    <h3>Socomo</h3>
                </div>
            </footer>
        </div>
    )
}

export default Home;