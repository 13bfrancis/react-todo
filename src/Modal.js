import React from "react";

import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import CheckIcon from "@material-ui/icons/Check";

export default class extends React.Component {
  state = {
    newItem: ""
  };
  render() {
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <div
          style={{
            maxWidth: "400px",
            minWidth: "50%",
            background: "white",
            margin: "0 auto",
            marginTop: "25vh",
            display: "flex"
          }}
        >
          <Toolbar style={{ width: "100%" }}>
            <TextField
              id="standard-full-width"
              fullWidth={true}
              label="To Do Item"
              value={this.state.newItem}
              onChange={e => {
                this.setState({ newItem: e.target.value });
              }}
            />
            <Button
              onClick={() => {
                this.props.addItem({
                  id: Math.random(),
                  item: this.state.newItem
                });
                this.setState({
                  newItem: ""
                });
                this.props.onClose();
              }}
            >
              <CheckIcon />
            </Button>
          </Toolbar>
        </div>
      </Modal>
    );
  }
}
