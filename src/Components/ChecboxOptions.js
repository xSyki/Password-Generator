function CheckboxOptions(props) {

  const handleInput = () => {
    props.handleValue(props.id, !props.value);
  }

  return (
    <label htmlFor={props.name} className='checkboxOptions'>
    <input type="checkbox" name={props.name} id={props.name} checked={props.value} onClick={handleInput}/>
    {props.title}
  </label>
  );
}

export default CheckboxOptions;
