const UpcomingEvents = ({ eventData }) => {
    return (
        <div className="card acrylic" style={{ maxWidth: "250px" }}>
            <img src={eventData.image} className="img-fluid rounded-top" />
            <div className="card-body">
                <h5 className="card-title">{eventData.title}</h5>
                <p className="card-text event-text">{eventData.description}</p>
            </div>
        </div>
    );
}

export default UpcomingEvents;