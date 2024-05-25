import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ProfileButton() {
    return(
        <div className="icon-button">
            <FontAwesomeIcon icon={faUser} />
        </div>
    );
};

export default ProfileButton;