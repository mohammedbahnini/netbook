import Profile from "./Profile"

export default function Team() {
    const profiles = 
    [
        {
            img : <img src="/images/profile1.png" alt="" className="" /> , 
            name : 'Fahim Rahman' , 
            tag : '@rahman'
        } , 
        {
            img : <img src="/images/profile2.png" alt="" className="" /> , 
            name : 'Kazi Rahman' , 
            tag : '@Rahman'
        } , 
        {
            img : <img src="/images/profile3.png" alt="" className="" /> , 
            name : 'Masterero Ali' , 
            tag : '@Master'
        } , 
        {
            img : <img src="/images/profile4.png" alt="" className="" /> , 
            name : 'Alia Karon' , 
            tag : '@Alia'
        }
    ]
    return (
        <section className="team">
            <div className="container">
                <div className="align-center">
                    <p className="text-light-blue mb2">Valuable Team</p>
                    <h1 className="text-very-dark-blue fs9 mb5">Our Active Members</h1>
                    <h2 className="text-pale-gray max-w113 fw400 fs4 m-auto">when an unknown printer took a galley of type and meeting fari scrambled it.</h2>
                </div>

                <div className="flex jc-center pt9">

                    <div className="flex col-gap2 bg-pale-blue p2 m-auto  radius4">
                        <button className="btn bg-transparent text-grayish-gray fw600">Newest</button>
                        <button className="btn bg-transparent text-grayish-gray fw600">Popular</button>
                        <button className="btn bg-light-blue fw600 active">Active</button>
                    </div>
                </div>

                <div  className="grid col-gap8 pt11 pb32">
                    {
                        profiles.map( (item , i)=>(
                            <Profile img={item.img} name={item.name} tag={item.tag} />
                        ))
                    }

                </div>

            </div>

        </section>
    )
}