import FeatureItem from "./FeatureItem"

export default function Features() {
    const features = 
    [
        {
            icon : <i className="fa-solid fa-user-group"></i> , 
            title : 'Members, Friends' , 
            text : 'Members, Friends Connection ( like followers ), Private Message' , 
            iconColor : 'light-blue'
        } , 
        {
            icon : <i class="fa-solid fa-people-group"></i> , 
            title : 'Members, Friends' , 
            text : 'Members, Friends Connection ( like followers ), Private Message' , 
            iconColor : 'red'
        } , 
        {
            icon : <i class="fa-solid fa-comments"></i> , 
            title : 'Members, Friends' , 
            text : 'Members, Friends Connection ( like followers ), Private Message' , 
            iconColor : 'light-orange'
        } , 
        {
            icon : <i class="fa-solid fa-puzzle-piece"></i> , 
            title : 'Members, Friends' , 
            text : 'Members, Friends Connection ( like followers ), Private Message' , 
            iconColor : 'light-blue'
        } , 
        {
            icon : <i class="fa-solid fa-rectangle-list"></i> , 
            title : 'Members, Friends' , 
            text : 'Members, Friends Connection ( like followers ), Private Message' , 
            iconColor : 'red'
        } , 
        {
            icon : <i class="fa-solid fa-scroll"></i> , 
            title : 'Members, Friends' , 
            text : 'Members, Friends Connection ( like followers ), Private Message' , 
            iconColor : 'light-orange'
        }
    ]
    return (
        <section className="features pt47 pb52">
            <div className="container">
                
                <div className="align-center">
                    <p className="text-light-blue mb2">Our Community</p>
                    <h1 className="text-very-dark-blue fs9 mb5">Community Main Feature</h1>
                    <h2 className="text-pale-gray max-w105 fw400 fs4 m-auto">The wise man therefore always holds in these matters to this principle of selection.</h2>
                </div>

                <div className="grid col-gap11 row-gap11 pt16">

                    {
                        features.map( (item , i)=> (
                            <FeatureItem icon={item.icon} title={item.title} text={item.title} iconColor={item.iconColor} />
                        ))
                    }


                </div>
            </div>
        </section>
    )
}