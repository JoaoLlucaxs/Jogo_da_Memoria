import './button.css'

type Props={
    label:string;
    icon?:any;
    onClick:React.MouseEventHandler<HTMLDivElement>;
}

function Buton({label,icon,onClick}:Props) {
  return (
    <div className='container_btn' onClick={onClick}>
      {icon && 
        <div className='icon_area'>
          <img src={icon} alt='icone' className='icon'/>
        </div>
      }
        <div className='label'>{label}</div>
    </div>
  );
}

export default Buton