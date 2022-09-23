import { useSelector } from "react-redux";
import TableRow from "./TableRow";

const Table = () => {
  const store = useSelector(store => store.usersReducer);

  const { users } = store;

  const tableHead = [
    {id: 1, text: 'Name'},
    {id: 2, text: 'Email'},
    {id: 3, text: 'Link'}
  ];

  const renderHead = () => (
    tableHead.map(head => (
      <th key={head.id}>{head.text}</th>
    ))
  )

  const renderContent = () => users.map(
    user => (
      <TableRow
        key={user.id}
        name={user.name}
        email={user.email}
        link={user.website}
      />
    ))

  return (
    <table>
      <thead>
        <tr className='row'>
          { renderHead() }
        </tr>
      </thead>
      <tbody>
        { renderContent() }
      </tbody>
    </table>
  )
}

export default Table