import React from 'react';
import useAxios from './hooks/useAxios';

export default function CustomHook() {
  //https://the-trivia-api.com/api/questions
  //https://jsonplaceholder.typicode.com/
  const { data } = useAxios('url');
  console.log('data', data);
  return (
    <div>
      <h1>Custom Hook</h1>
    </div>
  );
}
