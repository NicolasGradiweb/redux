import { Link } from 'react-router-dom';
import Eye from '../common/Eye';

const TableRow = ({ id, name, email, link }) => {
  return (
    <tr className='row'>
      <td>{ name }</td>
      <td>{ email }</td>
      <td>{ link }</td>
      <td>
        <Link to={`posts/${id}`}>
          <Eye/>
        </Link>
      </td>
    </tr>
  )
}

export default TableRow