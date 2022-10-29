import { useState } from 'react';
import HeaderNu from './components/HeaderNu';
import MainBody from './components/Main';
import '../src/reset.css'


const  App =()=> {

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ])

  const addValueList =(list)=>{

        setListTransactions([...listTransactions,list])
  }

  return (
    <>
      <HeaderNu 
        addValueList={addValueList}/>
        
      <MainBody 
        setListTransactions={setListTransactions} 
        listTransactions={listTransactions}
        addValueList={addValueList}/>
    </>
  );
}

export default App;
