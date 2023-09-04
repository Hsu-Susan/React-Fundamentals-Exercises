import { useState } from "react";
import PropTypes from "prop-types";

const AddNewMessage = ({ onMessage }) => {
  // set usestate for new message
  const [message, setMessage] = useState("");

  // call this function and set message when input text is changed
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  // call the callback function from ChatWindow component
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onMessage(message);
    setMessage("");
  };

  // If the user did not type anything, he/she should not be allowed to submit.
  const isDisabled = () => {
    return message === "";
  };

  return (
    <div>
      <form className="input-group" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={message}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

AddNewMessage.propTypes = {
  onMessage: PropTypes.func.isRequired,
};

export default AddNewMessage;
