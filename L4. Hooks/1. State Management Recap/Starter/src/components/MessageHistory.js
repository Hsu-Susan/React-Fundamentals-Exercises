import PropTypes from "prop-types";
const MessageHistory = ({ sender, messages }) => {
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === sender.username
              ? "message sender"
              : "message recipient"
          }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  );
};

MessageHistory.propTypes = {
  sender: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

export default MessageHistory;
