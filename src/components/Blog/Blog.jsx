import News from "./News"

export default function Blog(){
    const news = 
    [
        {
            img : <img src="/images/laptop.jpg" /> , 
            title : 'It Does Not Matter Hows Slowly go as Long' , 
            btnText : 'Continue Reading'
        } , 
        {
            img : <img src="/images/girl.jpg" /> , 
            title : 'Netbook Network Added New Photo Filter' , 
            btnText : 'Continue Reading'
        } , 
        {
            img : <img src="/images/toys.jpg" /> , 
            title : 'We Optimised Netbooks Better Navigation' , 
            btnText : 'Continue Reading'
        }
    ]
    return (
        <section className="blog pt32 pb32">
            <div className="container relative">
                <img src="/images/dots.png" alt="" className="w34 absolute left-5 top29 z-1" />

                <div className="align-center mb20">
                    <p className="text-light-blue fw500 mb2">Get Our Aplication</p>
                    <h1 className="fs9 text-very-dark-blue">Latest News</h1>
                </div>

                <div className="grid col-gap19">
                    {
                        news.map( (item , i)=>(
                            <News img={item.img} title={item.title} btnText={item.btnText} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}