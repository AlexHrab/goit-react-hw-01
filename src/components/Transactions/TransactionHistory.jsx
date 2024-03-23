import css from "./TransactionHistory.module.css"

function TransactionHistory({items}){
    return (
        <table>
  <thead>
    <tr>
      <th className="head">Type</th>
      <th className="head">Amount</th>
      <th className="head">Currency</th>
    </tr>
  </thead>
{items.map(el => {return <tbody key={el.id}>
    <tr>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>
    
  </tbody>})}
  
</table>

    )
}

export default TransactionHistory;

