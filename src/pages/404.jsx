import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="items-center justify-center min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-3 text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
