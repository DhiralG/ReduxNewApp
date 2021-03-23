import React from "react";
import { connect } from "react-redux";
import { getDataAPI } from "../redux/actions";


function mapStateToProps(state) {
    return {
      state
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      onLoadUsers: () => {
        let r = dispatch(getDataAPI());
        r.then((...args) => {
          console.log("load hot successed ", args);
        }).catch((...args) => {
          console.log("load hot failed ", args);
        });
        console.log("dispatch loadhot r", r);
      }
    };
  }

  function AppComp({ state, onLoadUsers }) {
    console.log(state);
    return (
      <div>
        
        <div>data={state}</div>
        
        <button onClick={onLoadUsers}>Load Users</button>
      </div>
    );
  }
  
  let GetUserList = connect(mapStateToProps, mapDispatchToProps)(AppComp);
  
  export default GetUserList;





// class GetUserList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { input: "" };
//   }

//   updateInput = input => {
//     this.setState({ input });
//   };

//   handleAddUser = () => {
//     this.props.getDataAPI(this.state.input);
//     this.setState({ input: "" });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           onChange={e => this.updateInput(e.target.value)}
//           value={this.state.input}
//         />
//         <button  onClick={this.handleAddUser}>
//           GetDatA
//         </button>
//       </div>
//     );
//   }
// }

// export default connect(
//   null,
//   {getDataAPI}
// )(GetUserList);

