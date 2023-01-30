//テキスト入力サンプル

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//型定義
type TextFieldPropsType = {
  text:string;
	setText:React.Dispatch<React.SetStateAction<string>>;
}

//関数本体
const FormTextField = ({text,setText}:TextFieldPropsType) => {
  return (
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" value={text} onChange={(e) => setText(e.target.value)} />
      <TextField id="filled-basic" label="Filled" variant="filled" value={text} onChange={(e) => setText(e.target.value)} />
      <TextField id="standard-basic" label="Standard" variant="standard" value={text} onChange={(e) => setText(e.target.value)} />
    </Box>
  )
}

export default FormTextField;