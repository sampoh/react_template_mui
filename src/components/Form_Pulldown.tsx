//プルダウンサンプル

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

//型定義
type PulldownPropsType = {
    txtSelect:string;
	setTxtSelect:React.Dispatch<React.SetStateAction<string>>;
    selectAdd:string[];
}

//関数本体
const FormPulldown = ({txtSelect,setTxtSelect,selectAdd}:PulldownPropsType) => {
  return (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">選択</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={txtSelect} label="選択" onChange={(e) => setTxtSelect(e.target.value)}>
            <MenuItem value=''>&nbsp;</MenuItem>
            {selectAdd.map((value,key) => <MenuItem value={value} key={key}>{key}:{value}</MenuItem>)}
        </Select>
    </FormControl>
  )
}

export default FormPulldown;