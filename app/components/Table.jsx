const React = require('react');

const Table = function() {
    return (
      <table>
          <thead>
              <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Release Date</th>
                  <th scope="col">Summary</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Kiki's Delivery Service</td>
                  <td>1989-07-29</td>
                  <td>A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.</td>
              </tr>
          </tbody>
      </table>
    );
}

module.exports = Table;