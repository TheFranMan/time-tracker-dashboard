import { daily, weekly, monthly, formatTitle } from './common.js';

export default function Card(props) {
    const getPreviousText = () => {
        let textPrevious = ''

        switch (props.currentUnit) {
            case daily:
                textPrevious = 'Yesterday'
                break
            case weekly:
                textPrevious = 'Last Week'
                break
            case monthly:
                textPrevious = 'Last Month'
                break
            default:
                break
        }

        return textPrevious
    }

    return (
        <div className={`card ${ formatTitle(props.title) }`}>
            <div className="card__body">
                <div className="card__body__heading">
                     <div className="card__body__heading__title">{ props.title }</div>
                     <div className="card__body__heading__settings"></div>
                 </div>
                 <div className="card__body__time">
                     <div className="card__body__time__current">
                         { props.timeframe.current }hrs
                     </div>
                     <div className="card__body__time__previous">
                        { getPreviousText(props.currentUnit) } - { props.timeframe.previous }hrs
                     </div>
                 </div>
            </div>
        </div>
    );
}