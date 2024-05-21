import * as React from "react";

function Notification({ status, message, showAlert, setShowAlert }) {
  // const [showNotification, setShowNotification] = React.useState(showAlert);
  console.log("notification");

  React.useEffect(() => {
    console.log("useefect");
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }, [showAlert, setShowAlert]);

  return (
    <div
      className={`flex gap-10 items-center p-1 text-white ${
        status === "success" ? "bg-green-600" : "bg-red-600"
      }
        ${showAlert ? "" : "hidden"}
       rounded-xl h-14 mt-[calc(100vh-10rem)] ml-[calc(100vw-40rem)] absolute`}
    >
      <span className="flex gap-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/71a27482f06852e240fa05718c14eaa5fb03cccd6d0a678a027cced73420cd64?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
          alt="Checkmark icon"
          className="shrink-0 self-stretch w-6 aspect-square"
        />
        <p className="flex-1 self-stretch my-auto text-sm leading-4 m-0">
          Sandeep's {message}
        </p>
      </span>

      <button className="self-stretch my-auto text-base font-medium">
        UNDO
      </button>
    </div>
  );
}

export default Notification;
