export default function Entry(props) {
    return(
        <>
            <article className="entryContainer">
                <div className="imageContainer">
                    <img 
                        className="entryImage"
                        src={props.img.src}
                        alt={props.img.alt} 
                    />
                </div>
                <aside className="entryDescription">
                    <div className="locationData">
                        <img
                            className="markerImage" 
                            src="/marker.png" 
                            alt="Location marker icon" 
                        />
                        <span className="locationName">{props.country}</span>
                        <a
                            className="mapsLink"
                            href={props.googleMapsLink} 
                            target="_blank"
                        >View on Google Maps</a>
                    </div>
                    <h1 className="entryTitle">{props.title}</h1>
                    <span className="entryDate">{props.dates}</span>
                    <p className="entryText">
                    {props.text}
                    </p>
                </aside>
            </article>
        </>
    )
}