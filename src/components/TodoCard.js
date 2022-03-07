import { CardContent, Card, CardHeader,IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
const TodoCard = (props) => {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton onClick={() => props.deleteHandler(props.title)} >
            <CheckIcon />
          </IconButton>
        }
        title={props.title}
        // subheader={props.subheader}
      />
      <CardContent>
        {props.description}
      </CardContent>
    </Card>
  )
}

export default TodoCard