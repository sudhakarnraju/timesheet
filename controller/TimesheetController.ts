const getTimesheets = async (loginId: string) => {
  console.log("Retrieving timesheets", loginId);
  return fetch(`https://3g95y.mocklab.io/timesheets/${loginId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        error: "Error in authentication",
      };
    });
};
const getTimesheet = async (timesheetId: string) => {
  console.log("Retrieving timesheet", timesheetId);
  return fetch(`https://3g95y.mocklab.io/timesheet/${timesheetId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        error: "Error in authentication",
      };
    });
};
export { getTimesheets, getTimesheet };
