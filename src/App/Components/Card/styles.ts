import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  cardRow: {
    display: "flex",
    flexWrap: "wrap",
    padding: "4px",
  },
  keyName: {
    paddingRight: "6px",
  },
  innerList: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  cardWrapper: {
    backgroundColor: "#6ECAFE",
    border: "10px solid #ffffff",
  },
  title: {
    color: "#ffffff",
    padding: "10px 0",
  }
});
