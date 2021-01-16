import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Customer from './components/Customer';
import { Component } from 'react';


const customers = [
{
  'id':1,
  'image':"https://placeimg.com/64/64/1",
  'name':'최인태',
  'birthday' : '850726',
  'gender' : '남자',
  'job' : '엔지니어'
},
{
  'id':2,
  'image':"https://placeimg.com/64/64/2",
  'name':'최인태2',
  'birthday' : '850725',
  'gender' : '남자',
  'job' : '엔지니어2'
},
{
  'id':3,
  'image':"https://placeimg.com/64/64/3",
  'name':'최인태3',
  'birthday' : '850724',
  'gender' : '남자',
  'job' : '엔지니어3'
},
]

class App extends Component {

  render() {

    return (

      <div>
        { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday = {c.birthday} gender = {c.gender}  job = {c.job} />); })}
      </div>

    );
  }

}

export default App;
