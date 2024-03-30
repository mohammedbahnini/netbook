export default function Cta() {
    return (
        <section className="cta bg-pale-blue overflow-hidden ">
            <div className="container">

                <div className="flex js-space-between relative">

                    <div className="cat__text max-w88 py30">
                        <p className="text-light-blue fw500 mb2">Get Our Aplication</p>
                        <h1 className="fs9 mb4" style={{ lineHeight: '1.444em' }}>You Can Easily Find This App…!</h1>
                        <p className="text-grayish-gray mb9" style={{ lineHeight: '1.625em' }}>I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.</p>
                        <div className="flex col-gap5">
                            <a href="#" className="cta__app-store bg-white radius2 px4 py3 flex col-gap2">

                                <span className="text-grayish-blue fs8">
                                    <i className="fa-brands fa-apple"></i>
                                </span>
                                <span className="text-grayish-gray fs3 " style={{ lineHeight: '1.3em' }}>
                                    Download on the<br /><span className="fw700 text-grayish-blue">App Store</span>
                                </span>
                            </a>

                            <a href="#" className="bg-grayish-blue radius2 px4 py3 flex col-gap2">

                                <span className="text-white fs8">
                                <i class="fa-brands fa-google-play"></i>
                                </span>
                                <span className="text-pale-gray fs3 " style={{ lineHeight: '1.3em' }}>
                                    Download on the<br /><span className="fw700 text-white">App Store</span>
                                </span>
                            </a>

                        </div>
                    </div>

                    <img src="/images/phone-muckup.png" alt="" className="w110 absolute top11 right0 " />
                </div>
            </div>
        </section>
    )
}