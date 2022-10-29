import'../../reset.css'
import './style.css'
import Button from '../Button'
import { ImBin2} from "react-icons/im"


const ListValue =({listTransactions,setListTransactions})=>{

      const  removeItens =(item)=>  {
        setListTransactions(listTransactions.filter((value)=> value.name !== item))
       }

    return(
        <div >
            <nav className='container__btn'>
                <h2>Resumo financeiro</h2>
                <div >
                    <Button className="btn__todos" Children="Todos"></Button>
                    <Button className="btn__entrada" Children="Entradas"></Button>
                    <Button  className="btn__despesa" Children="Despesa"></Button>
                </div>
            </nav>     
                {listTransactions.map((item,index)=>(
                    <div className='container__list'> 
                          <li   
                            key={index}
                            id={item.value}  
                            className={item.type === "entrada"? "container__list--item--entrada" :"container__list--item--saida"} 
                            >
                            <div className='li__right'>
                                <h2>
                                    {item.description}
                                </h2>
                                <p>
                                    {item.type}
                                </p>
                            </div>
                            <div className='li__left'>
                                <p> R$ {item.value},00</p>
                                
                                <Button 
                                    id={item.name} 
                                    eventClick={()=>removeItens(item.name)} 
                                    className="btn--excluir" 
                                    Children={<ImBin2/>}/>
                            </div>
                         </li>
                      </div>
                ))}  
        </div>
    )
}
export default ListValue