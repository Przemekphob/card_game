import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  title: {
    display: "flex",
    alignItems: "center",
    fontSize: "25px",
    marginBottom: "25px",
    "&>div": {
      marginLeft: "10px",
    }
  },
});
