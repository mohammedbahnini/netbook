export default function Header() {

    const links = [
        {
            text: 'Home',
            isActive: true,
            hasSubMenu: false
        },
        {
            text: 'Community',
            isActive: false,
            hasSubMenu: false
        },
        {
            text: 'Blog',
            isActive: false,
            hasSubMenu: false
        },
        {
            text: 'Events',
            isActive: false,
            hasSubMenu: false
        }
    ]

    return (
        <>
            <header style={{ background: 'url(/images/base.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} >
                <div className="container py8">
                    <nav className="flex ai-center">
                        <a href="#" className="logo w36 block mr18">
                            <img src="/images/logo.svg" alt="Logo" />
                        </a>

                        <ul className="flex col-gap8 flex1">
                            {links.map((item, i) => (
                                <li key={i}>
                                    <a href="#" className={`${item.isActive ? 'text-dark-blue' : 'text-grayish-gray'} fw600`}>{item.text}</a>
                                </li>
                            ))}
                        </ul>

                        <div className="input">
                            <div className="flex">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder="Search Here..." className="flex1"
                                    onFocus={(e) => e.target.classList.add('focused')}
                                    onBlur={(e) => e.target.classList.remove('focused')} />
                            </div>
                        </div>

                        <a href="#" className="btn text-white bg-light-blue">Log in</a>
                    </nav>


                </div>
                <div className="line bg-pale-blue" style={{ height: '2px' }}></div>


                <section className="hero py20 " >
                    <div className="container flex ">

                        <div className="hero__text w50pr pr17 pt13">
                            <a href="" className="btn--community radius2 bg-pale-blue text-light-blue py3 px8 inline-block fw500 fs-4 mb5 ">Netbook community</a>
                            <h1 className="hero__title text-very-dark-blue fw700 fs14 mb5 ">Your Solutions For Community!</h1>
                            <h2 className="hero__subtitle text-grayish-gray fw400 fs4 mb11" style={{ lineHeight: '1.5em' }}>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</h2>
                            <div className="hero__actions">
                                <a href="#" className="btn btn--about bg-light-blue py6 px10 fw400 mr4">About More</a>
                                <a href="#" className="btn btn--invite bg-transparent text-light-blue fw400 outline-light-blue outline1 outline-offset-1 py6 px10">Invite Friend</a>
                            </div>
                        </div>
                        <div className="hero__img w50pr">
                            <img src="/images/people.svg" alt="" />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}