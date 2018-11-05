import React from "react";

import AddIcon from "@material-ui/icons/Add";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  fab: {
    margin: "5px"
  }
};

class Header extends React.Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    const { classes, handleOpen } = this.props;
    return (
      <>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h3" style={{ flexGrow: 1, color: "white" }}>
              To Do's
            </Typography>
            <Button
              color="secondary"
              variant="fab"
              className={classes.fab}
              onClick={handleOpen}
            >
              <AddIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
export default withStyles(styles)(Header);
