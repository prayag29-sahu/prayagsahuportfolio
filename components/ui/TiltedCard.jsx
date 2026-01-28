

'use client';

import { useState, useRef, useEffect } from 'react';
import {
    RiFacebookLine,
    RiInstagramLine,
    RiTwitterXLine,
    RiLinkedinLine,
    RiGithubLine,
    RiAddLine,
    RiPhoneLine,
    RiCloseLine,
} from 'react-icons/ri';
import Image from 'next/image';

export default function PortfolioCard({
    imageSrc,
    name,
    role,
}) {
    const [open, setOpen] = useState(true);
    const cardRef = useRef(null);

    /* SCROLL OBSERVER */
    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('in-view');
                } else {
                    el.classList.remove('in-view');
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* INTERNAL CSS */}
            <style>{`
        .portfolio-card {
            width: 350px;
            height: 220px;
            background: rgba(110, 160, 70, 0.9);
            border-radius: 20px;
            box-shadow: 0 35px 80px rgba(0,0,0,.15);
            position: relative;
            transition: height .5s;

          /* SCROLL ANIMATION DEFAULT */
            opacity: 0;
            transform: translateY(60px) scale(0.98);
            transition:
            opacity .8s ease,
            transform .8s ease;
        }

        .portfolio-card.in-view {
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        .portfolio-card:hover {
            height: 320px;
        }
        .imgBx {
            position: absolute;
            left: 50%;
            top: -90px;
            transform: translateX(-50%);
            width: 200px;
            height: 200px;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            transition: .5s;
            /* GREEN BORDER HIGHLIGHT */
            border: 2px solid rgba(110, 160, 70, 0.9);
            /* SOFT GLOW EFFECT */
            box-shadow:
                0 15px 50px rgba(0,0,0,.5),
                0 0 12px rgba(110, 160, 70, 0.35);
        }


        .portfolio-card:hover .imgBx {
            width: 250px;
            height: 250px;
        }

        .imgBx img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .details {
            transform: translateY(90px);
            transition: .6s;
        }

        .portfolio-card:hover .details {
            transform: translateY(30px);
        }

        .social-card {
            width: 290px;
            height: 52px;
            background: #111;
            padding: 8px 12px;
            border-radius: 999px;
            position: absolute;
            bottom: -26px;
            left: 0;
            right: 0;
            margin: auto;
        
            display: flex;
            align-items: center;
        
            /* 🔥 BOTTOM HIGHLIGHT */
            border-bottom: 2px solid rgba(110, 160, 70, 0.9);
        
            /* subtle glow */
            box-shadow:
            0 6px 14px rgba(110, 160, 70, 0.25),
            inset 0 -1px 0 rgba(190, 255, 120, 0.2);
        }
        
        /* PHONE RING PULSE */
        .phone-ring::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 999px;
            background: rgba(110, 160, 70, 0.4);
            animation: ringPulse 1.8s infinite ease-out;
        }

        /* VIBRATION */
        .phone-vibrate {
            animation: vibrate 2.5s infinite;
        }

        /* Ring pulse animation */
        @keyframes ringPulse {
            0% {
            transform: scale(1);
            opacity: 0.6;
            }
            70% {
            transform: scale(1.6);
            opacity: 0;
            }
            100% {
            opacity: 0;
            }
        }

        /* Vibrate animation */
        @keyframes vibrate {
            0% { transform: translateX(0); }
            2% { transform: translateX(-1px); }
            4% { transform: translateX(1px); }
            6% { transform: translateX(-1px); }
            8% { transform: translateX(1px); }
            10% { transform: translateX(0); }
            100% { transform: translateX(0); }
        }


        .social-control {
            transition: .45s ease;
            transform-origin: 18px 18px;
        }

        .social-open .social-control {
            transform: rotate(-135deg);
        }

        @keyframes up {
            0%,100% { transform: rotate(0); }
            50%,60% { transform: rotate(-3deg); }
            88% { transform: rotate(1deg); }
        }

        @keyframes down {
            0%,100% { transform: rotate(0); }
            50%,60% { transform: rotate(6deg); }
            88% { transform: rotate(-1deg); }
        }

        .bounce-up { animation: up 1s ease-in-out forwards; }
        .bounce-down { animation: down 1s ease-in-out forwards; }
        `}</style>
            <div className='mt-20 mb-10' >
                <div ref={cardRef} className="portfolio-card ">

                    {/* IMAGE */}
                    <div className="imgBx">
                        <Image src={imageSrc} alt={name} width={1024} height={980} />
                    </div>

                    {/* CONTENT */}
                    <div className="absolute inset-0 flex items-end justify-center">
                        <div className="details text-center p-10 w-full text-white">
                            <h2 className="text-xl font-semibold">
                                {name}
                                <br />
                                <span className="text-lg opacity-60">{role}</span>
                            </h2>

                            <div className="flex justify-between my-5 mt-2 pb-3 text-black">
                                <div>
                                    <h3 className="font-bold">2+</h3>
                                    <span className="text-sm opacity-60">Hackathons</span>
                                </div>
                                <div>
                                    <h3 className="font-bold">2</h3>
                                    <span className="text-sm opacity-60">Internships</span>
                                </div>
                                <div>
                                    <h3 className="font-bold">6 months</h3>
                                    <span className="text-sm opacity-60">Experience</span>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* SOCIAL */}
                    {/* SOCIAL */}
                    <div className="social-card">
                        <div className="social-control flex items-center gap-3">

                            {/* TOGGLE BUTTON */}
                            <button
                                onClick={() => setOpen(!open)}
                                className="w-9 h-9 rounded-full
      flex items-center justify-center
      text-black text-xl shrink-0
      transition-transform duration-300"
                                style={{
                                    backgroundColor: 'rgba(110, 160, 70, 0.9)',
                                    transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                                }}
                            >
                                <RiAddLine />
                            </button>

                            {/* TEXT (WHEN CLOSED) */}
                            {!open && (
                                <span
                                    className="text-sm font-medium whitespace-nowrap
        transition-opacity duration-300"
                                    style={{ color: 'rgba(110, 160, 70, 0.9)' }}
                                >
                                    Social Media Accounts
                                </span>
                            )}

                            {/* SOCIAL ICONS (WHEN OPEN) */}
                            <div
                                className={`flex items-center gap-6 transition-all duration-300
      ${open
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-3 pointer-events-none absolute'
                                    }`}
                            >
                                <SocialIcon href="https://www.linkedin.com/in/prayag-sahu29">
                                    <RiLinkedinLine />
                                </SocialIcon>

                                <SocialIcon href="https://github.com/prayag29-sahu">
                                    <RiGithubLine />
                                </SocialIcon>

                                <SocialIcon href="https://facebook.com">
                                    <RiFacebookLine />
                                </SocialIcon>

                                {/* <SocialIcon href="https://instagram.com">
                                <RiInstagramLine />
                            </SocialIcon> */}

                                <SocialIcon href="https://twitter.com">
                                    <RiTwitterXLine />
                                </SocialIcon>
                            </div>

                        </div>
                    </div>




                </div>
                {/* <div className="flex justify-between mt-10">
                    <button className="px-6 py-2 rounded-full bg-black"
                        style={{
                            color: 'rgba(110, 160, 70, 0.9)',
                            border: '2px solid rgba(110, 160, 70, 0.9)',
                            boxShadow: '0 0 8px rgba(110, 160, 70, 0.6)',
                        }}>
                        Hire Me
                    </button>
                    <a href="tel:+917999926855">
                        <button
                            className="px-6 py-2 rounded-full
    flex items-center gap-2
    text-black relative overflow-hidden
    phone-ring phone-vibrate"
                            style={{
                                backgroundColor: 'white',
                                color: 'rgba(110, 160, 70, 0.9)',
                                border: '2px solid rgba(110, 160, 70, 0.9)',
                                boxShadow: '0 0 8px rgba(110, 160, 70, 0.6)',
                            }}
                        >
                            <RiPhoneLine className="text-lg relative z-10" />
                            Call
                        </button>
                    </a>



                </div> */}
            </div>
            <div className="flex justify-between mt-20">
                <button className="px-6 py-2 rounded-full bg-black"
                    style={{
                        color: 'rgba(110, 160, 70, 0.9)',
                        border: '2px solid rgba(110, 160, 70, 0.9)',
                        boxShadow: '0 0 8px rgba(110, 160, 70, 0.6)',
                    }}>
                    Hire Me
                </button>
                <a href="tel:+917999926855">
                    <button
                        className="px-6 py-2 rounded-full
    flex items-center gap-2
    text-black relative overflow-hidden
    phone-ring phone-vibrate"
                        style={{
                            backgroundColor: 'white',
                            color: 'rgba(110, 160, 70, 0.9)',
                            border: '2px solid rgba(110, 160, 70, 0.9)',
                            boxShadow: '0 0 8px rgba(110, 160, 70, 0.6)',
                        }}
                    >
                        <RiPhoneLine className="text-lg relative z-10" />
                        Call
                    </button>
                </a>



            </div>
        </>
    );
}
function SocialIcon({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            className="w-8 h-8 rounded-full
      flex items-center justify-center
      transition-transform duration-300
      hover:scale-110"
            style={{
                backgroundColor: '#fff',
                color: 'rgba(110, 160, 70, 0.9)',
            }}
        >
            {children}
        </a>
    );
}


