const authenticate = async (loginId: string, password: string) => {
  console.log("all good. Submitting");
  return fetch("https://3g95y.mocklab.io/authenticate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      loginId,
      password,
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        error: "Error in authentication",
      };
    });
};
export { authenticate };
