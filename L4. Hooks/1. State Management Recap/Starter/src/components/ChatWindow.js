import PropTypes from "prop-types";
import AddNewMessage from "./AddNewMessage";
import MessageHistory from "./MessageHistory";

const ChatWindow = ({ sender, messages, onMessage }) => {
  const handleOnMessage = (message) => {
    onMessage(sender.username, message);
  };
  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{sender.username}</div>
      <MessageHistory sender={sender} messages={messages} />
      <AddNewMessage onMessage={handleOnMessage} />
    </div>
  );
};

ChatWindow.propTypes = {
  sender: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  onMessage: PropTypes.func.isRequired,
};

export default ChatWindow;
