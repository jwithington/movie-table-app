const React = require('react');

export class Table extends React.Component {
  
  render()  {
    return (
      <table>
          <thead>
              <tr>
                  <th colspan="3">The table header</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>The table body</td>
                  <td>with two columns</td>
              </tr>
          </tbody>
      </table>
    );
  }
  
}

export default Table;
