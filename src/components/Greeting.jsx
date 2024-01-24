import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/randomGreetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, status, error } = useSelector(
    (state) => state.randomGreeting,
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRandomGreeting());
    }
  }, [dispatch, status]);

  const displayGreet = () => {
    return (
      <div>
        {status === 'loading' && 'Loading...'}
        {status === 'succeeded' && greeting}
        {status === 'failed' && `Error: ${error}`}
      </div>
    );
  };

  return (
    <div>
      <h1>Greeting</h1>
      <h3>{displayGreet()}</h3>
    </div>
  );
}

export default Greeting;
