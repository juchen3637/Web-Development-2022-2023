export default function Card(props) {
    return (    
            <div className="card">
                <img src = {props.item.img} className="card--image"/>
                <div className="card--info">
                    <div className="card--info--title">
                        <ion-icon name="location-outline"></ion-icon>
                        <p>{props.item.country}</p>
                        <a href={props.item.googlemaps} target="_blank" className="card--info--title--googlemaps">View on Google Maps</a>
                    </div>
                    <h1>{props.item.location}</h1>
                    <p className="card--info--date">{props.item.date}</p>
                    <p className="card--info-description">{props.item.description}</p>
                </div>
            </div>
    )
}