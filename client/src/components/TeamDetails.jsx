import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TeamStore from "../store/teamStore"; // Import the TeamStore
import Preloader from "./Preloader"; // Preloader component to show loading state

const TeamDetails = () => {
    const { id } = useParams(); // Extract member ID from URL
    const teamMember = TeamStore((state) => state.TeamDetails); // Access team member details from store
    const fetchTeamMemberDetails = TeamStore((state) => state.ReadTeamMemberRequest); // Fetch function

    useEffect(() => {
        fetchTeamMemberDetails(id); // Fetch team member details when the component loads
    }, [id, fetchTeamMemberDetails]);

    if (!teamMember) {
        return <Preloader />;
    }

    return (
        <div id="team-details" className="team-details section">
            <div className="container">
                {/* Team Member Title */}
                <div className="text-center section-heading" data-aos="fade-up">
                    <h2 className="mb-3">{teamMember.name || "Member Name"}</h2>
                </div>

                <div className="row">
                    {/* Content Section */}
                    <div className="col-md-8">
                        <div className="card">
                            <img
                                src={teamMember.image || "https://picsum.photos/id/1018/1000/600/"}
                                alt={teamMember.name || "Team Member Image"}
                                className="img-fluid"
                            />
                            <div className="card-body">
                                <p className="card-text">{teamMember.bio || "No biography available."}</p>
                                <p className="text-muted mb-4">Role: {teamMember.role || "Not Available"}</p>
                                <a href="/team" className="btn btn-submit">
                                    Back to Team
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Other Team Members Section */}
                    <div className="col-md-4">
                        <div className="card p-3 bg-light">
                            <h4 className="text-center">Other Team Members</h4>
                            {/* Example list of team members */}
                            <ul>
                                <li><a href="/team/1">John Doe</a></li>
                                <li><a href="/team/2">Jane Smith</a></li>
                                <li><a href="/team/3">Alex Brown</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;
