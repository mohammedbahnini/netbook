export default function FeatureItem(props) {
    const { icon, title, text, iconColor } = props;
    return (
        < div className="bg-white radius4 flex col-gap10  col6 p10 feature" >
            <span  className={`bg-${iconColor} w16 h16 flex ai-center jc-center radius6 shrink-0 feature__icon`}>
                <span className="text-white fs7">{icon}</span>
            </span>
            <div className="pt2">
                <h3 className="text-very-dark-blue fs6 mb3">{title}</h3>
                <p className="text-grayish-gray" style={{ lineHeight: '1.625em' }}>{text}</p>
            </div>
        </div >
    )
}