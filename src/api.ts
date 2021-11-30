const baseUrl = () =>
  [process.env.REACT_APP_BACKEND_URI, globalThis.horde.appWebroot]
    .filter((subPath) => !!subPath)
    .join('/');

export const fetchVacRequest = async (vacRequest: {
  firstname: string;
  lastname: string;
  vacState: string;
  vac: string;
}): Promise<Response> =>
  fetch(`${baseUrl()}/rest/ticket`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({key: vacRequest}),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        `Could not fetch auditlogs. Backend response code: ${response.status}`,
      );
    }
  });
