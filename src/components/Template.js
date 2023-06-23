import React from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Template.css";
import Blank from "./images/blank.png";
import Party_invite from "./images/party_invite.png";
import Contact_information from "./images/contact_info.webp";
import uuid from "react-uuid";
import {useNavigate} from "react-router-dom";
function Template() {
  const history = useNavigate();
  const createForm = () => {
    const id_ = uuid();
    history("/form/" + id_);
  };
  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span style={{ fontSize: "16px", color: "#202124" }}>
            Start a new form
          </span>
        </div>
        <div className="template_right">
          <div className="gallery_button">
            Template gallery
            <UnfoldMoreIcon />
          </div>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="template_body">
        <div className="card" onClick={createForm}>
          <img src={Blank} alt="no image" className="card_image" />
          <p className="card_title">Blank</p>
        </div>
        <div className="card">
          <img src={Party_invite} alt="no image" className="card_image" />
          <p className="card_title">Party Invite</p>
        </div>
        <div className="card">
          <img
            src={Contact_information}
            alt="no image"
            className="card_image"
          />
          <p className="card_title">Contact Information</p>
        </div>
      </div>
    </div>
  );
}

export default Template;
