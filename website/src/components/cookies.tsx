import React, { useState, useEffect } from 'react'
import { hasCookie, setCookie } from 'cookies-next'

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // After component mounts, check if the cookie exists
    if (hasCookie('localConsent')) {
      setShowConsent(false) // Don't show the consent banner if the cookie exists
    } else {
      setShowConsent(true) // Show consent banner if cookie is absent
    }
  }, [])

  const acceptCookie = () => {
    setCookie('localConsent', 'true', {})
    setShowConsent(false)
  }

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  if (!showConsent) {
    return null
  }

  return (
    <div className="fixed inset-0 z-10">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100">
        <span className="text-dark text-base text-white mr-16 w-46 sm:w-full truncate w-96">
          This website uses cookies to improve user experience. By using our
          website you consent to all cookies in accordance with our{' '}
          <a
            className="cursor-pointer font-semibold hover:text-cyan-700"
            href="https://w3beconomy.uk/cookies-policy"
          >
            Cookies Policy
          </a>
          .
        </span>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:w-25 md:space-x-2">
          <button
            className="bg-cyan-700 py-1 px-6 rounded text-white"
            onClick={openModal}
          >
            Details
          </button>
          <button
            className="bg-cyan-700 py-1 px-6 rounded text-white"
            onClick={acceptCookie}
          >
            Accept
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Cookies Management</h2>
            <p className="mb-4 text-gray-700">
              We use cookies to personalize content and ads, to provide social
              media features, and to analyze our traffic. We also share
              information about your use of our site with our social media,
              advertising, and analytics partners.{' '}
              <a
                className="cursor-pointer font-semibold hover:text-cyan-700"
                href="https://w3beconomy.uk/cookies-policy"
              >
                More Details
              </a>
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800"
                onClick={() => {
                  acceptCookie()
                  closeModal()
                }}
              >
                Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CookieConsent
