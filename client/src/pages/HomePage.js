import React from 'react'


function HomePage() {
    return (
        <div>
            {/* <p>
                About Us
            </p>
            <p>
            Calling all Marvel Fans! Join us on the journey to create your own marvel fan fiction adventure. Given prompts to start you off based on characters, comics, movies, games and more, you are able to add your own edge of creativity.
            </p> */}

            <div className="wrapper">
                <div className="news-item hero-item">
                    <div>
                        <h1>
                            About Us
                        </h1>
                        <p>
                            Calling all Marvel Fans! Join us on the journey to create your own marvel fan fiction adventure. Given prompts to start you off based on characters, comics, movies, games and more, you are able to add your own edge of creativity.
                        </p>
                    </div>
                </div>
                <div className="news-item standard-item">
                </div>
                <div className="news-item standard-item">
                </div>
                <div className="news-item standard-item">
                </div>
            </div>
        </div>
    )
}

export default HomePage;