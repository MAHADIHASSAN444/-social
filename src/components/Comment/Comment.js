import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Commentshow = (props) => {
    const {name, email, body, id} = props.comments;

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
  },
  media: {
    height: 140,
  },
root: {
    display: 'flote'
},
    
});


  const classes = useStyles();

  return (
    <Card className={classes.root}>
          <CardActionArea>
           <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            <Avatar alt="Remy Sharp" src="https://ibb.co/SPXq924" className={classes.root} >
                B
            </Avatar >
            <h5><strong>Name :</strong> {name}</h5>
            <h6> <strong> Email : </strong>{email}  </h6>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p> <strong>Comment :</strong>{body}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
  );
}
export default Commentshow;










// import React from 'react';

// const Commentshow = (props) => {
//     const {name, email, body, id} = props.comments;
//     return (
//         <div>
//                <div>
//                 <h5><strong>Name :</strong> {name}</h5>
//                 <h6> <strong> Email : </strong>{email}  </h6>
//                 <p> <strong>Comment :</strong>{body}</p>
//             </div>
//         </div>
//     );
// };

// export default Commentshow;





// import React from 'react';

// const Commentshow = (props) => {
//     const {name, email, body, id} = props.comments;
//     return (
//         <div>
//                <div>
//                 <h5><strong>Name :</strong> {name}</h5>
//                 <h6> <strong> Email : </strong>{email}  </h6>
//                 <p> <strong>Comment :</strong>{body}</p>
//             </div>
//         </div>
//     );
// };

// export default Commentshow;

