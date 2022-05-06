import { makeStyles } from "@mui/styles";

const UseStylesMain = makeStyles({
    '@global': {
        '.main': {
            display: 'flex', 
            justifyContent: 'space-around',
            margin: '50px'
        }
    }
})

export default UseStylesMain