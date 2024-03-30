export default function Profile(props) {
    const { img, name, tag } = props;

    return (
        <div className="profile col3 radius4 flex flex-col ai-center py8 px12 ">
            <div className="profile__img w41 h41 relative mb7">
                <img src="/images/orange-border.png" alt="" className="absolute top0 left0 w100pr h100pr" />
                <div className="w35  absolute left3 top3 bg-pale-blue rounded  overflow-hidden">
                    {img}
                </div>
                <div className="w6 h6 rounded bg-light-blue flex ai-center jc-center absolute bottom0 left18">
                    <span className="text-white fs3"><i className="fa-solid fa-check"></i></span>
                </div>
            </div>
            <p className="mb4 fs6 fw600">{name}</p>
            <a href="#" className="text-grayish-gray">{tag}</a>
        </div>
    )
}