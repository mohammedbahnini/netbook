export default function About() {

    const items = ['Groups' , 'Messages' , 'Share']
    return (
        <section className="about pt31 pb35">
            <div className="container flex ">

                <div className="about__text w50pr pt15 pr45">
                    <h3 className="text-light-blue fw500 mb3">Whats Netboks?</h3>
                    <h1 className="text-very-dark-blue fs9 mb4" style={{lineHeight : '1.3em'}}>Why Join to Netbook Social Network?</h1>
                    <h2 className="text-grayish-gray fw400 fs4 mb9" style={{lineHeight : '1.75em'}}>Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</h2>

                    <ul className="flex flex-col row-gap4">
                        {
                            items.map( (item , i) => <li key={i} className="text-very-dark-blue fw500 pl8">{item}</li>)
                        }
                    </ul>
                </div>

                <div className="about__imgs w50pr flex ai-center col-gap8">
                    <div className="flex1">
                        <img src="/images/video.png" alt="Video" />
                    </div>
                    <div className="flex flex-col flex1 row-gap8">
                        <div className="radius4 overflow-hidden">
                            <img src="/images/person-on-laptop.jpg" alt="" />
                        </div>
                        <div className="radius4 overflow-hidden">
                            <img src="/images/cables.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}