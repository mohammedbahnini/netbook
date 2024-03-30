export default function Achievement() {
    return (
        <section className="achievement">
            <div className="container flex jc-space-between">

                <div className="cards flex col-gap6">
                    <div className="card bg-white w84 pt11 pl11 pr5 pb10 outline1 outline-pale-gray outline-offset-1 radius4">
                        <div>
                            <h4 className="text-very-dark-blue mb10"><span className="text-light-blue fs5"><i className="fa-regular fa-star"></i></span> 4.8 Rating</h4>
                            <div className="flex ai-center mb11">
                                <div className="avatars flex">
                                    <div className="avatar w6 rounded outline-white outline1 outline-offset-1">
                                        <img src="/images/avatar1.png" alt="" />
                                    </div>
                                    <div className="avatar w6 rounded outline-white outline1 outline-offset-1">
                                        <img src="/images/avatar2.png" alt="" />
                                    </div>
                                    <div className="avatar w6 rounded outline-white outline1 outline-offset-1">
                                        <img src="/images/avatar3.png" alt="" />
                                    </div>
                                </div>
                                <p className="text-grayish-gray fs4 ml4 "><span className="text-light-blue">+836k</span> Members
                                </p>

                            </div>
                            <p className="text-pale-gray mb10" style={{ lineHeight: '1.625em' }}>More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
                            <a href="#" className="text-light-blue fw500">Join Our Community
                                <span className="ml2"><i className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                    </div>

                    <div className="card bg-white w84 pt11 pl11 pr5 pb10 outline1 outline-pale-gray outline-offset-1 radius4">
                        <div>
                            <h4 className="text-very-dark-blue mb10"><span className="text-light-blue fs5"><i className="fa-solid fa-trophy"></i></span> Awards</h4>
                            <div className="flex ai-center mb11">

                                <p className="text-grayish-gray fs4 ml4  ">
                                    <span className="text-red"><i class="fa-brands fa-square-github"></i></span> Best of <span className="text-light-blue">2021</span> on Github
                                </p>

                            </div>
                            <p className="text-pale-gray mb10" style={{ lineHeight: '1.625em' }}>More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
                            <a href="#" className="text-dark-blue fw500 ">Go To Awards<span className="ml2"><i className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                    </div>


                </div>

                <div className="max-w95">
                    <p className="text-light-blue fw500 mb3">Our Achievement</p>
                    <h3 className="text-very-dark-blue fs9 fw700 mb4" style={{ lineHeight: '1.333em' }}>We are Connecting You The Digital Life.</h3>
                    <p className="text-grayish-gray mb9" style={{ lineHeight: '1.75em' }}>The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.</p>
                    <a href="#" className="btn btn--discover bg-light-blue">
                        Discover me
                        <span className="ml2"><i className="fa-solid fa-arrow-right"></i></span>
                    </a>
                </div>

            </div>
        </section>
    )
}