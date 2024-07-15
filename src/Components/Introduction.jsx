import React from 'react'
import './Introduction.css';

const Introduction = () => {
  return (
    <>
    <div className='introduction'>
      <div className="text">
          <h1>
              Your Photography
              Journey Begins Here
          </h1>
          <p>
              Discover the beauty
              through our lens...
          </p>
          <p>
              Capture moments, tell stories,
              and create memories that last a
              lifetime.
          </p>
          <button className="explore-button">
              Explore Now
          </button>
        </div>
        <div className="image">
                    <img
                        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240122102536/1-(3).jpg"
                        alt="Introduction"
                    />
        </div>      
    </div>

    <div className="buy-plans">
        <h2>Buy Plans and Subscription</h2>
        <p>
          Unlock Premium features and exclusive contents with our Subscription plans
        </p>
        <div className="subscription-options">
                    {/* Placeholder content for subscription options */}
                    <div className="subscription-option">
                        <h3>Basic Plan</h3>
                        <p>Access to a limited set of features</p>
                        <p>$9.99/month</p>
                        <button className="subscribe-button">
                            Subscribe
                        </button>
                    </div>
                    <div className="subscription-option">
                        <h3>Pro Plan</h3>
                        <p>
                            Full access to all features
                            and exclusive content
                        </p>
                        <p>$19.99/month</p>
                        <button className="subscribe-button">
                            Subscribe
                        </button>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Introduction
