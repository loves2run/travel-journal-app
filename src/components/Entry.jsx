export default function Entry() {
    return(
        <>
            <article className="entryContainer">
                <div className="imageContainer">
                    <img src="/mtFuji.png" alt="Picture of Mount Fuji in Japan." className="entryImage"/>
                </div>
                <aside className="entryDescription">
                    <div className="locationData">
                        <img src="/marker.png" alt="Location marker icon" className="markerImage" />
                        <span className="locationName">Japan</span>
                        <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" className="mapsLink">View on Google Maps</a>
                    </div>
                    <h1 className="entryTitle">MountFuji</h1>
                    <span className="entryDate">12 Jan, 2023 - 24 Jan, 2023</span>
                    <p className="entryText">
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters 
                    (12,380 feet). Mount Fuji is the single most popular tourist site in 
                    Japan, for both Japanese and foreign tourists.
                    </p>
                </aside>
            </article>
        </>
    )
}