// for android but not best
{/* ================= MOBILE VERSION ================= */ }
{/* <div className="lg:hidden px-4 py-16">
    <div
        className="w-full max-w-sm mx-auto rounded-2xl
    bg-[rgba(110,160,70,0.9)]
    shadow-xl relative
    transition-all duration-500"
    >

        <div className="relative -top-14 flex justify-center">
            <div
                className="w-36 h-36 rounded-2xl bg-white overflow-hidden"
                style={{
                    border: '2px solid rgba(110,160,70,0.9)',
                    boxShadow: '0 0 12px rgba(110,160,70,.5)',
                }}
            >
                <img
                    src={imageSrc}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>


        <div className="pt-20 px-6 pb-6 text-center text-white">
            <h2 className="text-xl font-semibold">
                {name}
            </h2>
            <p className="text-base opacity-80 mt-1">
                {role}
            </p>

 
            <div className="flex justify-between mt-6 text-black">
                <div>
                    <h3 className="font-bold">5+</h3>
                    <span className="text-xs opacity-60">Projects</span>
                </div>
                <div>
                    <h3 className="font-bold">2</h3>
                    <span className="text-xs opacity-60">Internships</span>
                </div>
                <div>
                    <h3 className="font-bold">6 mo</h3>
                    <span className="text-xs opacity-60">Experience</span>
                </div>
            </div>

            <div className="flex gap-3 mt-6">
                <button
                    className="flex-1 py-2 rounded-full bg-black text-sm"
                    style={{
                        color: 'rgba(110,160,70,0.9)',
                        border: '2px solid rgba(110,160,70,0.9)',
                    }}
                >
                    Hire Me
                </button>

                <a href="tel:+917999926855" className="flex-1">
                    <button
                        className="w-full py-2 rounded-full
            flex items-center justify-center gap-2
            bg-white text-sm relative overflow-hidden
            phone-ring"
                        style={{
                            color: 'rgba(110,160,70,0.9)',
                            border: '2px solid rgba(110,160,70,0.9)',
                        }}
                    >
                        <RiPhoneLine className="text-lg z-10 relative" />
                        Call
                    </button>
                </a>
            </div>
        </div>

        <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2
      w-[92%] h-12 rounded-full bg-[#111]
      flex items-center gap-3 px-3"
            style={{
                borderBottom: '2px solid rgba(110,160,70,0.9)',
                boxShadow: '0 6px 14px rgba(110,160,70,.25)',
            }}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-9 h-9 rounded-full
        flex items-center justify-center text-black"
                style={{
                    backgroundColor: 'rgba(110,160,70,0.9)',
                    transform: open ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform .3s',
                }}
            >
                <RiAddLine />
            </button>

            {!open && (
                <span
                    className="text-xs"
                    style={{ color: 'rgba(110,160,70,0.9)' }}
                >
                    Social Media Accounts
                </span>
            )}

            {open && (
                <div className="flex items-center gap-3 ml-auto">
                    <SocialIcon href="https://www.linkedin.com/in/your-profile">
                        <RiLinkedinLine />
                    </SocialIcon>
                    <SocialIcon href="https://github.com/your-username">
                        <RiGithubLine />
                    </SocialIcon>
                    <SocialIcon href="https://instagram.com">
                        <RiInstagramLine />
                    </SocialIcon>
                </div>
            )}
        </div>

    </div>
</div> */}
