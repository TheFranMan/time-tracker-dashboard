export default function Card(props) {
    let classname = "card " + props.title.toLowerCase().replace(" ", "-");

    return (
        // <div className={classname}>
        //     <div className="card__top"></div>
        //     <div className="card__bottom">
        //         <div className="card__bottom__heading">
        //             <div className="card__bottom__heading__title">{ props.title }</div>
        //             <div className="card__bottom__heading__settings"></div>
        //         </div>
        //         <div className="card__bottom__time">
        //             <div className="card__bottom__time__current">
        //                 { props.timeframe.current }hrs
        //             </div>
        //             <div className="card__bottom__time__previous">
        //                 Last Week - { props.timeframe.previous }hrs
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className={classname}>
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
                         Last Week - { props.timeframe.previous }hrs
                     </div>
                 </div>
            </div>
        </div>
    );
}