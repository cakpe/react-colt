class Hello extends React.Component {
  static defaultProps = { // it must be called defaultProps
    from: 'Anonymous',
    bangs: 10
  }
  render() {
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
      </div>
    );
  }
}
