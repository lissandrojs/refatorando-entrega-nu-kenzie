import './style.css'
import'../../reset.css'
import CadastrarForm from '../Form'
import ListValue from '../ListValue'


const MainBody = ({addValueList,listTransactions,setListTransactions})=>{
    return(
        <main className="main__container">
           <CadastrarForm 
                listTransactions={listTransactions} 
                addValueList={addValueList}/>

           <ListValue 
                setListTransactions={setListTransactions} 
                listTransactions={listTransactions}/>
        </main>
    )

}
export default MainBody