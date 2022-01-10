import { useState, useEffect } from "react";
export const Timer = ({ startTime, endTime }) => {
  const [sTime, setTime] = useState(startTime);
  useEffect(() => {
    const id = setInterval(() => {
      setTime((p) => {
        console.log(p);
        if (p === endTime) {
          clearInterval(id);
          return endTime;
        }
        return p + 1;
      });
    }, 1000);
    return () => {
      //unmounting
      console.log(
        "cleanup setInterval function (unmounting) beacuse we are  reaching end time, it should clear the interval and we are not rerendering"
      );
      clearInterval(id);
    };
  },);

  return <div>Timer is : {sTime}</div>;
};