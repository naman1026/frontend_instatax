import React, { useState, useEffect } from "react";
import "./FAQsSection.css";
import ReactMarkdown from "react-markdown";

const FAQsSection = ({ serviceId = null }) => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true);
        const baseUrl = "https://backend.instatax.ai";

        // Build URL with optional filter for service-specific FAQs
        let url = `${baseUrl}/api/faqs`;
        if (serviceId) {
          url += `?filters[service][$eq]=${serviceId}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch FAQs: ${response.status}`);
        }

        const data = await response.json();
        if (data?.data?.length) {
          // Sort FAQs by order field if available
          const sortedFaqs = data.data.sort(
            (a, b) => (a.order || 0) - (b.order || 0)
          );
          setFaqs(sortedFaqs);
        } else {
          setFaqs([]);
        }
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        setError(err.message || "Failed to load FAQs");

        // Optional: Set fallback data if API fails
        // setFaqs([{ id: 1, title: "FAQ 1", description: "This is a fallback FAQ" }]);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [serviceId]); // Re-fetch when serviceId changes

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading)
    return (
      <div className="faqs-container">
        <div className="faqs-content">
          <h2 className="faqs-title">FAQs</h2>
          <p>Loading FAQs...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="faqs-container">
        <div className="faqs-content">
          <h2 className="faqs-title">FAQs</h2>
          <p className="error">{error}</p>
        </div>
      </div>
    );

  if (faqs.length === 0)
    return (
      <div className="faqs-container">
        <div className="faqs-content">
          <h2 className="faqs-title">FAQs</h2>
          <p>No FAQs available.</p>
        </div>
      </div>
    );

  return (
    <div className="faqs-container">
      <div className="faqs-content">
        <h2 className="faqs-title">FAQs</h2>
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <div className="faq-text">{faq.title}</div>
                <div
                  className={`faq-icon ${openIndex === index ? "open" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <ReactMarkdown>{faq.description}</ReactMarkdown>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
