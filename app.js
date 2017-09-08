class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onHover(event) {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onHover.bind(this)}
                        onMouseLeave={this.onHover.bind(this)}>
        {this.props.item}
      </li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.list.map(item => <GroceryListItem item={item}/>)}
  </ul>
);

ReactDOM.render(<GroceryList list={['bananas', 'watermelon', 'orange']}/>, document.getElementById('app'));
