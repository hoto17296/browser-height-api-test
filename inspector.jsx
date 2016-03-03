class Inspector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bodyHeight: 200, // %
    };
    this.updateBodyHeight( this.state.bodyHeight );
  }

  render() {
    const params = ['scrollTop', 'clientHeight', 'scrollHeight'];
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>body</th>
              <th>html</th>
            </tr>
            {
              params.map((param) => {
                return (
                  <tr key={param}>
                    <th>{param}</th>
                    <td>{this.props.body[param]}</td>
                    <td>{this.props.html[param]}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <form>
          <div>
            <label>body height</label>
          </div>
          <div>
            <span>50%</span>
            <input type='range' min='50' max='200' value={this.state.bodyHeight} onChange={this.onChange.bind(this)} />
            <span>200%</span>
          </div>
        </form>
        <footer>
          <a href='https://github.com/hoto17296/browser-height-api-test'>
            hoto17296/browser-height-api-test
          </a>
        </footer>
      </div>
    )
  }

  onChange(event) {
    this.updateBodyHeight( event.target.value );
    this.setState({ bodyHeight: event.target.value });
  }

  updateBodyHeight( height ) {
    window.document.body.style.height = height + '%';
  }

}

function render() {
  ReactDOM.render(
    <Inspector body={window.document.body} html={window.document.documentElement} />,
    window.document.getElementById('container')
  );
}

window.document.addEventListener('scroll', render);
window.addEventListener('resize', render);

render();
