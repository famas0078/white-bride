import classes from './generalBlocks.module.css';
const GeneralBlocks = ({ label, title }) => {
  return (
    <div className={classes.generalBlocks}>
      <div className={classes.generalBlocks_inner}>
        <div className={classes.generalBlocks_title}>
          {title}
          <div className={classes.generalBlocks_svg}>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
            <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div  className={classes.generalBlockslabel}>
          {label}
        </div>
      </div>
    </div>
  );
};
export default GeneralBlocks;