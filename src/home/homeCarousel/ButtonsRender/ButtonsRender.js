const buttonsRender = props => {
  return props.element.map((element, key) => props.action(key, element.id));
};

export default buttonsRender;
