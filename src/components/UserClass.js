import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
      userInfo: [],
    };
  }
  async componentDidMount() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    this.setState({ userInfo: data.products });
    console.log("component did mount");
  }
  componentDidUpdate(prevProps, prevState) {
    // prevProps.name = 'Amit'
    // console.log(prevState)
    // console.log('componet is updated with new data')
    this.timer = setInterval(() => {
      console.log("namaste react op");
    }, 1000);
  }
  componentWillUnmount() {
    console.log("this will called just before the componets leaves");
    clearInterval(this.timer);
  }
  render() {
    const { name, location } = this.props;
    const { count, count2, userInfo, kabbadi } = this.state;
    return (
      <div className="user-card m-4 px-4 border border-black">
        <h3>Brand : {userInfo[0]?.brand}</h3>
        <h3>Name : {userInfo[0]?.title}</h3>
        <h3>Name : {name}</h3>
        <h4>Count1 : {count}</h4>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment
        </button>
        <h4>Count2 : {count2}</h4>
        <p>Location : {location}</p>
      </div>
    );
  }
}

export default UserClass;
