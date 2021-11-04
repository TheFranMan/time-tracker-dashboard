import avatar from './images/jeremy.png'
import { daily, weekly, monthly } from './common.js';

export default function Controller(props) {
    const getActiveClass = (unit) => {
        return unit === props.currentUnit ? " active": ""
    }

    return (
        <div className="controller">
            <div className="controller__info">
                <img className="controller__info__avatar" src={avatar} alt="" />
                <div className="controller__info__details">
                    Report for <span className="controller__info__details__name">Jeremy Robson</span>
                </div>
            </div>
            <ul className="controller__timeframe">
                <li className={`controller__timeframe__item ${ getActiveClass(daily)} `} onClick={ () => props.onClick(daily)}>Daily</li>
                <li className={`controller__timeframe__item ${ getActiveClass(weekly)} `} onClick={ () => props.onClick(weekly)}>Weekly</li>
                <li className={`controller__timeframe__item ${ getActiveClass(monthly)} `} onClick={ () => props.onClick(monthly) }>Monthly</li>
            </ul>
        </div>
    );
}