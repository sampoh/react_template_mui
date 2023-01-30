//チェックボックスサンプル

import Checkbox from '@mui/material/Checkbox';

//型定義
type CheckPropsType = {
  check:boolean[];
	setCheck:React.Dispatch<React.SetStateAction<boolean[]>>;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

//関数本体
const FormCheckbox = ({check,setCheck}:CheckPropsType) => {
  let tempCheckArr:boolean[] = [];
  return (
  <div>
    <Checkbox {...label} checked={check[0]===true} onChange={(e)=>{
      tempCheckArr = [...check]; //更新用一時配列に複製
      tempCheckArr[0] = !tempCheckArr[0]; //対象要素を更新
      setCheck(tempCheckArr); //反映
    }} />
    <Checkbox {...label} checked={check[1]===true} onChange={(e)=>{
      tempCheckArr = [...check];
      tempCheckArr[1] = !tempCheckArr[1];
      setCheck(tempCheckArr);
    }} />
    <Checkbox {...label} checked={check[2]===true} onChange={(e)=>{
      tempCheckArr = [...check];
      tempCheckArr[2] = !tempCheckArr[2];
      setCheck(tempCheckArr);
    }} disabled />
    </div>
  )
}

export default FormCheckbox;