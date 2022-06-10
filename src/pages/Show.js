/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setISLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    apiGet(`shows/${id}?embed[]=season&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          setShow(results);
          setISLoading(false);
        }
      })
      .catch(err => {
        setError(err.message);
        setISLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return <div>Date is being loaded</div>;
  }

  if (error) {
    return <div>Error Occured: {error}</div>;
  }

  return <div>This is show page</div>;
};

export default Show;
