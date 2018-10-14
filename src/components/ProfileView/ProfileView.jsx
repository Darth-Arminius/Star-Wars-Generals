import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import placeholder from "@/assets/images/placeholder.png";

import "./ProfileView.css";

const styles = theme => ({
  largeAvatar: {
    width: 250,
    height: 250
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  }
});

class ProfileView extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired
  };

  state = {
    expanded: "panel1"
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={2}>
          <Avatar
            alt="Player Avatar"
            src={placeholder}
            className={classNames(this.props.classes.largeAvatar)}
          />
        </Grid>
        <Grid item xs={10}>
          <ExpansionPanel
            expanded={this.state.expanded === "panel1"}
            onChange={this.handleChange("panel1")}
          >
            <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography className={this.props.classes.heading}>
                User Details
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>Username: </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={this.state.expanded === "panel2"}
            onChange={this.handleChange("panel2")}
          >
            <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography className={this.props.classes.heading}>
                Stats
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>Total number of cards:</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>Total number of wins:</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>Total number of losses:</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={this.state.expanded === "panel3"}
            onChange={this.handleChange("panel3")}
          >
            <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography className={this.props.classes.heading}>
                Settings
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>Settings:</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ProfileView);
