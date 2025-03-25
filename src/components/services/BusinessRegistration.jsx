import React, { useState, useEffect } from "react";
import "./ServicePage.css";
// import businessIllustration from "../../assets/Servicespage1.png";

const BusinessRegistration = ({ categoryId }) => {
  const [formData, setFormData] = useState({
    prefix: "",
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    whatsappUpdates: true,
  });

  const [currentCategory, setCurrentCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the category details based on categoryId
  useEffect(() => {
    const fetchCategoryDetails = async () => {
      if (!categoryId) {
        setCurrentCategory({ name: "Start your Business" });
        setLoading(false);
        return;
      }

      try {
        const baseUrl = "https://backend.instatax.ai";
        const endpoints = [
          "/categories?populate=*",
          "/api/categories?populate=*",
          "/api/categories",
          "/categories",
        ];

        let response = null;

        // Try each endpoint until one works
        for (const endpoint of endpoints) {
          try {
            console.log(`Trying endpoint: ${baseUrl}${endpoint}`);
            const tempResponse = await fetch(`${baseUrl}${endpoint}`, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            });

            if (tempResponse.ok) {
              response = tempResponse;
              break;
            }
          } catch (endpointErr) {
            console.log(`Endpoint ${endpoint} failed:`, endpointErr.message);
          }
        }

        if (!response) {
          // Fallback to predefined categories if API fails
          const fallbackCategories = [
            {
              slug: "start_business",
              documentId: "rfrdwj2y6i9nr6baq5kr3yln",
              name: "Start your Business",
            },
            {
              slug: "protect_business",
              documentId: "at7wq3rkjxmznmigbif1sh3s",
              name: "Protect your Business",
            },
            {
              slug: "manage_business",
              documentId: "rk357w69ra98d5f7fop1j77c",
              name: "Manage your Business",
            },
            {
              slug: "grow_business",
              documentId: "surdei9t59mnszrkgjqledn7",
              name: "Grow your Business",
            },
          ];

          const matchedCategory = fallbackCategories.find(
            (cat) => cat.slug === categoryId || cat.documentId === categoryId
          );

          if (matchedCategory) {
            setCurrentCategory(matchedCategory);
          } else {
            setCurrentCategory({ name: "Start your Business" });
          }

          setLoading(false);
          return;
        }

        const data = await response.json();
        console.log("Categories API Response:", data);

        if (data?.data?.length) {
          // Find the category that matches the categoryId
          const matchedCategory = data.data.find(
            (cat) => cat.slug === categoryId || cat.documentId === categoryId
          );

          if (matchedCategory) {
            // Format the heading based on category name
            const categoryName = matchedCategory.name;
            const headingText = formatHeading(categoryName);

            setCurrentCategory({
              ...matchedCategory,
              formattedName: headingText,
            });
          } else {
            setCurrentCategory({ name: "Start your Business" });
          }
        } else {
          setCurrentCategory({ name: "Start your Business" });
        }
      } catch (err) {
        console.error("Error fetching category details:", err);
        setCurrentCategory({ name: "Start your Business" }); // Default fallback
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryDetails();
  }, [categoryId]);

  // Helper function to format category name into heading
  const formatHeading = (categoryName) => {
    if (!categoryName) return "Start your Business";

    // For categories like "Start Business", "Protect Business", etc.
    if (categoryName.includes("Business")) {
      // Extract the action verb
      const verb = categoryName.split(" ")[0];
      return `${verb} your Business`;
    }

    return categoryName;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToggle = () => {
    setFormData({
      ...formData,
      whatsappUpdates: !formData.whatsappUpdates,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    // Here you would typically send this data to your backend
    alert("Quote request submitted successfully!");
  };

  // Get description text based on category
  const getCategoryDescription = () => {
    if (!currentCategory) return "";

    const categoryName = currentCategory.name || "";

    if (categoryName.includes("Start")) {
      return "From private limited companies to LLPs and sole proprietorships, we help you choose the right structure and handle all legal formalities.";
    } else if (categoryName.includes("Protect")) {
      return "Safeguard your intellectual property and business assets with our comprehensive protection services including trademark, copyright, and patent registration.";
    } else if (categoryName.includes("Manage")) {
      return "Streamline your operations with our business management services including accounting, compliance, and regulatory filings.";
    } else if (categoryName.includes("Grow")) {
      return "Expand your business horizons with our growth services including marketing strategies, funding assistance, and business consulting.";
    }

    return "We provide comprehensive business services tailored to your specific needs.";
  };

  if (loading) {
    return <div className="service-page">Loading...</div>;
  }

  return (
    <div className="service-page">
      <div className="service-container">
        <div className="service-illustration">
          {/* <img src={businessIllustration} alt="Business Registration" /> */}
        </div>

        <div className="service-info">
          <h1>
            {currentCategory?.formattedName ||
              currentCategory?.name ||
              "Start your Business"}
          </h1>
          <p>{getCategoryDescription()}</p>
        </div>

        <div className="quote-form-container">
          <div className="quote-form">
            <h2>Get Quote Instantly in a Minute!</h2>

            <form onSubmit={handleSubmit} style={{ gap: "0px" }}>
              <div className="form-row">
                <div className="form-group prefix-group">
                  <input
                    type="text"
                    placeholder="Prefix"
                    name="prefix"
                    value={formData.prefix}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group fullname-group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email ID"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="toggle-group">
                <div
                  className={`toggle-switch ${
                    formData.whatsappUpdates ? "active" : ""
                  }`}
                  onClick={handleToggle}
                >
                  <div className="toggle-button"></div>
                </div>
                <label>Get updates through Whatsapp</label>
              </div>

              <button type="submit" className="quote-button">
                Get Quote Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegistration;
