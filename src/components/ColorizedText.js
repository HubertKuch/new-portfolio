const ColorizedText = ({content, classColor = "text-primary"}) => <span className={classColor}>{content}</span>;

export default ColorizedText;