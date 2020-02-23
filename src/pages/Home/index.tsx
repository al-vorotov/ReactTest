import React, { useState } from 'react';

import UserNameList from '../../common/components/molecules/UserNameList';
import Input from '../../common/components/atoms/Input';
import Button from '../../common/components/atoms/Button';
import Alert from '../../common/components/atoms/Alert';

import './styles.css';

const Home = () => {

  const [state, setState] = useState([
    {
      id: 1,
      value: 'Alex',
      picked: false,
    },
    {
      id: 2,
      value: 'Ivan',
      picked: false,
    },
    {
      id: 3,
      value: 'Jon',
      picked: false,
    },
  ]);
  const [valueInput, setValueInput] = useState({ value: '', valid: true });
  const [alert, setAlert] = useState({ message: '', show: false, type: '' });
  const [randomValueState, setRandomValueState] = useState({ randomArray: [], randomValue: '', counter: 0 });

  const handleChangeInput = (value: string, name: string) => {
    setAlert({ message: 'input clear', show: false, type: 'error' }),
      name === 'text'
        ? setValueInput({ value, valid: true })
        : null;
  };

  const handleClickAddButton = () => {
    valueInput.value.length > 0
      ? (setState((prevState) =>
        [...prevState,
          {
            id: prevState && prevState.length !== 0 ? prevState[prevState.length - 1].id + 1 : 1,
            value: valueInput.value,
            picked: false,
          }]),
        setValueInput((prevState) => (
            { ...prevState, value: '' }
          ),
        ))
      : (setValueInput((prevState) => ({ ...prevState, valid: false })),
          setAlert({ message: 'input clear', show: true, type: 'error' })
      );
  };

  const deleteItem = (id: number) => {
    const result = state.filter(item => item.id !== id);
    setState(result);
  };

  const handleClickRandomButton = () => {
    if (randomValueState.counter < state.length) {
      let idArray: any[number] = [];
      randomValueState.randomArray.length === 0
        ? state.map((item) => (
          idArray.push(item.id)
        ))
        : idArray = randomValueState.randomArray;
      const result = idArray[Math.floor(Math.random() * (idArray.length))];
      const resultArray = idArray.filter((item: number) => item !== result);
      setRandomValueState(((prevState) => ({
        ...prevState,
        randomArray: resultArray,
        counter: prevState.counter + 1,
      })));
      const changeItem = state.filter(item => item.id === result)[0];
      changeItem.picked = true;
      state.splice(result - 1, 1, changeItem);
    } else {
      setAlert({ message: 'You use all name. You can clear all value', show: true, type: 'warning' });
    }
  };
  const handleClickClearButton = () => {
    setAlert({ message: '', show: false, type: '' });
    setRandomValueState({ randomArray: [], randomValue: '', counter: 0 });
    const newState: any[] = [];
    state.map((item) => (
      newState.push({ id: item.id, value: item.value, picked: false })
    ));
    setState(newState);
  };

  return (
    <>
      <div className="home">
        <h1>Hello</h1>
        <div className="home__randomBlock">
          <h3>We also can pick random name</h3>
          {alert.show && alert.type === 'warning'
          && <Alert
            className="Login__error"
            message={alert.message}
            type={alert.type}
          />
          }
          {alert.show && alert.type === 'warning'
          &&
          <Button className="home__topBlock__button" onClick={() => handleClickClearButton()}>
            Clear
          </Button>
          }
          <Button className="home__topBlock__button" onClick={() => handleClickRandomButton()}>
            Add name
          </Button>
        </div>
        <div className="home__inputBlock">
          <Input
            onChange={(value) => handleChangeInput(value, 'text')}
            label="Could you please input name"
            value={valueInput.value}
            isValid={valueInput.valid}
            className="home__inputBlock__input"
          />
          <Button
            className="home__inputBlock__button"
            type="cancel"
            onClick={() => setValueInput((prevState) => ({ ...prevState, value: '' }))}
          >
            Reset form
          </Button>
          <Button className="home__inputBlock__button" onClick={() => handleClickAddButton()}>
            Add name
          </Button>
          {alert.show && alert.type === 'error'
          && <Alert
            className="Login__error"
            message={alert.message}
            type={alert.type}
          />
          }
        </div>
        <UserNameList user={state} deleteItem={deleteItem}/>
      </div>
    </>
  );
};

export default Home;
