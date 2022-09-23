import Eye from '../common/Eye';

const TableRow = ({ name, email, link }) => {
  return (
    <tr className='row'>
      <td>{ name }</td>
      <td>{ email }</td>
      <td>{ link }</td>
      <td><Eye/></td>
    </tr>
  )
}

export default TableRow