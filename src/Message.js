import React, { forwardRef } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Message.css";

const Message = forwardRef((props, ref) => {
  const isUser = props.user === props.mssg.username;

  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message_usercard" : "message_guestcard"}>
        <CardContent>
          <Typography variant="h5" component="h2" color="white">
            {!isUser && `${props.mssg.username}:` }{props.mssg.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
