const FetchUrl = async (args) => {
  const { payload, name } = args;

  const request = await fetch(
    'https://vast-thicket-28360.herokuapp.com/graphql',
    {
      method: 'POST',
      body: JSON.stringify({
        query: payload,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }
  );

  const { errors, data } = await request.json();
  if (errors) {
    const [err] = errors;
    throw new Error(err.message);
  }
  if (request.status !== 200 && request.status !== 201) {
    throw new Error('Something Failed.');
  }
  // console.log(data, data[name]);
  return data[name];
};

export default FetchUrl;
