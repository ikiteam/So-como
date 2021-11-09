import { useRef, useEffect, useLayoutEffect } from "react";
import { gsap, TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "../../Layout/Layout";
import Header from "../../components/Header";
import Video from "../../components/video";
import "../../assets/home.scss";
import "../../assets/responsive.scss";
import Logo from "../../components/Logo";
import Phone from "../../assets/img/telephone2.png"
import Google from "../../assets/img/google-play.png"
import Apple from "../../assets/img/apple-store.png"
import ContactForm from "../../components/ContactForm";



const Home = () => {
    const ref = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    /*------------------------------------------------------------------------------*/
    /*------------------------------------------ANIMATIONS--------------------------*/
    /*------------------------------------------------------------------------------*/

    useLayoutEffect(() => {
        const element = ref.current;
        const tl = new TimelineMax({ paused: true });

        tl.from(element.querySelector(".logo"), { opacity: 0, duration: 2, ease: "power2.inOut" })
            .from(element.querySelector(".logo-container p"), {
                y: 30,
                opacity: 0,
                duration: 0.75,
                ease: "power2.inOut"
            }, "-=1.5")
            .from(element.querySelector(".phone"), { y: 40, opacity: 0, duration: 1, ease: "power2.inOut" }, "-=1")
            .from(element.querySelector(".navbar"), { opacity: 0, duration: 1, ease: "power2.inOut" }, "-=1")
            //.from(element.querySelector(".infos"), { opacity: 0, duration: 1, ease: "power2.inOut" }, "#infos")
            .play();
        return () => {
            tl.kill();
        };
    }, []);
    useEffect(() => {
        const element = ref.current;
        gsap.from(element.querySelector(".container"), {
            scrollTrigger: {
                trigger: element.querySelector(".container"),
                start: "top 95%",

            },
            y: 50,
            opacity: 0,
            duration: 0.75,
            ease: "power2.inOut"
        })
    }, []);
    useEffect(() => {
        const element = ref.current;
        gsap.from(element.querySelector(".info"), {
            scrollTrigger: {
                trigger: element.querySelector(".info"),
                start: "top 95%",
            },
            y: 50,
            opacity: 0,
            duration: 0.75,
            ease: "power2.inOut"
        })
    }, []);
    useEffect(() => {
        const element = ref.current;
        gsap.from(element.querySelector(".video"), {
            scrollTrigger: {
                trigger: element.querySelector(".video"),
                start: "top 90%",
            },
            y: 50,
            opacity: 0,
            duration: 0.75,
            ease: "power2.inOut"
        })
    }, []);
    useEffect(() => {
        const element = ref.current;
        gsap.from(element.querySelector(".arriveBientot"), {
            scrollTrigger: {
                trigger: element.querySelector(".arriveBientot"),
                start: "top 90%",

            },
            y: 50,
            opacity: 0,
            duration: 0.75,
            ease: "power2.inOut"
        })
    }, []);
    useEffect(() => {
        const element = ref.current;
        gsap.from(element.querySelector(".contact"), {
            scrollTrigger: {
                trigger: element.querySelector(".contact"),
                start: "top 90%",

            },
            y: 50,
            opacity: 0,
            duration: 0.75,
            ease: "power2.inOut"
        })
    }, []);
    useEffect(() => {
        const element = ref.current;
        gsap.from(element.querySelector("footer"), {
            scrollTrigger: {
                trigger: element.querySelector("footer"),
                start: "top 90%",
            },
            opacity: 0,
            duration: 0.75,
            ease: "power2.inOut"
        })
    }, []);



    /*------------------------------------------------------------------------------*/
    /*------------------------------------------AUTRE-------------------------------*/
    /*------------------------------------------------------------------------------*/


    return (
        <Layout classe="Home" title="Home" >
            <div ref={ref}>
                <Header>
                    <div className="logo-container">
                        <div className="logo">
                            <Logo />
                            <h1>Socomo</h1>
                        </div>

                        <p>L'appli pour des bons plans près de chez vous !
                        <span>(bientôt disponible en téléchargement)</span>
                        </p>
                    </div>
                    <div className="phone">
                        <img src={Phone} alt="apercu de l'application" />
                    </div>
                </Header>


                <div className="container">
                    <div className="info" id="apropos">
                        <h2>Socomo, qu'est-ce que c'est ?</h2>
                        <div className="infoSocomo">
                            <div>
                                <svg className="iconeSvg" viewBox="0 0 60 77" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M47.6471 42C40.9412 42 35.2941 47.635 35.2941 54.25C35.2941 63.385 47.6471 77 47.6471 77C47.6471 77 60 63.385 60 54.25C60 47.635 54.3529 42 47.6471 42ZM47.6471 58.835C45.1765 58.835 43.4118 56.735 43.4118 54.635C43.4118 52.185 45.5294 50.435 47.6471 50.435C49.7647 50.435 51.8824 52.5 51.8824 54.635C52.2353 56.735 50.1176 58.835 47.6471 58.835ZM38.5059 77H7.05882C5.18671 77 3.39127 76.2625 2.06748 74.9497C0.743695 73.637 0 71.8565 0 70V7C0 3.115 3.14118 0 7.05882 0H42.3529C44.2251 0 46.0205 0.737498 47.3443 2.05025C48.6681 3.36301 49.4118 5.14348 49.4118 7V35.105C48.8471 35 48.2471 35 47.6471 35C45.8824 35 44.1176 35.28 42.3529 35.77V14H7.05882V63H30.1412C32.2588 68.25 35.7176 73.395 38.5059 77Z"
                                        fill="#10201F" />
                                </svg>

                                <p><span>Une application</span> simple d'utilisation</p>
                            </div>
                            <div>
                                <svg className="iconeSvg" viewBox="0 0 87 82" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M77.8333 9.24996H5.16667V0.166626H77.8333V9.24996ZM46.0417 52.3958C46.0417 57.5733 47.9946 63.1141 50.5833 68.2916V72.8333H5.16667V45.5833H0.625V36.5L5.16667 13.7916H77.8333L81.0125 29.6875C77.8333 28.2341 74.5633 27.4166 71.0208 27.4166C57.3958 27.4166 46.0417 38.7708 46.0417 52.3958ZM41.5 45.5833H14.25V63.75H41.5V45.5833ZM86.9167 52.3958C86.9167 64.2041 71.0208 81.9166 71.0208 81.9166C71.0208 81.9166 55.125 64.2041 55.125 52.3958C55.125 43.7666 62.3917 36.5 71.0208 36.5C79.65 36.5 86.9167 43.7666 86.9167 52.3958ZM76.4708 52.85C76.4708 50.125 73.7458 47.4 71.0208 47.4C68.2958 47.4 65.5708 49.6708 65.5708 52.85C65.5708 55.575 67.8417 58.3 71.0208 58.3C74.2 58.3 76.925 55.575 76.4708 52.85Z"
                                        fill="#10201F" />
                                </svg>

                                <p><span>Des bons plans</span> près de chez vous</p>
                            </div>
                            <div>
                                <svg className="iconeSvg" viewBox="0 0 84 82" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M66.3158 55.3044C69.8334 55.3044 73.2069 56.7106 75.6943 59.2138C78.1816 61.717 79.5789 65.1121 79.5789 68.6522C79.5789 72.1922 78.1816 75.5873 75.6943 78.0905C73.2069 80.5937 69.8334 81.9999 66.3158 81.9999C63.5703 82.0079 60.8905 81.1554 58.6484 79.5608C56.4064 77.9662 54.7133 75.7086 53.8042 73.1014H48.6316V64.2029H53.8042C55.6169 58.9972 60.5242 55.3044 66.3158 55.3044ZM66.3158 64.2029C65.1433 64.2029 64.0187 64.6716 63.1896 65.506C62.3605 66.3404 61.8947 67.4721 61.8947 68.6522C61.8947 69.8322 62.3605 70.9639 63.1896 71.7983C64.0187 72.6327 65.1433 73.1014 66.3158 73.1014C67.4883 73.1014 68.6128 72.6327 69.442 71.7983C70.2711 70.9639 70.7369 69.8322 70.7369 68.6522C70.7369 67.4721 70.2711 66.3404 69.442 65.506C68.6128 64.6716 67.4883 64.2029 66.3158 64.2029ZM66.3158 24.1595C67.9925 24.1595 69.6006 23.4892 70.7862 22.296C71.9718 21.1028 72.6379 19.4845 72.6379 17.7971C72.6379 16.1096 71.9718 14.4913 70.7862 13.2981C69.6006 12.1049 67.9925 11.4346 66.3158 11.4346C64.6391 11.4346 63.031 12.1049 61.8454 13.2981C60.6598 14.4913 59.9937 16.1096 59.9937 17.7971C59.9937 19.4845 60.6598 21.1028 61.8454 22.296C63.031 23.4892 64.6391 24.1595 66.3158 24.1595ZM66.3158 0C71.0059 0 75.504 1.87504 78.8204 5.21264C82.1368 8.55023 84 13.077 84 17.7971C84 31.1004 66.3158 50.8551 66.3158 50.8551C66.3158 50.8551 48.6316 31.1004 48.6316 17.7971C48.6316 13.077 50.4948 8.55023 53.8112 5.21264C57.1276 1.87504 61.6257 0 66.3158 0ZM25.7748 64.2029H30.9474V73.1014H25.7748C24.8657 75.7086 23.1727 77.9662 20.9306 79.5608C18.6885 81.1554 16.0087 82.0079 13.2632 81.9999C9.7456 81.9999 6.37207 80.5937 3.88474 78.0905C1.39742 75.5873 5.53268e-05 72.1922 5.53268e-05 68.6522C5.53268e-05 62.8236 3.66953 57.8849 8.84215 56.0607V50.8551H17.6843V56.0607C21.4421 57.3955 24.4485 60.421 25.7748 64.2029ZM13.2632 64.2029C12.0907 64.2029 10.9662 64.6716 10.1371 65.506C9.30794 66.3404 8.84215 67.4721 8.84215 68.6522C8.84215 69.8322 9.30794 70.9639 10.1371 71.7983C10.9662 72.6327 12.0907 73.1014 13.2632 73.1014C14.4357 73.1014 15.5602 72.6327 16.3894 71.7983C17.2185 70.9639 17.6843 69.8322 17.6843 68.6522C17.6843 67.4721 17.2185 66.3404 16.3894 65.506C15.5602 64.6716 14.4357 64.2029 13.2632 64.2029ZM13.2632 1.91318C16.7808 1.91318 20.1543 3.31947 22.6417 5.82266C25.129 8.32586 26.5264 11.7209 26.5264 15.261C26.5264 21.0895 22.8569 26.0282 17.6843 27.8524V33.058H8.84215V27.8524C6.25154 26.9376 4.00823 25.2337 2.42372 22.9773C0.839208 20.7209 -0.00788581 18.024 5.53268e-05 15.261C5.53268e-05 11.7209 1.39742 8.32586 3.88474 5.82266C6.37207 3.31947 9.7456 1.91318 13.2632 1.91318ZM13.2632 10.8117C12.0907 10.8117 10.9662 11.2805 10.1371 12.1149C9.30794 12.9493 8.84215 14.081 8.84215 15.261C8.84215 16.441 9.30794 17.5727 10.1371 18.4071C10.9662 19.2415 12.0907 19.7102 13.2632 19.7102C14.4357 19.7102 15.5602 19.2415 16.3894 18.4071C17.2185 17.5727 17.6843 16.441 17.6843 15.261C17.6843 14.081 17.2185 12.9493 16.3894 12.1149C15.5602 11.2805 14.4357 10.8117 13.2632 10.8117ZM35.3685 73.1014V64.2029H44.2106V73.1014H35.3685ZM17.6843 46.4058H8.84215V37.5073H17.6843V46.4058Z"
                                        fill="#10201F" />
                                </svg>

                                <p><span>L'itinéraire</span> si vous ne savez pas où le commerce se situe</p>
                            </div>
                        </div>
                    </div>
                    <Video />
                    <div className="arriveBientot">
                        <p>Application bientôt disponible sur </p>
                        <div className="logoDownload">
                            <img src={Google} alt="logo playstrore" />
                            <img src={Apple} alt="logo appstore" />
                        </div>
                    </div>
                    <div className="contact" id="contact">

                        <h2>Contactez-nous</h2>
                        <div className="contactContainer">
                            <div className="contactRS">
                                <p>Pour plus d'informations sur l'application</p>
                            </div>
                            <div className="contactForm">
                                <ContactForm />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home;