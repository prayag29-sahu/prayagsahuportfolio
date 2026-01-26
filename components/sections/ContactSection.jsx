




// export default function Contact() {
//     return (


//         <section
//             id="contact"
//             className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
//         >
//             <div className="container mx-auto px-6 lg:px-8">
//                 <div className="max-w-7xl mx-auto">

//                     {/* Heading */}
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                             Let&apos;s{" "}
//                             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                                 Connect
//                             </span>
//                         </h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                             Ready to bring your next project to life? I&apos;m always excited to discuss
//                             new opportunities and collaborate on innovative solutions.
//                         </p>
//                     </div>

//                     <div className="grid lg:grid-cols-2 gap-16 items-start">

//                         {/* LEFT SIDE */}
//                         <div className="space-y-8">

//                             {/* CONTACT INFO CARD */}
//                             <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//                                 <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                                     Get In Touch
//                                 </h3>

//                                 <div className="space-y-6">

//                                     {/* Email */}
//                                     <ContactItem
//                                         bg="bg-blue-50"
//                                         iconBg="bg-blue-600"
//                                         title="Email"
//                                         value="hello@yourportfolio.com"
//                                     />

//                                     {/* Phone */}
//                                     <ContactItem
//                                         bg="bg-green-50"
//                                         iconBg="bg-green-600"
//                                         title="Phone"
//                                         value="+1 (555) 123-4567"
//                                     />

//                                     {/* Location */}
//                                     <ContactItem
//                                         bg="bg-purple-50"
//                                         iconBg="bg-purple-600"
//                                         title="Location"
//                                         value="San Francisco, CA"
//                                     />
//                                 </div>
//                             </div>

//                             {/* SOCIAL ICONS */}
//                             <div className="flex space-x-4">
//                                 <SocialButton />
//                                 <SocialButton dark />
//                                 <SocialButton twitter />
//                             </div>
//                         </div>

//                         {/* RIGHT SIDE */}
//                         <div className="space-y-8">

//                             {/* IMAGE */}
//                             <img
//                                 src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/contact/contact-illustration-4e363e91ea0a4be0a098a831064be11d.png"
//                                 alt="Contact illustration"
//                                 className="w-full rounded-2xl object-cover shadow-sm"
//                             />

//                             {/* CONTACT FORM */}
//                             <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//                                 <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                                     Send a Message
//                                 </h3>

//                                 <form className="space-y-6">

//                                     <div className="grid md:grid-cols-2 gap-6">
//                                         <Input label="Full Name" placeholder="Your name" />
//                                         <Input label="Email Address" placeholder="your@email.com" />
//                                     </div>

//                                     <Input label="Subject" placeholder="Project inquiry" />

//                                     <div>
//                                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                             Message
//                                         </label>
//                                         <textarea
//                                             rows="5"
//                                             className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                                             placeholder="Tell me about your project..."
//                                         />
//                                     </div>

//                                     <button
//                                         type="submit"
//                                         className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition transform hover:scale-105"
//                                     >
//                                         Send Message
//                                     </button>

//                                 </form>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
// function ContactItem({ bg, iconBg, title, value }) {
//     return (
//         <div className={`flex items-center space-x-4 p-4 ${bg} rounded-2xl`}>
//             <div className={`w-12 h-12 ${iconBg} rounded-xl`} />
//             <div>
//                 <p className="font-semibold text-gray-900">{title}</p>
//                 <p className="text-gray-600">{value}</p>
//             </div>
//         </div>
//     );
// }

// function Input({ label, placeholder }) {
//     return (
//         <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 {label}
//             </label>
//             <input
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder={placeholder}
//             />
//         </div>
//     );
// }

// function SocialButton({ dark, twitter }) {
//     let bg = "bg-blue-600 hover:bg-blue-700";
//     if (dark) bg = "bg-gray-900 hover:bg-gray-800";
//     if (twitter) bg = "bg-blue-400 hover:bg-blue-500";

//     return (
//         <a
//             href="#"
//             className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center transition transform hover:scale-110`}
//         />
//     );
// }







'use client';

