import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ServiceStore from "../store/serviceStore"; // Assuming serviceStore.js is the file that holds the Zustand store
import Preloader from "./Preloader"; // Preloader component to show loading state

const ServiceDetails = () => {
    const { id } = useParams(); // Extract service ID from URL
    const service = ServiceStore((state) => state.ServiceDetails); // Fetch service details from store
    const fetchServiceDetails = ServiceStore((state) => state.ReadServiceRequest); // Fetch function to get service details

    useEffect(() => {
        fetchServiceDetails(id); // Fetch service details when the component loads
    }, [id, fetchServiceDetails]);

    // Display a loader if service details are not yet fetched
    if (!service) {
        return <Preloader />;
    }

    return (
        <div id="service-details" className="service-details section">
            <div className="container">
                {/* Service Title */}
                <div className="text-center section-heading" data-aos="fade-up">
                    <h2 className="mb-3">{service.title || "Service Title"}</h2>
                </div>

                <div className="row">
                    {/* Content Section */}
                    <div className="col-md-8">
                        <div className="card">
                            <img
                                src={service.image || "https://picsum.photos/id/1018/1000/600/"}
                                alt={service.title || "Service Image"}
                                className="img-fluid"
                            />
                            <div className="card-body">
                                <p className="card-text">{service.description || "No description available."}</p>
                                <p className="service-price mb-4">
                                    Price: {service.price || "Not Available"}
                                </p>
                                <Link to="/services" className="btn btn-submit">
                                    Back to Services
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Section */}
                    <div className="col-md-4">
                        {/* Services List */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header bg-action">
                                <h5 className="mb-1">Other Services</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                {/* Map through other services if you have them */}
                                <li className="list-group-item">
                                    <Link to="/service/1">Web Design</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/service/2">Product Management</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/service/3">Graphic Design</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/service/4">Marketing</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Download Catalog */}
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header bg-light">
                                <h5 className="mb-0">Download Catalog</h5>
                            </div>
                            <div className="card-body">
                                <a href="#" className="d-flex align-items-center mb-2">
                                    <i className="bi bi-file-earmark-pdf fs-5 me-2 text-danger"></i> Catalog PDF
                                </a>
                                <a href="#" className="d-flex align-items-center">
                                    <i className="bi bi-file-earmark-word fs-5 me-2 text-primary"></i> Catalog DOC
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
