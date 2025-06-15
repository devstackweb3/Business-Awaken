import React, { useEffect } from 'react'

const TrustpilotWidget: React.FC = () => {
  useEffect(() => {
    // Load Trustpilot script dynamically
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
    script.async = true

    // Append the script to the document body
    document.body.appendChild(script)
    return (): void => {
      // Cleanup: Remove the script when the component unmounts
      document.body.removeChild(script)
    }
  }, [])
  return (
    <div
      className="trustpilot-widget"
      data-locale="en-GB"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="659bf733ceeb45ea81167ae6"
      data-style-height="52px"
      data-style-width="50%"
    >
      <a
        href="https://uk.trustpilot.com/review/w3beconomy.ch"
        target="_blank"
        rel="noopener"
      >
        Trustpilot
      </a>
    </div>
  )
}

export default TrustpilotWidget
