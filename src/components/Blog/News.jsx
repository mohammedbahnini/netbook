export default function News(props) {
    const { img, title, btnText } = props;
    return (
        <div className="blog__card col4">
            <div className="h82 radius3 overflow-hidden">
                {img}
            </div>
            <div className="flex mt6 col-gap3 pl3">
                <span className="w10 h1 bg-light-orange mt5 as-start"></span>
                <div>
                    <h3 className="fs5 fw600 mb6 " style={{ lineHeight: '1.6em' }}>{title}</h3>
                    <a href="#" className="text-grayish-gray">{btnText} <span className="ml3 fs3"><i className="fa-solid fa-arrow-right"></i></span></a>
                </div>

            </div>

        </div>
    )
}