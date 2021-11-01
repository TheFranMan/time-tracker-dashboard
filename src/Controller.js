import avatar from './images/jeremy.png'

export default function Controller(props) {
    return (
        <div className="controller">
            <div className="controller__info">
                <img className="controller__info__avatar" src={avatar} alt="" />
                <div className="controller__info__details">
                    Report for <span className="controller__info__details__name">Jeremy Robson</span>
                </div>
            </div>
            <ul className="controller__timeframe">
                <li className="controller__timeframe__item">Daily</li>
                <li className="controller__timeframe__item active">Weekly</li>
                <li className="controller__timeframe__item">Monthly</li>
            </ul>
        </div>
    );
}