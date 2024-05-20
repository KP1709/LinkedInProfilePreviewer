import React from "react";

export default function LinkedInPreviewer() {
    const [previewData, setPreviewData] = React.useState({
        firstName: "",
        lastName: "",
        headline: "",
        company: "",
        location: "",
        connectionNumber: "",
        bannerImage: "",
        headshotImage: ""
    })

    const [profileColor, setProfileColor] = React.useState([])
    const [toggleButtonPressed, setToggleButtonPressed] = React.useState([])

    // Create URL for image for it to be displayed
    // pass in id?
    function loadBannerFile(event) {
        var image = document.getElementById("profile__card-banner");
        image.src = URL.createObjectURL(event.target.files[0]);
    };

    function loadProfileFile(event) {
        var image = document.getElementById("profile__card-headshot");
        image.src = URL.createObjectURL(event.target.files[0]);
    };

    function HandleProfileColor(event) {
        setProfileColor(prevColour => !prevColour)
        setToggleButtonPressed(prevColor => !prevColor)
    }

    function HandleChange(event) {
        const { name, value } = event.target
        setPreviewData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    // Add popover for image shape recommendation and connection number entered

    return (
        <main>
            <section id="form">
                <div className="col">
                    <label htmlFor="headshot">Upload Banner</label>
                    <p className="hints">For the best results use a banner size of 1584 pixels by 396 pixels</p>
                    <input
                        id="headshot"
                        type="file"
                        name="headshot"
                        className="form__input-image"
                        accept="image/png, image/jpeg"
                        onChange={loadBannerFile} />
                </div>

                <div className="col">
                    <label htmlFor="banner">Upload Headshot</label>
                    <p className="hints">For the best results use a square photo</p>
                    <input
                        id="banner"
                        type="file"
                        name="banner"
                        className="form__input-image"
                        accept="image/png, image/jpeg"
                        onChange={loadProfileFile} />
                </div>

                <div className="col">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        className="form__input"
                        placeholder="John"
                        value={previewData.firstName}
                        name="firstName"
                        onChange={HandleChange} />
                </div>

                <div className="col">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        className="form__input"
                        placeholder="Doe"
                        value={previewData.lastName}
                        name="lastName"
                        onChange={HandleChange} />
                </div>

                <div className="col">
                    <label htmlFor="headline">Headline</label>
                    <input
                        id="headline"
                        type="text"
                        className="form__input"
                        placeholder="Engineer@LinkedIn"
                        value={previewData.headline}
                        name="headline"
                        onChange={HandleChange} />
                </div>

                <div className="col">
                    <label htmlFor="company">Company / University</label>
                    <input
                        id="company"
                        type="text"
                        className="form__input"
                        placeholder="LinkedIn"
                        value={previewData.company}
                        name="company"
                        onChange={HandleChange} />
                </div>

                <div className="col">
                    <label htmlFor="location">Location</label>
                    <input
                        id="location"
                        type="text"
                        className="form__input"
                        placeholder="London, England, United Kingdom"
                        value={previewData.location}
                        name="location"
                        onChange={HandleChange} />
                </div>

                <div className="col">
                    <label htmlFor="connectionNumber">Number of connections</label>
                    <input
                        id="connectionNumber"
                        type="number"
                        placeholder="45"
                        className="form__input"
                        value={previewData.connectionNumber}
                        name="connectionNumber"
                        onChange={HandleChange} />
                </div>
            </section>

            {/* Output section */}
            <section id="profile__card">
                <div className="col">
                    <div id="profile__card-header" className={`col ${profileColor ? "" : "dark"}`}>
                        <img
                            src={previewData.bannerImage}
                            id="profile__card-banner"
                            alt={`${previewData.firstName}'s LinkedIn Banner`}
                        />
                        <img
                            src={previewData.headshotImage}
                            id="profile__card-headshot"
                            className={`${profileColor ? "" : "dark"}`}
                            alt={`${previewData.firstName}'s headshot`}
                        />
                        <div id="profile__card-info" className={`col ${profileColor ? "" : "dark"}`}>
                            <h2
                                id="profile__card-fullName"
                                className={`${profileColor ? "" : "dark"}`}>
                                {previewData.firstName} {previewData.lastName}
                            </h2>
                            <p id="profile__card-headline" className={`${profileColor ? "" : "dark"}`}>{previewData.headline}</p>
                            <p id="profile__card-company">{previewData.company}</p>
                            <p id="profile__card-location">{previewData.location} &#8226;
                                <a id="profile__card-contactInfo" href="#" className="link">Contact Info</a>
                                <span
                                    id="profile__card-connectionNumber-phone" className="link">
                                    {parseInt(previewData.connectionNumber) >= "500" || parseInt(previewData.connectionNumber) < 0 ? " 500+ " : ` ${previewData.connectionNumber} `}
                                    connections
                                </span>
                            </p>
                            <a href="#" id="profile__card-connectionNumber-other" className="link">
                                {parseInt(previewData.connectionNumber) >= "500" || parseInt(previewData.connectionNumber) < 0 ? " 500+ " : ` ${previewData.connectionNumber} `}
                                connections
                            </a>
                        </div>
                    </div>

                </div>
                <button id="toggle-theme" aria-pressed={`${toggleButtonPressed}`} onClick={HandleProfileColor}>Toggle Profile Theme </button>
            </section>
        </main>
    )
}