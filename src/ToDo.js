import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import Modal from "./Modal";
//material-ui imports
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Button from "@material-ui/core/Button";
import Check from "@material-ui/icons/Check";
class ToDo extends Component {
  state = {
    items: [
      {
        id: 1,
        item: "item 1"
      },
      {
        id: 2,
        item: "item 2"
      },
      {
        id: 3,
        item: "item 3"
      }
    ],
    open: false
  };
  addItem = newItem => {
    this.setState({
      items: [...this.state.items, newItem]
    });
  };
  removeItem = itemId => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  handleOpen = () => {
    this.setState({
      open: true
    });
  };
  render() {
    const { items, open } = this.state;
    return (
      <>
        <CssBaseline />
        <Header handleOpen={this.handleOpen} />
        <List>
          {items.map(item => (
            <ListItem key={item.id}>
              <ListItemText>{item.item}</ListItemText>
              <ListItemIcon>
                <Button
                  variant="text"
                  onClick={() => {
                    this.removeItem(item.id);
                  }}
                >
                  <Check />
                </Button>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
        <Modal open={open} onClose={this.handleClose} addItem={this.addItem} />
      </>
    );
  }
}
export default ToDo;
