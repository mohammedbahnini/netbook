export default function Footer() {
    const socialLinks =
        [
            {
                icon: <i class="fa-brands fa-twitter"></i>,
                link: '#'
            },
            {
                icon: <i class="fa-brands fa-instagram"></i>,
                link: '#'
            },
            {
                icon: <i class="fa-brands fa-facebook-f"></i>,
                link: '#'
            },
            {
                icon: <i class="fa-brands fa-linkedin-in"></i>,
                link: '#'
            }
        ]

    const footerLinks =
        [
            {
                title: 'Home',
                links: ['Home', 'Community', 'Events', 'Contact']
            } , 
            {
                title: 'Resources',
                links: ['Blog', 'News', 'Guides', 'Help Center']
            },
            {
                title: 'Community',
                links: ['NewsFeed', 'Profile', 'Friends', 'Forums']
            } , 
            {
                title: 'Main links',
                links: ['Members', 'Activity', 'Groups', 'Private Group']
            }
        ]
    return (
        <footer className="bg-grayish-blue">
            <div className="container">

                <div className="flex pt19 pb19">

                    <div className="flex1 flex col-gap16">
                        {
                            footerLinks.map((item, i) => (
                                <div>
                                    <h3 className="text-white fw500 fs5 mb5">{item.title}</h3>
                                    <ul>
                                        {item.links.map((link, j) => (
                                            <li>
                                                <a href="#" className="text-pale-gray" style={{lineHeight:'2.875em'}}>{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                    <div className="max-w85">
                        <p className="text-white fs5 max-w45 mb4" style={{ lineHeight: '1.6em' }}>Subscribe Cirkle Newsletter</p>
                        <p className="text-pale-gray mb8" style={{ lineHeight: '1.75em' }}>Subscribe to be the first one to know about updates. Enter your email</p>
                        <div className="flex outline1 outline-offset-1 outline-white radius3">
                            <input type="text" name="" id="" className="flex1 bg-transparent ml6 outline0 text-white" placeholder="Email Address" style={{ border: 'none' }} />
                            <button className="btn text-black bg-white radius3 py4 px8">Subscribe</button>
                        </div>
                    </div>
                </div>


            </div>
            <div className="bg-very-grayish-blue py8">

                <div className="container">

                    <div className="flex jc-space-between ai-center">
                        <span className="text-white fs3">Besnik Creative Agency.</span>
                        <img src="/images/logo-white.svg" alt="" className="w36" />
                        <ul className="flex col-gap2">
                            {
                                socialLinks.map((item, i) => (
                                    <li>
                                        <a href={item.link} className="bg-white rounded w9 h9 block flex ai-center jc-center text-very-grayish-blue fs5">{item.icon}</a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>

            </div>
        </footer>
    )
}