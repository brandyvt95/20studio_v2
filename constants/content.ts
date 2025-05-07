


export const common = {
    infoContact: {
        phone: {
            display: "0969.168.629",
            href: "tel:0969168629"
        },
        mail: {
            display: "20studio.contact@gmail.com",
            href: "mailto:20studio.contact@gmail.com"
        }
    },
    listBtnUrl: {
        "Home": '/',
                "About us": '/about',
                "Project": '/projects',
                "Service": '/services',
                "Contact": '/contact',
                "Sustainability": '/sustainability'
    }
}


export const about_page = {
    propsForGsap: {
        scrollerRef: "#aboutpage",
        delayForBehindComponent: 1,
    },
    content: {

        heroSection: {
            scrollerRef: "#aboutpage",
            classAdd: "dark_background",
            backgroundImage: {
                url: "/images/about/banner.webp",
                size: { width: "100%", height: "auto" }
            },
            moreStyle: {},
            disableParaInro: false,
            paraIntro: ["We are a global creative fashion studio base in", "Ho Chi Minh city. We work with artist, designer and manufactures", "on clients projects to produce outstanding works."],
            tit: ["Fashion", "Creative", "Production"],
            morePara: "Beside designing and fashion production, 20Studio work on projects of all types including brand and product development, digital experience design, social media design, production management and fashion business solutions.",
            listBtn: ['Home', 'Project', 'Sustainability', 'Service', 'Contact'],
            btnMore: ['Our service', '/services'],
            infoContact: {
                phone: {
                    text: "0969.168.629",
                    link: "tel:0969168629"
                },
                mail: {
                    text: "20studio.contact@gmail.com",
                    link: "mailto:20studio.contact@gmail.com"
                }
            },
            listBtnUrl: {
                "Home": '/',
                "About us": '/about',
                "Project": '/projects',
                "Service": '/services',
                "Contact": '/contact',
                "Sustainability": '/sustainability'
            }

        },
        intro:{
            title: "Our mission",
            des: "20Studio is a fashion creative agency providing fashion business solutions, including Creative develop, Fashion management, Web develop and Digital design.",
            jobDes: [ 
                "Fashion Design","Fashion Production","Digital fashion development","IT","Visual Digital","Photographic"
            ]
        },
        advantage: {
            disableIndex: false,
            tag: "Our procedure",
            more: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            items: [
                ["Meet & Briefing", "Meet with the client to understand their needs, goals, and vision. Gather all necessary information and share initial ideas to ensure alignment."],
                ["Consulting & Quotation", "Provide expert advice and present a detailed quotation covering design, materials, and production costs. Finalize the contract once the client agrees."],
                ["Project Execution", "Begin the design and production process, collaborating with the client for approvals and ensuring quality throughout."],
                ["Final Review and Delivery", "Present the finished product, make any final adjustments, and deliver the project. Gather feedback and close the project."]
            ]

        },
        minded:{
            tag: "How we work",
            title:["A Fashion","Agency"],
            para:[
                `We’ve assembled a bespoke team of designers, innovators, manufactures and suppliers to work with
                    teams across a client’s organization to help them find new sources of growth, whether that’s
                    repositioning for new target audiences, innovating to create new products and services, improving
                    the core product or removing the barriers to growth that stand in way of long-term success.`,
                    `Partnering with clients on their journey to develop fashion brands, we assist in creating and
                    producing collections as well as supporting brand image management, business, and production.`
            ],
            qoute:`“With our market expertise and technology application, we can help clients turn their designs into
                reality”`
        },
        us:{
            tag:"The 20Studio",
            title:[
                "Design,",
                "Technology and",
                "Experimenttation"
            ],
            para:"We are a team* of like-minded design enthusiasts and tech aficionados that explore the digital frontier with grit and dedication. Intrigued by beauty, fascinated by technology and fuelled with an everlasting devotion to digital craftsmanship and meaningful aesthetics.",
            qoute:"*We believe in a fluid team approach that allows us to bring together the best designers, developers and agencies in the world in order to serve the needs of today’s clients."
        },
        letContact: {
            disableImg: true,
            disableTit: false,
            disableBtn: false,
            tag: "Contact us",
            tit: ["From", "vision", "to reality"],
            more: "Let's make dream come true.",
            btn: "Lett&apos;s touch!"
        },


    }
}
export const contact_page = {
    propsForGsap: {
        scrollerRef: "#contactpage"
    },
    content: {
        intro : {
            tag:"Contact",
            des:"Ready to take off? Message, tweet, or text us, and we will get back to you as soon as possible.",
            mail:"20studio.contact@gmail.com",
            phone:"0969.168.629",
            location:[
                "340D Hoang Van Thu Street,",
                "Ward 4, Tan Binh District,",
                "Ho Chi Minh City, Viet Nam."
            ],
            more:"Xem bản đồ"
        }
    }
}
export const home_page = {
    propsForGsap: {
        scrollerRef: "#homepage"
    },
    content: {

        heroSection: {
            scrollerRef: "#homepage",
            classAdd: "dark_background",
            moreStyle: {},
            backgroundImage: {
                url: "/images/home/banner.png",
                size: { width: "100%", height: "auto" }
            },
            disableParaInro: true,
            paraIntro: ["We are a global creative fashion studio base in", "Ho Chi Minh city. We work with artist, designer and manufactures", "on clients projects to produce outstanding works."],
            tit: ["Fashion", "Creative", "Production"],
            morePara: "Beside designing and fashion production, 20Studio work on projects of all types including brand and product development, digital experience design, social media design, production management and fashion business solutions.",
            listBtn: ['About us', 'Sustainability', 'Project', 'Service', 'Contact'],
            btnMore: ['Explore our services', '/services'],
            infoContact: {
                phone: {
                    text: "0969.168.629",
                    link: "tel:0969168629"
                },
                mail: {
                    text: "20studio.contact@gmail.com",
                    link: "mailto:20studio.contact@gmail.com"
                }
            },
            listBtnUrl: {
                "Home": '/',
                "About us": '/about',
                "Project": '/projects',
                "Service": '/services',
                "Contact": '/contact',
                "Sustainability": '/sustainability'
            }
        },
        serviceSection: {
            content: {
                title: "Project",
                tag: "Project list",
                des: "Projects are pleased to accompany customers in the past year."
            },
            works: [
                {
                    clientName: "Chinh’s Major Project",
                    jobDes: "Sample Development",
                    img: "/images/clone/services1.webp"
                },
                {
                    clientName: "Nét Project",
                    jobDes: "Sample Development",
                    img: "/images/clone/services2.webp"
                },
                {
                    clientName: "Lung Tung",
                    jobDes: "Fashion Design",
                    img: "/images/clone/services3.webp"
                },
                {
                    clientName: "20Studio",
                    jobDes: "Website Development",
                    img: "/images/clone/services4.webp"
                }
            ]
        },
        faqSection: {
            content: [
                {
                    ques: "What is the lead time of sample develop?",
                    ans: "Sample preparation time will depend on the complexity of the sample, but will usually last from 2 to 5 days."
                },
                {
                    ques: "What is the production leadtime?",
                    ans: "It depend on the quantity and complexity of the order. Normally takes 5 to 14 working days to be done."
                },
                {
                    ques: "What information do I need to provide?",
                    ans: "You will be provide a form to fill in, the information will be on quality, quantity, specs and construction details."
                },
                {
                    ques: "What are services that 20Studio provide?",
                    ans: "We focus on providing fashion design, fashion mass production, image production, website development, marketing strategies and fashion business solutions."
                }
            ]
        },
        letContact: {
            disableImg: false,
            disableTit: false,
            disableBtn: false,
            tag: "Contact us",
            tit: ["From", "vision", "to reality"],
            more: "Let's make dream come true.",
            btn: "Lett&apos;s touch!"
        }

    }
}
export const service_page = {
    propsForGsap: {
        scrollerRef: "#servicepage"
    },
    content: {
        intro:{
            tag:"Service",
            des:"We transform Fashion businesses by solving upstream challenges to unlock new growth opportunities.",
            jobDes:[
                "Design","Develop","Direct","Digital","Production"
            ]

        },
        letContact: {
            disableImg: true,
            disableTit: false,
            disableBtn: false,
            tag: "Contact us",
            tit: ["From", "vision", "to reality"],
            more: "Let's make dream come true.",
            btn: "Lett&apos;s touch!"
        }
    }
}
export const sustainability_page = {
    propsForGsap: {
        scrollerRef: "#sustainabilitypage"
    },
    content: {
        advantage: {
            disableIndex: false,
            tag: "Our solution for sustainability",
            more: "To be sustainable, we are committed to offering eco-friendly solutions that align with your budget and your values, in creative ways than spending money.",
            items: [
                ["Application of Tech", "Deep down, we are a tech-enable fashion company, leverge tech and creative ideas to thrive and to make a sustainable business."],
                ["Optimize Procedures", "No need to spend on fancy industrial equipments, or over-budget materials, we look into the workflow between us and our customers to cut-off unneccessery steps and make it align as possible."],
                ["Design toward Efficient", "Right at the beginning of the process, we work together with our customers to create the most efficient design and construction solutions."],
                ["Equaly Benefit for all Stakeholders", "Thinking of our customers, suppliers, and workers, we continuously seek ways to create the most value for everyone involved in the process. Our goal is to ensure that each stakeholder benefits from our commitment to excellence and collaboration."]
            ]

        },
        intro: {
            disableImg: true,
            disableTit: false,
            disableBtn: true,
            tag: "Sustainability",
            tit: ["Sustainability", "in", "every attemps"],
            more: "Sustainable is hard, especially for those who not have deep pocket. At 20Studio, we understand the concern toward sustainability of our customer and strive to make it accessible without compromising on quality or style. We believe that sustainability shouldn't be a luxury, but a standard that everyone can afford.",

        },
        letContact: {
            disableImg: true,
            disableTit: true,
            disableBtn: false,
            tag: "20 Sustainability",
            tit: "",
            more: "We strive to be sustainable in every effort we make because we believe Even the smallest effort can make a better world.",
            btn: "Let’s build it!"
        }
    }
}
export const project1_page = {
    propsForGsap: {
        scrollerRef: "#work1page"
    },
    content: {

        introWorkPage: {
            mission: ["Sample management"],
            scrollerRef: "#work1page",
            img: [
                "/clone/services1.webp",
                "image_cache_services1"
            ],
            name: ["Unwanted", "Project"],
            des: "The beauty of Vietnamese calligraphy is expressed in fashion through techniques like hand-embellishment, deconstructing the traditional male áo dài, reassembling with metal rings, and multi-material weaving, creating a unique story in each outfit.",
            challenge: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            role: ["Fashion Develop", "Prototyping", "Sourcing", "Consulting"],
            date: "Jan 2023 - 3 weeks",
            client: "Fashion Designer Bui Dong Duy",
            infoProject: "Personal Prject of Bui Dong Duy",
            desProject: "Personal Prject of Bui Dong Duy"
        },
        gridImageSlider: {
            img: [
                "/work1/1.png",
                "/work1/2.png",
                "/work1/3.png",
                "/work1/4.png",
                "/work1/5.png",
                "/work1/6.png",
                "/work1/7.png",
                "/work1/8.png",
            ],
            img2: [
                "/work1/4.png",
                "/work1/7.png",
                "/work1/5.png",
                "/work1/8.png",
                "/work1/2.png",
            ],
            imgOrigin: [
                "/work1/origin/1.png",
                "/work1/origin/2.png",
                "/work1/origin/3.png",
                "/work1/origin/4.png",
                "/work1/origin/5.png",
                "/work1/origin/6.png",
            ]
        }
    }
}
export const project2_page = {
    propsForGsap: {
        scrollerRef: "#work2page"
    },
    content: {
        introWorkPage: {
            mission: ["Sample management"],
            scrollerRef: "#work2page",
            img: [
                "/clone/services2.webp",
                "image_cache_services2"
            ],
            name: ["Nét", "Collection"],
            des: "The beauty of Vietnamese calligraphy is expressed in fashion through techniques like hand-embellishment, deconstructing the traditional male áo dài, reassembling with metal rings, and multi-material weaving, creating a unique story in each outfit.",
            challenge: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            role: ["Fashion Develop", "Prototyping", "Sourcing", "Consulting"],
            date: "Jan 2023 - 3 weeks",
            client: "Fashion Designer Huynh Anh Thu",
            infoProject: "Personal Prject of Huynh Anh Thu",
            desProject: "Personal Prject of Huynh Anh Thu"
        },
        gridImageSlider: {
            img: [
                "/work2/5.png",
                "/work2/3.png",
                "/work2/6.png",
                "/work2/4.png",
                "/work2/1.png",
                "/work2/2.png",

            ],
            img2: [
                "/work2/7.png",
                "/work2/8.png",
                "/work2/9.png",
                "/work2/10.png",
                "/work2/12.png",
            ],
            imgOrigin: [
                "/work2/origin/1.png",
                "/work2/origin/2.png",
                "/work2/origin/3.png",
                "/work2/origin/4.png",
                "/work2/origin/5.png",
                "/work2/origin/6.png",
            ]
        }
    }
}
export const project3_page = {
    propsForGsap: {
        scrollerRef: "#work3page"
    },
    content: {
        introWorkPage: {
            mission: ["Production management"],
            scrollerRef: "#work3page",
            img: [
                "/clone/services3.webp",
                "image_cache_services3"
            ],
            name: ["Lungtung", "Collection 2"],
            des: "The beauty of Vietnamese calligraphy is expressed in fashion through techniques like hand-embellishment, deconstructing the traditional male áo dài, reassembling with metal rings, and multi-material weaving, creating a unique story in each outfit.",
            challenge: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            role: ["Fashion Develop", "Prototyping", "Sourcing", "Consulting"],
            date: "Jan 2023 - 3 weeks",
            client: "Lungtung Studio",
            infoProject: "Lungtung Second Collection",
            desProject: "Spring Summer 2024"
        },
        gridImageSlider: {
            img: [
                "/work3/1.png",
                "/work3/2.png",
                "/work3/3.png",
                "/work3/4.png",
                "/work3/5.png",
                "/work3/6.png",
            ],
            img2: [
                "/work3/7.png",
                "/work3/8.png",
                "/work3/9.png",
                "/work3/12.png",
                "/work3/10.png",
            ],
            imgOrigin: [
                "/work3/origin/1.png",
                "/work3/origin/2.png",
                "/work3/origin/3.png",
                "/work3/origin/4.png",
                "/work3/origin/5.png",
                "/work3/origin/6.png",
            ]
        }
    }
}
export const project4_page = {
    propsForGsap: {
        scrollerRef: "#work4page"
    },
    content: {
        introWorkPage: {
            mission: ["Web Development"],
            scrollerRef: "#work4page",
            img: [
                "/clone/services4.webp",
                "image_cache_services4"
            ],
            name: ["20Studio", "Website"],
            des: "The beauty of Vietnamese calligraphy is expressed in fashion through techniques like hand-embellishment, deconstructing the traditional male áo dài, reassembling with metal rings, and multi-material weaving, creating a unique story in each outfit.",
            challenge: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            role: ["Fashion Develop", "Prototyping", "Sourcing", "Consulting"],
            date: "Jan 2023 - 123 weeks",
            client: "20Studio Brand"
        }
    }
}

