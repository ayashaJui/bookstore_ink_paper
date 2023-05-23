import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Message = ({ severity, children, title }) => {
  return (
    <Alert severity={severity} sx={{ my: 15 }}>
      <AlertTitle>{title}</AlertTitle>
      {children}
    </Alert>
  );
};

Message.defaultProps = {
  severity: "info",
};

export default Message;
