import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button.jsx';
import Content from './Content.jsx';

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(10000);

  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const increaseAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const increaseSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  const counter = () => {
    setCount(count + 1);
  };
  //setInterval(counter, 2000);
  return (
    <div>
      <h1>Home</h1>
      <input
        placeholder="Enter user name..."
        ref={userNameRef}
        style={{ display: 'flex' }}
        onChange={() => setCount(count + 1)}
      />
      <input
        placeholder="Ente password..."
        type="password"
        ref={passwordRef}
        style={{ display: 'flex' }}
      />
      <button onClick={() => {}}>Click me!</button>
      <br />
      <Content text="Age" details={age}></Content>
      <Button handler={increaseAge}>Age</Button>
      <Content text="Salary" details={salary}></Content>
      <Button handler={increaseSalary}>Salary</Button>
      <h1>{count}</h1>
    </div>
  );
};

export default Home;