export const projects_page = [
    {
        slug:'uwanted',
        brand:"Unwanted Project",
        jobDes:"Sample management",
        thumb:"/images/clone/services1.webp",
        background:"/images/clone/services1.webp",
        detail: {
            mission: ["Sample management"],
            scrollerRef: "#work1page",
            img: [
                "/images/clone/services1.webp",
                "image_cache_services1"
            ],
            name: ["Unwanted", "Project"],
            des: "The beauty of Vietnamese calligraphy is expressed in fashion through techniques like hand-embellishment, deconstructing the traditional male áo dài, reassembling with metal rings, and multi-material weaving, creating a unique story in each outfit.",
            challenge: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            role: ["Fashion Develop", "Prototyping", "Sourcing", "Consulting"],
            date: "Jan 2023 - 3 weeks",
            client: "Fashion Designer Bui Dong Duy",
          
        },
        gallery: {
              infoProject: "Personal Prject of Bui Dong Duy",
            desProject: "Personal Prject of Bui Dong Duy",
            img: [
                "/images/work1/1.png",
                "/images/work1/2.png",
                "/images/work1/3.png",
                "/images/work1/4.png",
                "/images/work1/5.png",
                "/images/work1/6.png",
                "/images/work1/7.png",
                "/images/work1/8.png",
            ],
            img2: [
                "/images/work1/4.png",
                "/images/work1/7.png",
                "/images/work1/5.png",
                "/images/work1/8.png",
                "/images/work1/2.png",
            ],
            imgOrigin: [
                "/images/work1/origin/1.png",
                "/images/work1/origin/2.png",
                "/images/work1/origin/3.png",
                "/images/work1/origin/4.png",
                "/images/work1/origin/5.png",
                "/images/work1/origin/6.png",
            ]
        }
    },
    {
        slug:'net-collection',
        brand:"Nét Collection",
        jobDes:"Sample management",
        thumb:"/images/clone/services2.webp",
        background:"/images/clone/services2.webp",
        detail: {
            mission: ["Sample management"],
            scrollerRef: "#work2page",
            img: [
                "/images/clone/services2.webp",
                "image_cache_services2"
            ],
            name: ["Nét", "Collection"],
            des: "The beauty of Vietnamese calligraphy is expressed in fashion through techniques like hand-embellishment, deconstructing the traditional male áo dài, reassembling with metal rings, and multi-material weaving, creating a unique story in each outfit.",
            challenge: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            role: ["Fashion Develop", "Prototyping", "Sourcing", "Consulting"],
            date: "Jan 2023 - 3 weeks",
            client: "Fashion Designer Huynh Anh Thu",
            infoProject: "Personal Prject of Huynh Anh Thu",
            desProject: "Personal Prject of Huynh Anh Thu"
        },
        gallery: {
            img: [
                "/images/work2/5.png",
                "/images/work2/3.png",
                "/images/work2/6.png",
                "/images/work2/4.png",
                "/images/work2/1.png",
                "/images/work2/2.png",

            ],
            img2: [
                "/images/work2/7.png",
                "/images/work2/8.png",
                "/images/work2/9.png",
                "/images/work2/10.png",
                "/images/work2/12.png",
            ],
            imgOrigin: [
                "/images/work2/origin/1.png",
                "/images/work2/origin/2.png",
                "/images/work2/origin/3.png",
                "/images/work2/origin/4.png",
                "/images/work2/origin/5.png",
                "/images/work2/origin/6.png",
            ]
        }
    },
    {
        slug:"lungtung-collection",
        brand:"Lung Tung Collection 2",
         jobDes:"Production management",
        thumb:"/images/clone/services3.webp",
        background:"/images/clone/services3.webp",
        detail:{
            mission: ["Production management"],
            scrollerRef: "#work3page",
            img: [
                "/images/clone/services3.webp",
                "image_cache_services3"
            ],
            name: ["Lungtung", "Collection 2"],
            des: "The beauty of Vietnamese calligraphy is expressed in fashion through techniques like hand-embellishment, deconstructing the traditional male áo dài, reassembling with metal rings, and multi-material weaving, creating a unique story in each outfit.",
            challenge: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            role: ["Fashion Develop", "Prototyping", "Sourcing", "Consulting"],
            date: "Jan 2023 - 3 weeks",
            client: "Lungtung Studio",
            infoProject: "Lungtung Second Collection",
            desProject: "Spring Summer 2024"
        },
        gallery: {
            img: [
                "/images/work3/1.png",
                "/images/work3/2.png",
                "/images/work3/3.png",
                "/images/work3/4.png",
                "/images/work3/5.png",
                "/images/work3/6.png",
            ],
            img2: [
                "/images/work3/7.png",
                "/images/work3/8.png",
                "/images/work3/9.png",
                "/images/work3/12.png",
                "/images/work3/10.png",
            ],
            imgOrigin: [
                "/images/work3/origin/1.png",
                "/images/work3/origin/2.png",
                "/images/work3/origin/3.png",
                "/images/work3/origin/4.png",
                "/images/work3/origin/5.png",
                "/images/work3/origin/6.png",
            ]
        }
    },
    {
        slug:"20studio-website",
        brand:"20 Studio Website",
        jobDes:"Web development",
        thumb:"/images/clone/services4.webp",
        background:"/images/clone/services4.webp",
        detail: {
            mission: ["Web Development"],
            scrollerRef: "#work4page",
            img: [
                "/images/clone/services4.webp",
                "image_cache_services4"
            ],
            name: ["20Studio", "Website"],
            des: "The beauty of Vietnamese calligraphy is expressed in fashion through techniques like hand-embellishment, deconstructing the traditional male áo dài, reassembling with metal rings, and multi-material weaving, creating a unique story in each outfit.",
            challenge: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            role: ["Fashion Develop", "Prototyping", "Sourcing", "Consulting"],
            date: "Jan 2023 - 123 weeks",
            client: "20Studio Brand"
        },
        gallery:{
            img: [
            ],
            img2: [
            ],
            imgOrigin: [
            ]
        }
    }
]