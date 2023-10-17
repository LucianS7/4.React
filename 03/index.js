ReactDOM.render(
  <h1 className="header">
    This is the declarative way to do it!
  </h1>,
  document.getElementById('root')
)

const h1 = document.createElement('h1');
h1.textContent = 'This is the imperative way';
document.getElementById('root').appendChild(h1);