import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import pinkcode from './pinkcode.png'
import firebasee from './firebasee.png'



export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    firebasee,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    pinkcode
};

export const workData = [
    {
        title: 'Lynk Digital',
        description: 'Professional Digital Agency Website',
        bgImage: '/work-0.png',
        link: 'https://www.lynkdigital.co.in/'
    },

    {
        title: 'Columbus Tours',
        description: 'Travel and Tour Company Website',
        bgImage: '/work-1.png',
        link: 'https://www.columbustours.in/',
    },
    {
        title: 'ZyberWeave',
        description: 'Professional Company Website',
        bgImage: '/work-2.png',
        link: 'https://www.zyberweave.com/'
    },
    {
        title: 'Smart Gains',
        description: 'Professional Company Website',
        bgImage: '/work-3.png',
        link: 'https://www.smartgains.co.in/'
    },
     {
        title: 'YCIS Digital Locker',
        description: 'Digital Locker for College Students to upload Documents',
        bgImage: '/work-4.png',
        link: 'https://www.ycislocker.space/'
    },
    
];

export const personalProjectData = [
    {
        title: 'GreenKart',
        description: 'An online grocery shopping platform with seamless user experience.',
        TechStack: 'Next.js, Node.js, MongoDB, Tailwind CSS, Stripe, JWT',
        bgImage: '/personal-1.png',
        link: 'https://green-kart-frontend.vercel.app/'
    },
    {
        title: 'Blogging Platform',
        description: 'A dynamic content publishing website for writers and readers.',
        TechStack: 'Next.js, Node.js, MongoDB, Tailwind CSS, JWT',
        bgImage: '/personal-2.png',
        link: 'https://blogging-website-vercel.vercel.app/'
    },
    {
        title: 'Gemini Clone',
        description: 'An AI-powered chat assistant inspired by Google Gemini.',
        TechStack: 'Next.js, Node.js, MongoDB, Tailwind CSS, AI API, JWT',
        bgImage: '/personal-3.png',
        link: 'https://gemini-clone-blue-eight.vercel.app/'
    },
    {
        title: 'Healsync',
        description: 'A Full stack Site for Hospital Management.',
        TechStack: 'Next.js, Node.js, MongoDB, Tailwind CSS, JWT',
        bgImage: '/personal-4.png',
        link: 'https://heal-sync-rosy.vercel.app/'
    },
];

export const serviceData = [
    {
        icon: assets.web_icon,
        title: 'Web Development',
        description: 'Building responsive, high-performance web applications using modern frameworks like Next.js and Node.js.',
    },
    {
        icon: assets.ui_icon,
        title: 'UI/UX Design',
        description: 'Designing clean and intuitive user interfaces focused on seamless user experiences using tools like Figma.',
    },
    {
        icon: assets.graphics_icon,
        title: 'Graphic Design',
        description: 'Creating eye-catching visuals and brand assets that enhance digital presence and engagement.',
    },
    {
        icon: assets.pinkcode,
        title: 'API Development',
        description: 'Developing secure and scalable RESTful APIs to support dynamic and data-driven applications.',
    },
];


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Tech Stack', description: 'React Js/Next Js, MongoDB, Node.js, Express.js, HTML, CSS, TailWind CSS, JavaScript, TypeScript ' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Electronics and Telecommunication. Certification-Certified Ethical Hacker by EC-Council' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Scroll to see list of my projects' }
];

export const toolsData = [
    { image: assets.vscode, name: "VS Code" },
    { image: assets.firebase, name: "Postman" },
    { image: assets.firebasee, name: "Firebase" },
    { image: assets.mongodb, name: "MongoDB" },
    { image: assets.figma, name: "Figma" },
    { image: assets.git, name: "Git" },
];