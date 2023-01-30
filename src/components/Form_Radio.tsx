//ラジオボタンサンプル

import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

//型定義
type RadioPropsType = {
  radio:string;
	setRadio:React.Dispatch<React.SetStateAction<string>>;
  radioArr:string[];
}

//関数本体
const FormRadio = ({radio,setRadio,radioArr}:RadioPropsType) => {
  return (
    <FormControl>
    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={(e) => setRadio(e.target.value)}>
      {radioArr.map((value,key) =><FormControlLabel value={value} key={key} control={<Radio />} label={value} checked={value===radio}/>)}
      <FormControlLabel value="disabled" disabled control={<Radio />} label="other" />
    </RadioGroup>
  </FormControl>
  )
}

export default FormRadio;