import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Twitter,
    Send
} from "lucide-react";
import ParallaxSection from "@/components/ui/ParallaxSection";
export default function Contact() {
    return (
        <ParallaxSection
            // backgroundImage="/img/img1.jpeg"
            backgroundImage="/images/bg1.png"
            height="400px"
        >
            <section
                id="contact"
                className="py-24  relative overflow-hidden"
            >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-7xl mx-auto">

                        {/* Heading */}
                        <div className="text-center mb-16">

                            <div
                                className={`w-full lg:px-[12%] px-[5%]  flex flex-col justify-center items-center 
  `}                            >

                                <div className="flex items-center justify-center gap-6 mb-4">

                                    {/* LEFT LINE */}
                                    <div
                                        className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-r from-transparent via-cyan-400 to-blue-400`}
                                    ></div>

                                    {/* TITLE */}
                                    <h1
                                        className={`text-3xl sm:text-4xl md:text-5xl  font-extrabold tracking-wide drop-shadow-lg transition-all bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}
                                    >
                                        <h2 className="text-4xl md:text-5xl font-bold text-white ">
                                            Let&apos;s{" "}
                                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                                Build Something Great
                                            </span>
                                        </h2>
                                    </h1>
                                    {/* RIGHT LINE */}
                                    <div
                                        className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-l from-transparent vvia-cyan-400 to-blue-400`}
                                    ></div>
                                </div>
                            </div>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Looking for a reliable full stack developer or freelancer?
                                I&apos;m open to job opportunities, freelance projects, and
                                long-term collaborations.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-start">

                            {/* LEFT SIDE */}
                            <div className="space-y-8">

                                {/* CONTACT INFO */}
                                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/10">
                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        Contact Information
                                    </h3>

                                    <div className="space-y-6">

                                        <ContactItem
                                            icon={<Mail />}
                                            title="Email"
                                            value="sahuprayag145@gmail.com"
                                        />

                                        <ContactItem
                                            icon={<Phone />}
                                            title="Phone"
                                            value="+91 79999 26855"
                                        />

                                        <ContactItem
                                            icon={<MapPin />}
                                            title="Location"
                                            value="Jabalpur, Madhya Pradesh, India"
                                        />

                                    </div>
                                </div>

                                {/* SOCIAL ICONS */}
                                <div className="flex space-x-4">
                                    <SocialButton icon={<Github />} />
                                    <SocialButton icon={<Linkedin />} />
                                    <SocialButton icon={<Twitter />} />
                                </div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="space-y-8">

                                {/* IMAGE */}
                                <img
                                    src="/images/contact.png"
                                    alt="Contact illustration"
                                    className="w-full rounded-2xl object-cover shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500"
                                />

                                {/* CONTACT FORM */}
                                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/10">
                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        Send a Message
                                    </h3>

                                    <form className="space-y-6">

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <Input label="Full Name" placeholder="Your name" />
                                            <Input label="Email Address" placeholder="your@email.com" />
                                        </div>

                                        <Input label="Subject" placeholder="Job / Freelance Project" />

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                rows="5"
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                                                placeholder="Tell me about your requirement..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition transform hover:scale-105"
                                        >
                                            Send Message
                                            <Send size={18} />
                                        </button>

                                    </form>
                                </div>
                            </div>

                        </div>

                        {/* FOOTER LINE */}
                        <div className="mt-20 text-center text-gray-400 text-sm">
                            © 2026 Prayag Sahu — Full Stack Developer & Freelancer
                        </div>

                    </div>
                </div>
            </section>
        </ParallaxSection>
    );
}

/* CONTACT ITEM */
function ContactItem({ icon, title, value }) {
    return (
        <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                {icon}
            </div>
            <div>
                <p className="font-semibold text-white">{title}</p>
                <p className="text-gray-300 text-sm">{value}</p>
            </div>
        </div>
    );
}

/* INPUT */
function Input({ label, placeholder }) {
    return (
        <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
                {label}
            </label>
            <input
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder={placeholder}
            />
        </div>
    );
}

/* SOCIAL BUTTON */
function SocialButton({ icon }) {
    return (
        <a
            href="#"
            className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-400 hover:scale-110 transition-all"
        >
            {icon}
        </a>
    );
}
