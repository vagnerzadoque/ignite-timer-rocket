import React from 'react';

interface Props {
  textError?: string
}

export const ErrorPage: React.FC<Props> = ({textError}) => {
  return (
    <div>
      <h1>{`${textError ?? ' Rota 404'}`}</h1>
    </div>
  );
};

export default ErrorPage;